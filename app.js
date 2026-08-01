/* ひんやりコギさんぽ - メインロジック */

const CATEGORY_LABEL = {
  river: "🏞️ 川",
  sea: "🌊 海",
  lake: "🏔️ 湖",
  pool: "🏊 プール",
};

const DEFAULT_ORIGIN = { label: "川崎市（初期設定）", lat: 35.5308, lng: 139.7029, isDefault: true };
const LS_ORIGIN = "cogi-origin";
const LS_MARKS = "cogi-marks";

let origin = loadOrigin();
let marks = loadMarks();
let weatherData = {}; // spot.id -> {temp, feels, humidity, code, tempMax, rainProb}
let map = null;
let markers = {};
let currentFilter = "all";
let currentMarkFilter = "all";
let currentSort = "score";

/* ---------- 出発地（端末内にのみ保存） ---------- */
function loadOrigin() {
  try {
    const o = JSON.parse(localStorage.getItem(LS_ORIGIN));
    if (o && typeof o.lat === "number" && typeof o.lng === "number") return o;
  } catch (e) {}
  return DEFAULT_ORIGIN;
}

function saveOrigin(o) {
  origin = o;
  localStorage.setItem(LS_ORIGIN, JSON.stringify(o));
  document.getElementById("origin-name").textContent = o.label;
  renderAll();
}

function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function distKm(spot) {
  return haversineKm(origin.lat, origin.lng, spot.lat, spot.lng);
}

/* 直線距離から車での所要時間をざっくり推定（道路係数1.35・平均55km/h・準備12分） */
function effDriveMin(spot) {
  if (origin.isDefault) return spot.driveMin;
  return Math.round(((distKm(spot) * 1.35) / 55) * 60 + 12);
}

function driveLabel(spot) {
  if (origin.isDefault) return `車で約${spot.driveMin}分`;
  return `車で約${effDriveMin(spot)}分（推定）・直線${distKm(spot).toFixed(0)}km`;
}

async function setOriginFromAddress(query) {
  const statusEl = document.getElementById("origin-status");
  statusEl.textContent = "検索中…";
  try {
    const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=1&countrycodes=jp&accept-language=ja`;
    const res = await fetch(url);
    const results = await res.json();
    if (!results.length) {
      statusEl.textContent = "⚠️ 見つかりませんでした。表記を変えてお試しください";
      return;
    }
    const r = results[0];
    const label = query.length <= 20 ? query : query.slice(0, 20) + "…";
    saveOrigin({ label, lat: parseFloat(r.lat), lng: parseFloat(r.lon), isDefault: false });
    statusEl.textContent = `✅ 「${label}」を出発地に設定しました`;
  } catch (e) {
    statusEl.textContent = "⚠️ 検索に失敗しました（通信状態をご確認ください）";
  }
}

function setOriginFromGeolocation() {
  const statusEl = document.getElementById("origin-status");
  if (!navigator.geolocation) {
    statusEl.textContent = "⚠️ この端末では現在地を取得できません";
    return;
  }
  statusEl.textContent = "現在地を取得中…";
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      saveOrigin({
        label: "現在地",
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        isDefault: false,
      });
      statusEl.textContent = "✅ 現在地を出発地に設定しました（座標は端末内にのみ保存）";
    },
    () => {
      statusEl.textContent = "⚠️ 現在地を取得できませんでした（位置情報の許可をご確認ください）";
    }
  );
}

/* ---------- マーク（端末内にのみ保存） ---------- */
function loadMarks() {
  try {
    return JSON.parse(localStorage.getItem(LS_MARKS)) || {};
  } catch (e) {
    return {};
  }
}

function toggleMark(id, key) {
  if (!marks[id]) marks[id] = {};
  marks[id][key] = !marks[id][key];
  localStorage.setItem(LS_MARKS, JSON.stringify(marks));
  renderSpots();
  if (map) renderMarkers();
}

function hasMark(id, key) {
  return !!(marks[id] && marks[id][key]);
}

/* ---------- 天気取得 (Open-Meteo 一括リクエスト) ---------- */
async function fetchWeather() {
  const lats = SPOTS.map((s) => s.lat).join(",");
  const lngs = SPOTS.map((s) => s.lng).join(",");
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code` +
    `&daily=temperature_2m_max,precipitation_probability_max` +
    `&timezone=Asia%2FTokyo&forecast_days=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("weather fetch failed: " + res.status);
  const json = await res.json();
  const list = Array.isArray(json) ? json : [json];
  list.forEach((w, i) => {
    const spot = SPOTS[i];
    if (!spot) return;
    weatherData[spot.id] = {
      temp: w.current.temperature_2m,
      feels: w.current.apparent_temperature,
      humidity: w.current.relative_humidity_2m,
      code: w.current.weather_code,
      tempMax: w.daily.temperature_2m_max[0],
      rainProb: w.daily.precipitation_probability_max[0],
    };
  });
}

function weatherIcon(code) {
  if (code === 0) return "☀️";
  if (code <= 2) return "🌤️";
  if (code === 3) return "☁️";
  if (code <= 48) return "🌫️";
  if (code <= 67) return "🌧️";
  if (code <= 77) return "🌨️";
  if (code <= 82) return "🌧️";
  return "⛈️";
}

function isRainy(code) {
  return code >= 51;
}

/* ---------- スコア計算 ---------- */
function calcScore(spot) {
  const w = weatherData[spot.id];
  let score = 0;

  if (spot.water && spot.water.allowed) {
    score += 15;
    if ((spot.water.depth || "").includes("泳げる")) score += 5;
  }
  const best = bestRestaurant(spot);
  if (best) {
    if (best.policy === "店内OK") score += 10;
    else if (best.policy === "テラスのみ") score += 5;
    if (best.leadOK) score += 3;
  }
  if (spot.surface) {
    if (spot.surface.shade === "多い") score += 8;
    else if (spot.surface.shade === "普通") score += 4;
  }
  score -= (effDriveMin(spot) || 60) * 0.06;

  if (w) {
    score += 70;
    const feels = w.feels != null ? w.feels : w.temp;
    if (feels > 26) score -= (feels - 26) * 6;
    if (w.humidity > 65) score -= (w.humidity - 65) * 0.4;
    if (isRainy(w.code)) score -= 40;
    else if (w.rainProb >= 60) score -= 15;
  }
  return score;
}

function bestRestaurant(spot) {
  if (!spot.restaurants || spot.restaurants.length === 0) return null;
  const rank = { 店内OK: 2, テラスのみ: 1, なし: 0 };
  return [...spot.restaurants].sort(
    (a, b) => (rank[b.policy] || 0) - (rank[a.policy] || 0)
  )[0];
}

function tempClass(t) {
  if (t == null) return "";
  if (t <= 28) return "temp-cool";
  if (t <= 30) return "temp-mid";
  return "temp-hot";
}

function tempColor(t) {
  if (t == null) return "#94a3b8";
  if (t <= 28) return "#16a34a";
  if (t <= 30) return "#ca8a04";
  return "#dc2626";
}

/* ---------- 並び替え・絞り込み ---------- */
function visibleSpots() {
  let list = SPOTS.filter(
    (s) => currentFilter === "all" || s.category === currentFilter
  );
  if (currentMarkFilter !== "all") {
    list = list.filter((s) => hasMark(s.id, currentMarkFilter));
  }
  if (currentSort === "score") {
    list.sort((a, b) => calcScore(b) - calcScore(a));
  } else if (currentSort === "temp") {
    list.sort((a, b) => {
      const ta = weatherData[a.id] ? weatherData[a.id].temp : 99;
      const tb = weatherData[b.id] ? weatherData[b.id].temp : 99;
      return ta - tb;
    });
  } else {
    list.sort((a, b) => (effDriveMin(a) || 999) - (effDriveMin(b) || 999));
  }
  return list;
}

/* ---------- ミニ地図（OSMタイルを直接合成） ---------- */
function miniMapHtml(spot) {
  const z = 12;
  const n = 2 ** z;
  const xt = ((spot.lng + 180) / 360) * n;
  const latRad = (spot.lat * Math.PI) / 180;
  const yt = ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n;
  const px = xt * 256;
  const py = yt * 256;
  // 768x256のタイル層（中心＝スポット）に必要なタイルだけを敷き詰める
  const layerLeft = px - 384;
  const layerTop = py - 128;
  let tiles = "";
  const tx0 = Math.floor(layerLeft / 256);
  const ty0 = Math.floor(layerTop / 256);
  for (let tx = tx0; tx <= tx0 + 3; tx++) {
    for (let ty = ty0; ty <= ty0 + 1; ty++) {
      if (tx < 0 || ty < 0 || tx >= n || ty >= n) continue;
      const left = tx * 256 - layerLeft;
      const top = ty * 256 - layerTop;
      if (left <= -256 || left >= 768 || top <= -256 || top >= 256) continue;
      tiles += `<img src="https://tile.openstreetmap.org/${z}/${tx}/${ty}.png" style="left:${left}px;top:${top}px" loading="lazy" alt="">`;
    }
  }
  return `
  <a class="mini-map" href="https://www.google.com/maps/search/?api=1&query=${spot.lat},${spot.lng}" target="_blank" rel="noopener" title="地図で開く">
    <div class="mini-map-tiles">${tiles}</div>
    <span class="mini-map-pin">📍</span>
    <span class="mini-map-osm">© OSM</span>
  </a>`;
}

/* ---------- 描画 ---------- */
function renderTopPicks() {
  const section = document.getElementById("top-picks");
  const container = document.getElementById("top-picks-list");
  if (Object.keys(weatherData).length === 0) {
    section.classList.add("hidden");
    return;
  }
  const ranked = [...SPOTS].sort((a, b) => calcScore(b) - calcScore(a)).slice(0, 3);
  const medals = ["🥇", "🥈", "🥉"];
  container.innerHTML = ranked
    .map((s, i) => {
      const w = weatherData[s.id];
      return `
      <div class="top-pick-card" onclick="scrollToSpot('${s.id}')">
        <div class="top-pick-rank">${medals[i]}</div>
        <div class="top-pick-body">
          <div class="top-pick-name">${s.name}</div>
          <div class="top-pick-meta">${CATEGORY_LABEL[s.category] || ""} ・ ${s.area} ・ ${driveLabel(s)}</div>
        </div>
        <div class="top-pick-temp ${tempClass(w && w.temp)}">
          ${w ? weatherIcon(w.code) + " " + w.temp.toFixed(0) + "℃" : "--"}
        </div>
      </div>`;
    })
    .join("");
  section.classList.remove("hidden");
}

function renderSpots() {
  const container = document.getElementById("spot-list");
  const list = visibleSpots();
  if (list.length === 0) {
    container.innerHTML = '<p class="loading-note">該当するスポットがありません</p>';
    return;
  }
  container.innerHTML = list.map(renderCard).join("");
}

function renderCard(spot) {
  const w = weatherData[spot.id];
  const tooHot = w && w.temp > 30;
  const badges = [];
  badges.push(`<span class="badge">${CATEGORY_LABEL[spot.category] || ""}</span>`);
  if (spot.water && spot.water.allowed) {
    badges.push(
      `<span class="badge green">💦 入水OK${(spot.water.depth || "").includes("泳げる") ? "・泳げる" : ""}</span>`
    );
  }
  const best = bestRestaurant(spot);
  if (best && best.policy === "店内OK") {
    badges.push(`<span class="badge gold">🍽️ 店内わんこOK</span>`);
  } else if (best && best.policy === "テラスのみ") {
    badges.push(`<span class="badge">🍽️ テラス席OK</span>`);
  }
  if (spot.surface && spot.surface.shade === "多い") {
    badges.push(`<span class="badge green">🌳 日陰多め</span>`);
  }
  if (tooHot) badges.push(`<span class="badge warn">🥵 現在30℃超</span>`);
  if (w && isRainy(w.code)) badges.push(`<span class="badge warn">🌧️ 雨</span>`);

  const photoHtml = spot.photo && spot.photo.url
    ? `<div class="spot-photo">
         <img src="${spot.photo.url}" alt="${spot.name}" loading="lazy"
              onerror="this.closest('.spot-media') && this.parentElement.remove()">
         <span class="photo-credit">📷 ${spot.photo.credit || "Wikimedia Commons"}</span>
       </div>`
    : "";
  const mediaHtml = `<div class="spot-media">${photoHtml}${miniMapHtml(spot)}</div>`;

  const parking = (spot.parking || [])
    .map(
      (p) =>
        `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          p.name + " " + spot.area
        )}" target="_blank" rel="noopener">${p.name}</a>（${p.fee}${p.note ? "・" + p.note : ""}）`
    )
    .join("／");

  const restaurants = (spot.restaurants || [])
    .filter((r) => r.policy !== "なし")
    .map((r) => {
      const lead = r.leadOK === true ? "・リードOK" : "";
      return `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        r.name + " " + spot.area
      )}" target="_blank" rel="noopener">${r.name}</a>（${r.policy}${lead}）`;
    })
    .join("／");

  const weatherBox = w
    ? `
    <div class="weather-box">
      <div>
        <span class="weather-temp ${tempClass(w.temp)}">${weatherIcon(w.code)} ${w.temp.toFixed(1)}℃</span>
      </div>
      <div class="weather-detail">
        体感 ${w.feels.toFixed(0)}℃ ／ 湿度 ${w.humidity}%<br>
        本日最高 ${w.tempMax.toFixed(0)}℃ ／ 降水確率 ${w.rainProb != null ? w.rainProb + "%" : "--"}
      </div>
    </div>`
    : `<div class="weather-box"><span class="weather-detail">気温データ取得中…</span></div>`;

  const markBtns = `
    <div class="mark-btns">
      <button class="mark-btn fav ${hasMark(spot.id, "fav") ? "on" : ""}" onclick="toggleMark('${spot.id}','fav')">⭐ お気に入り</button>
      <button class="mark-btn visited ${hasMark(spot.id, "visited") ? "on" : ""}" onclick="toggleMark('${spot.id}','visited')">✅ 行った</button>
      <button class="mark-btn want ${hasMark(spot.id, "want") ? "on" : ""}" onclick="toggleMark('${spot.id}','want')">👀 気になる</button>
    </div>`;

  return `
  <article class="spot-card ${tooHot ? "too-hot" : ""}" id="spot-${spot.id}">
    <div class="spot-head">
      <div>
        <div class="spot-title">${spot.name}</div>
        <div class="spot-area">${spot.area} ・ ${driveLabel(spot)} ・ 標高${spot.elevation_m}m</div>
      </div>
    </div>
    ${mediaHtml}
    <div class="spot-badges">${badges.join("")}</div>
    ${weatherBox}
    <div class="spot-detail">
      <div class="detail-row"><span class="detail-icon">💦</span><span>${spot.water ? spot.water.note || spot.water.depth || "" : ""}</span></div>
      <div class="detail-row"><span class="detail-icon">🅿️</span><span>${parking || "要確認"}</span></div>
      ${restaurants ? `<div class="detail-row"><span class="detail-icon">🍽️</span><span>${restaurants}</span></div>` : ""}
      <div class="detail-row"><span class="detail-icon">🌳</span><span>日陰: ${spot.surface ? spot.surface.shade : "?"} ／ 地面: ${spot.surface ? spot.surface.ground : "?"}</span></div>
      ${spot.notes ? `<div class="detail-row"><span class="detail-icon">📝</span><span>${spot.notes}</span></div>` : ""}
      ${spot.official && spot.official.url
        ? `<div class="detail-row official-row"><span class="detail-icon">📖</span><span>犬連れルールの一次情報: <a href="${spot.official.url}" target="_blank" rel="noopener"><b>${spot.official.label || "公式サイト"}</b></a> で最新情報を確認してからお出かけください</span></div>`
        : ""}
    </div>
    ${markBtns}
    <div class="spot-actions">
      <a class="action-btn" href="https://www.google.com/maps/dir/?api=1&destination=${spot.lat},${spot.lng}" target="_blank" rel="noopener">🚗 ナビ開始</a>
      <a class="action-btn secondary" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(spot.name)}" target="_blank" rel="noopener">📍 地図で見る</a>
    </div>
  </article>`;
}

/* ---------- 地図 ---------- */
function initMap() {
  map = L.map("map").setView([35.45, 139.3], 8);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
  }).addTo(map);
  renderMarkers();
}

function renderMarkers() {
  Object.values(markers).forEach((m) => map.removeLayer(m));
  markers = {};
  visibleSpots().forEach((spot) => {
    const w = weatherData[spot.id];
    const marker = L.circleMarker([spot.lat, spot.lng], {
      radius: 10,
      fillColor: tempColor(w && w.temp),
      color: hasMark(spot.id, "fav") ? "#facc15" : "#fff",
      weight: hasMark(spot.id, "fav") ? 3 : 2,
      fillOpacity: 0.9,
    }).addTo(map);
    marker.bindPopup(
      `<b>${spot.name}</b><br>${w ? w.temp.toFixed(1) + "℃ / 湿度" + w.humidity + "%" : ""}<br>` +
        `<a href="#" onclick="scrollToSpot('${spot.id}');return false;">詳細を見る</a>`
    );
    markers[spot.id] = marker;
  });
}

/* ---------- 除外リスト ---------- */
function renderExcluded() {
  const container = document.getElementById("excluded-list");
  if (!container || typeof EXCLUDED === "undefined") return;
  container.innerHTML = EXCLUDED.map(
    (e) => `
    <div class="excluded-item">
      <span class="excluded-type ${e.type === "不明" || e.type === "駐車場なし" ? "gray" : ""}">${e.type}</span>
      <div class="excluded-body"><b>${e.name}</b>（${e.area}）<br>
        <span class="excluded-reason">${e.reason}</span>
      </div>
    </div>`
  ).join("");
}

function scrollToSpot(id) {
  const el = document.getElementById("spot-" + id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------- 初期化 ---------- */
function renderAll() {
  renderTopPicks();
  renderSpots();
  if (map) renderMarkers();
}

async function refresh() {
  const timeEl = document.getElementById("update-time");
  timeEl.textContent = "気温データ取得中…";
  try {
    await fetchWeather();
    const now = new Date();
    timeEl.textContent =
      `${now.getHours()}:${String(now.getMinutes()).padStart(2, "0")} 時点の気温`;
  } catch (e) {
    console.error(e);
    timeEl.textContent = "⚠️ 気温データの取得に失敗しました";
  }
  renderAll();
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("origin-name").textContent = origin.label;
  document.getElementById("origin-edit-btn").addEventListener("click", () => {
    document.getElementById("origin-form").classList.toggle("hidden");
  });
  document.getElementById("origin-close-btn").addEventListener("click", () => {
    document.getElementById("origin-form").classList.add("hidden");
  });
  document.getElementById("origin-search-btn").addEventListener("click", () => {
    const q = document.getElementById("origin-input").value.trim();
    if (q) setOriginFromAddress(q);
  });
  document.getElementById("origin-input").addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (q) setOriginFromAddress(q);
    }
  });
  document.getElementById("origin-geo-btn").addEventListener("click", setOriginFromGeolocation);
  document.getElementById("origin-reset-btn").addEventListener("click", () => {
    localStorage.removeItem(LS_ORIGIN);
    origin = DEFAULT_ORIGIN;
    document.getElementById("origin-name").textContent = origin.label;
    document.getElementById("origin-status").textContent = "川崎市（初期設定）に戻しました";
    renderAll();
  });

  document.getElementById("filter-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#filter-chips .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
    renderAll();
  });
  document.getElementById("mark-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll("#mark-chips .chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentMarkFilter = chip.dataset.mark;
    renderAll();
  });
  document.getElementById("sort-select").addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderAll();
  });
  document.getElementById("refresh-btn").addEventListener("click", refresh);

  document.getElementById("spot-list").innerHTML =
    '<p class="loading-note">スポットを読み込み中…</p>';
  initMap();
  renderSpots();
  renderExcluded();
  refresh();
});
