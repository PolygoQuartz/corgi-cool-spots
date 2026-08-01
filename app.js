/* ひんやりコギさんぽ - メインロジック */

const CATEGORY_LABEL = {
  river: "🏞️ 川",
  sea: "🌊 海",
  lake: "🏔️ 湖",
  pool: "🏊 プール",
};

let weatherData = {}; // spot.id -> {temp, feels, humidity, code, tempMax, rainProb}
let map = null;
let markers = {}; // spot.id -> marker
let currentFilter = "all";
let currentSort = "score";

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

  // 静的スコア（設備・環境）
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
  score -= (spot.driveMin || 60) * 0.06; // 遠さペナルティ（軽め）

  // 天気スコア
  if (w) {
    score += 70;
    const feels = w.feels != null ? w.feels : w.temp;
    if (feels > 26) score -= (feels - 26) * 6; // 体感26℃超からペナルティ
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
  if (currentSort === "score") {
    list.sort((a, b) => calcScore(b) - calcScore(a));
  } else if (currentSort === "temp") {
    list.sort((a, b) => {
      const ta = weatherData[a.id] ? weatherData[a.id].temp : 99;
      const tb = weatherData[b.id] ? weatherData[b.id].temp : 99;
      return ta - tb;
    });
  } else {
    list.sort((a, b) => (a.driveMin || 999) - (b.driveMin || 999));
  }
  return list;
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
          <div class="top-pick-meta">${CATEGORY_LABEL[s.category] || ""} ・ ${s.area} ・ 車で約${s.driveMin}分</div>
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

  return `
  <article class="spot-card ${tooHot ? "too-hot" : ""}" id="spot-${spot.id}">
    <div class="spot-head">
      <div>
        <div class="spot-title">${spot.name}</div>
        <div class="spot-area">${spot.area} ・ 川崎から車で約${spot.driveMin}分 ・ 標高${spot.elevation_m}m</div>
      </div>
    </div>
    <div class="spot-badges">${badges.join("")}</div>
    ${weatherBox}
    <div class="spot-detail">
      <div class="detail-row"><span class="detail-icon">💦</span><span>${spot.water ? spot.water.note || spot.water.depth || "" : ""}</span></div>
      <div class="detail-row"><span class="detail-icon">🅿️</span><span>${parking || "要確認"}</span></div>
      ${restaurants ? `<div class="detail-row"><span class="detail-icon">🍽️</span><span>${restaurants}</span></div>` : ""}
      <div class="detail-row"><span class="detail-icon">🌳</span><span>日陰: ${spot.surface ? spot.surface.shade : "?"} ／ 地面: ${spot.surface ? spot.surface.ground : "?"}</span></div>
      ${spot.notes ? `<div class="detail-row"><span class="detail-icon">📝</span><span>${spot.notes}</span></div>` : ""}
    </div>
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
      color: "#fff",
      weight: 2,
      fillOpacity: 0.9,
    }).addTo(map);
    marker.bindPopup(
      `<b>${spot.name}</b><br>${w ? w.temp.toFixed(1) + "℃ / 湿度" + w.humidity + "%" : ""}<br>` +
        `<a href="#" onclick="scrollToSpot('${spot.id}');return false;">詳細を見る</a>`
    );
    markers[spot.id] = marker;
  });
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
  document.getElementById("filter-chips").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    document.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentFilter = chip.dataset.filter;
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
  refresh();
});
