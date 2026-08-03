/* ひんやりコギさんぽ - メインロジック */

const CATEGORY_LABEL = {
  river: "🏞️ 川",
  sea: "🌊 海",
  lake: "🏔️ 湖",
  pool: "🏊 プール",
  park: "🌳 公園",
  street: "🌃 街歩き",
  mall: "🛍️ モール",
  dogrun: "🐕 ドッグラン",
};

const MODE_CONFIG = {
  day: {
    cats: ["all", "river", "sea", "lake", "pool"],
    subtitle: "暑い日でも快適な、コーギーと行く水遊びスポット",
    topTitle: "🏆 今日のおすすめ",
  },
  night: {
    cats: ["all", "park", "street", "mall", "dogrun"],
    subtitle: "涼しくなった夜に、コーギーと歩ける明るい散歩スポット",
    topTitle: "🌙 今夜のおすすめ",
  },
};

let currentMode = localStorage.getItem("cogi-mode") === "night" ? "night" : "day";

function activeSpots() {
  if (currentMode === "night") {
    return typeof NIGHT_SPOTS !== "undefined" ? NIGHT_SPOTS : [];
  }
  return SPOTS;
}

function allSpots() {
  const night = typeof NIGHT_SPOTS !== "undefined" ? NIGHT_SPOTS : [];
  return SPOTS.concat(night);
}

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
let currentDriveMax = loadDriveMax(); // null = 制限なし

function loadDriveMax() {
  const v = localStorage.getItem("cogi-drivemax");
  return v && v !== "all" ? parseInt(v, 10) : null;
}

function withinDrive(spot) {
  return currentDriveMax == null || effDriveMin(spot) <= currentDriveMax;
}

/* ---------- 営業時間の解析と「間に合うか」判定 ---------- */
let currentHoursFilter = "all";
let currentDay = "today"; // "today" または 0(日)〜6(土)

function parseOpenRange(open) {
  // "9:00〜17:00" → {from, to}（分）。"終日" などは null（常時OK）
  const m = (open || "").match(/(\d{1,2}):(\d{2})\s*〜\s*(\d{1,2}):(\d{2})/);
  if (!m) return null;
  return { from: +m[1] * 60 + +m[2], to: +m[3] * 60 + +m[4] };
}

function closedDaysOf(hours) {
  // 定休日文字列 → {days:Set<0-6>, ordinal:{nth,day}|null, weekdaysOff:bool, unknown:bool}
  const c = hours && hours.closed;
  const res = { days: new Set(), ordinal: null, weekdaysOff: false, unknown: false };
  if (!c) return res;
  if (/不定/.test(c)) { res.unknown = true; return res; }
  const stripped = c.replace(/[（(].*?[）)]/g, "").replace(/祝日?/g, "");
  const kanji = { 日: 0, 月: 1, 火: 2, 水: 3, 木: 4, 金: 5, 土: 6 };
  const ord = stripped.match(/第(\d)([日月火水木金土])/);
  if (ord) {
    res.ordinal = { nth: +ord[1], day: kanji[ord[2]] };
    return res;
  }
  if (/平日/.test(stripped)) {
    // 「平日休（GW・夏休みは無休）」→ 7・8月は無休扱い
    const m = new Date().getMonth();
    if (/夏休み|GW/.test(c) && (m === 6 || m === 7)) return res;
    res.weekdaysOff = true;
    return res;
  }
  for (const ch of stripped) if (ch in kanji) res.days.add(kanji[ch]);
  return res;
}

function isClosedOnDate(hours, date) {
  const info = closedDaysOf(hours);
  const dow = date.getDay();
  if (info.weekdaysOff) return dow >= 1 && dow <= 5;
  if (info.ordinal) {
    const nth = Math.floor((date.getDate() - 1) / 7) + 1;
    return dow === info.ordinal.day && nth === info.ordinal.nth;
  }
  return info.days.has(dow);
}

function isClosedOnDow(hours, dow) {
  const info = closedDaysOf(hours);
  if (info.weekdaysOff) return dow >= 1 && dow <= 5;
  if (info.ordinal) return dow === info.ordinal.day; // その曜日に定休の可能性あり
  return info.days.has(dow);
}

function fmtMin(min) {
  return `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;
}

/* 飲食店の「今行けるか」判定 */
function restoStatus(r) {
  if (!r.hours || !r.hours.open) return { cls: "off", text: "営業時間は要確認" };
  const now = new Date();
  if (isClosedOnDate(r.hours, now)) return { cls: "ng", text: "⛔ 本日定休日" };
  const range = parseOpenRange(r.hours.open);
  if (!range) return { cls: "ok", text: `営業: ${r.hours.open}` };
  const nowMin = now.getHours() * 60 + now.getMinutes();
  if (nowMin < range.from) return { cls: "off", text: `⏳ 営業時間外（${fmtMin(range.from)}開店）` };
  if (nowMin >= range.to) return { cls: "ng", text: "🌙 本日の営業は終了" };
  const remain = range.to - nowMin;
  if (remain < 60) return { cls: "soon", text: `⚠️ 営業中・${fmtMin(range.to)}まで（あと${remain}分）` };
  return { cls: "ok", text: `🟢 営業中・${fmtMin(range.to)}まで` };
}

/* 今出発した場合の到着と営業の関係
   status: closed(本日定休) / missed(閉店に間に合わない) / tight(滞在short) / early(開場前着) / ok / always(終日) */
function reachability(spot) {
  const now = new Date();
  const drive = effDriveMin(spot) || 0;
  const arrive = new Date(now.getTime() + drive * 60000);
  const arriveStr = `${arrive.getHours()}:${String(arrive.getMinutes()).padStart(2, "0")}`;
  if (isClosedOnDate(spot.hours, now)) return { status: "closed", arriveStr };
  const range = parseOpenRange(spot.hours && spot.hours.open);
  if (!range) return { status: "always", arriveStr };
  const sameDay = arrive.getDate() === now.getDate();
  const arriveMin = arrive.getHours() * 60 + arrive.getMinutes();
  if (!sameDay || arriveMin >= range.to) return { status: "missed", arriveStr };
  const remain = range.to - Math.max(arriveMin, range.from);
  if (arriveMin < range.from) return { status: "early", arriveStr, remain, opensAt: range.from };
  if (remain < 60) return { status: "tight", arriveStr, remain };
  return { status: "ok", arriveStr, remain };
}

function isOpenNow(spot) {
  const now = new Date();
  if (isClosedOnDate(spot.hours, now)) return false;
  const range = parseOpenRange(spot.hours && spot.hours.open);
  if (!range) return true;
  const nowMin = now.getHours() * 60 + now.getMinutes();
  return nowMin >= range.from && nowMin < range.to;
}

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
  const targets = allSpots();
  const lats = targets.map((s) => s.lat).join(",");
  const lngs = targets.map((s) => s.lng).join(",");
  const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${lats}&longitude=${lngs}` +
    `&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code` +
    `&daily=temperature_2m_max,precipitation_probability_max,sunrise,sunset` +
    `&timezone=Asia%2FTokyo&forecast_days=1`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("weather fetch failed: " + res.status);
  const json = await res.json();
  const list = Array.isArray(json) ? json : [json];
  list.forEach((w, i) => {
    const spot = targets[i];
    if (!spot) return;
    weatherData[spot.id] = {
      temp: w.current.temperature_2m,
      feels: w.current.apparent_temperature,
      humidity: w.current.relative_humidity_2m,
      code: w.current.weather_code,
      tempMax: w.daily.temperature_2m_max[0],
      rainProb: w.daily.precipitation_probability_max[0],
      sunrise: (w.daily.sunrise[0] || "").slice(11, 16),
      sunset: (w.daily.sunset[0] || "").slice(11, 16),
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
  if (spot.night) {
    score += spot.night.lighting === "多い" ? 8 : 4;
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

  // 今から出発して間に合わない場所はおすすめから降格
  const r = reachability(spot).status;
  if (r === "closed" || r === "missed") score -= 60;
  else if (r === "tight") score -= 15;
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
/* 海水浴場開設期間による犬NG判定（water.swimBan: {from:"MM-DD", to:"MM-DD", label}） */
function swimBanToday(spot) {
  const b = spot.water && spot.water.swimBan;
  if (!b) return false;
  const now = new Date();
  const md = String(now.getMonth() + 1).padStart(2, "0") + "-" + String(now.getDate()).padStart(2, "0");
  return md >= b.from && md <= b.to;
}

let excludeSwimBan = false;

function visibleSpots() {
  let list = activeSpots().filter(
    (s) => (currentFilter === "all" || s.category === currentFilter) && withinDrive(s)
  );
  if (excludeSwimBan) list = list.filter((s) => !swimBanToday(s));
  if (currentMarkFilter !== "all") {
    list = list.filter((s) => hasMark(s.id, currentMarkFilter));
  }
  if (currentHoursFilter === "open-now") {
    list = list.filter(isOpenNow);
  } else if (currentHoursFilter === "reachable") {
    list = list.filter((s) => {
      const r = reachability(s).status;
      return r !== "missed" && r !== "closed";
    });
  } else if (currentHoursFilter === "allday") {
    list = list.filter((s) => !parseOpenRange(s.hours && s.hours.open));
  }
  if (currentDay !== "today") {
    list = list.filter((s) => !isClosedOnDow(s.hours, +currentDay));
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

/* ---------- ミニ地図（出発地🚩とスポット📍を1枚に収める広域図） ---------- */
function globalPx(lat, lng, z) {
  const n = 2 ** z;
  const latRad = (lat * Math.PI) / 180;
  return {
    x: ((lng + 180) / 360) * n * 256,
    y: ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n * 256,
  };
}

/* ---------- 端末間同期（マーク＋出発地をURLに載せて手動同期） ---------- */
function buildSyncUrl() {
  const payload = { v: 1, marks, origin: origin.isDefault ? null : { label: origin.label, lat: origin.lat, lng: origin.lng } };
  const b64 = btoa(unescape(encodeURIComponent(JSON.stringify(payload))))
    .replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  return location.origin + location.pathname + "#sync=" + b64;
}

function importFromSyncHash() {
  if (!location.hash.startsWith("#sync=")) return;
  const clear = () => history.replaceState(null, "", location.pathname + location.search);
  try {
    const b64 = location.hash.slice(6).replace(/-/g, "+").replace(/_/g, "/");
    const data = JSON.parse(decodeURIComponent(escape(atob(b64))));
    if (data.v !== 1) throw new Error("version");
    const markN = Object.values(data.marks || {}).filter((m) => m.fav || m.visited || m.want).length;
    const originTxt = data.origin ? `出発地「${data.origin.label}」` : "出発地: なし";
    if (!confirm(`別の端末からの同期データを取り込みますか？\n\nマーク: ${markN}件 ／ ${originTxt}\n（この端末の既存マークとは統合されます）`)) {
      clear();
      return;
    }
    for (const [id, m] of Object.entries(data.marks || {})) {
      marks[id] = marks[id] || {};
      for (const k of ["fav", "visited", "want"]) if (m[k]) marks[id][k] = true;
    }
    localStorage.setItem(LS_MARKS, JSON.stringify(marks));
    if (data.origin && typeof data.origin.lat === "number" && typeof data.origin.lng === "number") {
      saveOrigin({ label: String(data.origin.label || "同期した出発地"), lat: data.origin.lat, lng: data.origin.lng, isDefault: false });
    }
    clear();
    renderAll();
    alert("✅ 取り込みました");
  } catch (e) {
    console.error(e);
    alert("同期データを読み込めませんでした");
    clear();
  }
}

/* ---------- 訪問記録（飼い主の一次情報） ---------- */
function visitsOf(spot) {
  if (typeof VISITS === "undefined") return [];
  return VISITS.filter((v) => v.spotId === spot.id).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

/* 縦横混在でも隙間なく並ぶジャスティファイドギャラリー（キャプションは表示しない） */
function visitPhotoImgs(v) {
  return (v.photos || [])
    .map(
      (p) =>
        `<img class="visit-photo-img" src="${p.src}" alt="${p.alt || ""}" loading="lazy" onload="const r=this.naturalWidth/this.naturalHeight;this.style.width=(130*r)+'px';this.style.flexGrow=r*100" onerror="this.remove()">`
    )
    .join("");
}

/* ---------- 写真ライトボックス（別タブを開かないページ内ビューア） ---------- */
let lbPhotos = [];
let lbIndex = 0;

function ensureLightbox() {
  if (document.getElementById("lightbox")) return;
  const div = document.createElement("div");
  div.id = "lightbox";
  div.className = "lightbox hidden";
  div.innerHTML = `
    <button class="lb-close" aria-label="閉じる">✕</button>
    <button class="lb-prev" aria-label="前の写真">‹</button>
    <img class="lb-img" alt="">
    <button class="lb-next" aria-label="次の写真">›</button>
    <div class="lb-count"></div>`;
  document.body.appendChild(div);
  div.addEventListener("click", (e) => {
    if (e.target === div || e.target.classList.contains("lb-close")) closeLightbox();
  });
  div.querySelector(".lb-prev").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIndex - 1); });
  div.querySelector(".lb-next").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIndex + 1); });
  document.addEventListener("keydown", (e) => {
    if (div.classList.contains("hidden")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") lbShow(lbIndex - 1);
    if (e.key === "ArrowRight") lbShow(lbIndex + 1);
  });
  // スワイプで前後の写真へ
  let sx = 0;
  div.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  div.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50 && lbPhotos.length > 1) lbShow(lbIndex + (dx < 0 ? 1 : -1));
  }, { passive: true });
  // スマホの「戻る」で閉じられるように
  window.addEventListener("popstate", () => {
    if (!div.classList.contains("hidden")) hideLightbox();
  });
}

function lbShow(i) {
  if (!lbPhotos.length) return;
  lbIndex = (i + lbPhotos.length) % lbPhotos.length;
  const lb = document.getElementById("lightbox");
  const img = lb.querySelector(".lb-img");
  img.src = lbPhotos[lbIndex].src;
  img.alt = lbPhotos[lbIndex].alt;
  lb.querySelector(".lb-count").textContent = lbPhotos.length > 1 ? `${lbIndex + 1} / ${lbPhotos.length}` : "";
  const multi = lbPhotos.length > 1 ? "" : "none";
  lb.querySelector(".lb-prev").style.display = multi;
  lb.querySelector(".lb-next").style.display = multi;
}

function openLightbox(img) {
  ensureLightbox();
  const gallery = img.closest(".visit-photos");
  const imgs = gallery ? [...gallery.querySelectorAll(".visit-photo-img")] : [img];
  lbPhotos = imgs.map((i) => ({ src: i.src, alt: i.alt }));
  lbIndex = Math.max(0, imgs.indexOf(img));
  document.getElementById("lightbox").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  history.pushState({ lightbox: true }, "");
  lbShow(lbIndex);
}

function hideLightbox() {
  document.getElementById("lightbox").classList.add("hidden");
  document.body.style.overflow = "";
}

function closeLightbox() {
  hideLightbox();
  if (history.state && history.state.lightbox) history.back();
}

/* 地面温度の1行（実測値 or 素手体感の両対応） */
const GT_FEEL_ICON = { "危険": "🚨", "アチアチ": "🔥", "人肌": "🖐️", "ひんやり": "❄️" };
function gtRowHtml(t, v) {
  const val = t.tempC != null ? `${t.tempC}℃` : t.feel ? `${t.feel}${GT_FEEL_ICON[t.feel] || ""}` : "";
  if (!val) return "";
  const meta = t.tempC != null ? `${v.date} ${t.time || ""} 現地実測` : `${v.date} 飼い主の素手体感`;
  return `<div class="gt-row"><span class="gt-label">${t.surface}${t.sun ? `（${t.sun}）` : ""}</span><b class="gt-val">${val}</b><span class="gt-meta">${meta}</span></div>`;
}

/* 訪問1回分のエントリ（スポット・飲食店共通） */
function visitEntryHtml(v, opts) {
  const full = !(opts && opts.compact);
  const temps = (v.groundTemps || []).map((t) => gtRowHtml(t, v)).join("");
  const dogs = (v.dogCondition || []).map((d) => `<span class="dog-chip">${d}</span>`).join("");
  const routes = full ? (v.routeNotes || []).map((r) => `<li>${r}</li>`).join("") : "";
  const notes = (v.onSiteNotes || []).map((r) => `<li>⚠️ ${r}</li>`).join("");
  const photos = visitPhotoImgs(v);
  const detailBody =
    (full && (v.shadeImpression || v.crowdImpression) ? `<p class="visit-meta">日陰: ${v.shadeImpression || "-"} ／ 混雑: ${v.crowdImpression || "-"}${v.weather ? ` ／ 天気: ${v.weather}（体感）` : ""}</p>` : "") +
    (routes ? `<ul class="visit-routes">${routes}</ul>` : "") +
    (notes ? `<ul class="visit-notes">${notes}</ul>` : "") +
    (v.diary ? `<p class="visit-diary">${v.diary}</p>` : "");
  return `
    <div class="visit-entry">
      <div class="visit-entry-date">📅 ${v.date}${v.arrivedAt ? ` ${v.arrivedAt}着` : ""}</div>
      ${v.summary ? `<p class="visit-summary">「${v.summary}」</p>` : ""}
      ${dogs && full ? `<div class="dog-chips">${dogs}</div>` : ""}
      ${temps ? `<div class="gt-table">${temps}</div>` : ""}
      ${photos ? `<div class="visit-photos">${photos}</div>` : ""}
      ${detailBody ? `<details class="visit-details"><summary>${full ? "旅行記・詳細を読む" : "訪問メモを読む"}</summary>${detailBody}</details>` : ""}
    </div>`;
}

/* カード写真が無い場合に訪問記録の代表写真を流用する */
function visitCardPhoto(list) {
  for (const v of list) {
    const p = (v.photos || []).find((x) => x.representative) || (v.photos || [])[0];
    if (p) return { url: p.src, credit: `現地撮影（${v.date}）` };
  }
  return null;
}

function restoVisitsOf(rid) {
  if (typeof VISITS === "undefined") return [];
  return VISITS.filter((v) => v.restaurantRef === rid).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

/* 飲食店カード用のコンパクトな訪問記録欄（複数訪問対応） */
function restoVisitHtml(rid) {
  const list = restoVisitsOf(rid);
  if (list.length === 0) return "";
  return `
  <div class="visit-block resto-visit">
    <div class="visit-head">🐾 <b>ルチルが遊びに行きました</b>${list.length > 1 ? `<span class="visit-date">計${list.length}回</span>` : ""}</div>
    ${list.map((v) => visitEntryHtml(v, { compact: true })).join("")}
    <p class="visit-caveat">※訪問時点の記録です。営業時間・ルールは変わることがあります。</p>
  </div>`;
}

/* スポットカードの訪問記録ブロック（複数訪問対応） */
function visitBlockHtml(spot) {
  const list = visitsOf(spot);
  if (list.length === 0) return "";
  return `
  <div class="visit-block">
    <div class="visit-head">🐾 <b>ルチルが遊びに行きました</b>${list.length > 1 ? `<span class="visit-date">計${list.length}回</span>` : ""}</div>
    ${list.map((v) => visitEntryHtml(v)).join("")}
    <p class="visit-caveat">※訪問時点の記録です。天候・季節・混雑によって状況は変わります。</p>
  </div>`;
}

/* 飲食店エントリを解決（ref参照 or 旧インライン形式の両対応） */
function resolveResto(entry, spot) {
  if (entry.ref && typeof RESTAURANTS !== "undefined" && RESTAURANTS[entry.ref]) {
    return { ...RESTAURANTS[entry.ref], pairNote: entry.note || "" };
  }
  const r = { ...entry, pairNote: entry.note || "" };
  // 併設・園内カフェは施設の営業時間に準ずる
  if (!r.hours && spot && /併設|園内|場内|館内/.test(r.name || "")) {
    r.hours = spot.hours;
  }
  return r;
}

/* 飲食店カード（写真・ミニ地図・営業状況つき） */
function restaurantCardHtml(r, spot) {
  const lead = r.leadOK === true ? "・リードOK" : "";
  const tag = r.policy === "店内OK"
    ? `<span class="resto-tag in">店内OK${lead}</span>`
    : `<span class="resto-tag">テラス${lead}</span>`;
  const st = restoStatus(r);
  const statusHtml = `<span class="resto-status ${st.cls}">${st.text}</span>`;
  const hoursLine = r.hours && r.hours.open
    ? `<div class="resto-hours">🕐 ${r.hours.open}${r.hours.closed ? `・<span class="hours-closed">${r.hours.closed}</span>` : ""}${r.hours.note ? `<span class="hours-note">（${r.hours.note}）</span>` : ""}</div>`
    : "";
  const rCardPhoto = r.photo && r.photo.url ? r.photo : r.id ? visitCardPhoto(restoVisitsOf(r.id)) : null;
  const photoHtml = rCardPhoto
    ? `<div class="spot-photo"><img src="${rCardPhoto.url}" alt="${r.name}" loading="lazy" onerror="this.parentElement.remove()"><span class="photo-credit">📷 ${rCardPhoto.credit || ""}</span></div>`
    : "";
  let mapHtml = "";
  if (r.lat && r.lng) {
    const km = haversineKm(spot.lat, spot.lng, r.lat, r.lng);
    mapHtml = miniMapPairHtml(
      { lat: r.lat, lng: r.lng, pin: "🍽️" },
      { lat: spot.lat, lng: spot.lng, pin: "📍" },
      {
        href: `https://www.google.com/maps/dir/?api=1&origin=${spot.lat},${spot.lng}&destination=${r.lat},${r.lng}`,
        title: "遊び場からの経路を開く",
        distLabel: `遊び場から直線 ${km < 10 ? km.toFixed(1) : km.toFixed(0)}km`,
        cls: "resto-map",
      }
    );
  }
  const media = photoHtml || mapHtml ? `<div class="spot-media resto-media">${photoHtml}${mapHtml}</div>` : "";
  return `
  <div class="resto-card">
    <div class="resto-card-head">
      <a class="resto-name" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + (r.area || spot.area))}" target="_blank" rel="noopener">${r.name}</a>
      ${tag}
    </div>
    <div class="resto-status-row">${statusHtml}</div>
    ${media}
    ${hoursLine}
    ${r.pairNote ? `<div class="resto-note">${r.pairNote}</div>` : ""}
    ${r.id ? restoVisitHtml(r.id) : ""}
  </div>`;
}

/* 2点（a=主役ピン, b=基準ピン）が1枚に収まる広域ミニ地図を生成 */
function miniMapPairHtml(a, b, opts) {
  let z = opts.maxZoom || 11;
  let pA, pB;
  for (; z >= 5; z--) {
    pA = globalPx(a.lat, a.lng, z);
    pB = globalPx(b.lat, b.lng, z);
    if (Math.abs(pA.x - pB.x) <= 250 && Math.abs(pA.y - pB.y) <= 100) break;
  }
  const midX = (pA.x + pB.x) / 2;
  const midY = (pA.y + pB.y) / 2;
  const layerLeft = midX - 384;
  const layerTop = midY - 128;
  const n = 2 ** z;
  let tiles = "";
  const tx0 = Math.floor(layerLeft / 256);
  const ty0 = Math.floor(layerTop / 256);
  for (let tx = tx0; tx <= tx0 + 3; tx++) {
    for (let ty = ty0; ty <= ty0 + 1; ty++) {
      if (tx < 0 || ty < 0 || tx * 256 >= n * 256 || ty * 256 >= n * 256) continue;
      const left = tx * 256 - layerLeft;
      const top = ty * 256 - layerTop;
      if (left <= -256 || left >= 768 || top <= -256 || top >= 256) continue;
      tiles += `<img src="https://tile.openstreetmap.org/${z}/${tx}/${ty}.png" style="left:${left}px;top:${top}px" loading="lazy" alt="">`;
    }
  }
  const ax = pA.x - layerLeft, ay = pA.y - layerTop;
  const bx = pB.x - layerLeft, by = pB.y - layerTop;
  const line = `<svg class="mini-map-line" width="768" height="256" viewBox="0 0 768 256">
    <line x1="${bx.toFixed(1)}" y1="${by.toFixed(1)}" x2="${ax.toFixed(1)}" y2="${ay.toFixed(1)}"
          stroke="#0369a1" stroke-width="2.5" stroke-dasharray="7 5" stroke-linecap="round" opacity="0.85"/>
  </svg>`;
  return `
  <a class="mini-map ${opts.cls || ""}" href="${opts.href}" target="_blank" rel="noopener" title="${opts.title || "地図で開く"}">
    <div class="mini-map-tiles">${tiles}${line}
      <span class="mini-map-pin origin-pin" style="left:${bx.toFixed(1)}px;top:${by.toFixed(1)}px">${b.pin}</span>
      <span class="mini-map-pin spot-pin" style="left:${ax.toFixed(1)}px;top:${ay.toFixed(1)}px">${a.pin}</span>
    </div>
    <span class="mini-map-dist">${opts.distLabel}</span>
    <span class="mini-map-osm">© OSM</span>
  </a>`;
}

function miniMapHtml(spot) {
  const km = distKm(spot);
  return miniMapPairHtml(
    { lat: spot.lat, lng: spot.lng, pin: "📍" },
    { lat: origin.lat, lng: origin.lng, pin: "🚩" },
    {
      href: `https://www.google.com/maps/dir/?api=1&origin=${origin.lat},${origin.lng}&destination=${spot.lat},${spot.lng}`,
      title: "経路を地図で開く",
      distLabel: `出発地から直線 ${km < 10 ? km.toFixed(1) : km.toFixed(0)}km`,
    }
  );
}

/* ---------- 描画 ---------- */
function renderTopPicks() {
  const section = document.getElementById("top-picks");
  const container = document.getElementById("top-picks-list");
  if (Object.keys(weatherData).length === 0) {
    section.classList.add("hidden");
    return;
  }
  // 海水浴期間で本日犬NGの海岸はおすすめに出さない
  const ranked = activeSpots().filter(withinDrive).filter((s) => !swimBanToday(s))
    .sort((a, b) => calcScore(b) - calcScore(a))
    .slice(0, 3);
  if (ranked.length === 0) {
    section.classList.add("hidden");
    return;
  }
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
  if (spot.night) badges.push(`<span class="badge night">🌙 夜さんぽOK</span>`);
  if (visitsOf(spot).length > 0) badges.push(`<span class="badge visited-badge">🐾 訪問済み</span>`);
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

  const reach = reachability(spot);
  if (reach.status === "closed") {
    badges.push(`<span class="badge warn">⛔ 本日定休日</span>`);
  } else if (reach.status === "missed") {
    badges.push(`<span class="badge warn">⚠️ 今から出ても営業時間に間に合いません</span>`);
  } else if (reach.status === "tight") {
    badges.push(`<span class="badge warn">⚠️ 到着後 約${reach.remain}分で営業終了</span>`);
  }

  const cardPhoto = spot.photo && spot.photo.url ? spot.photo : visitCardPhoto(visitsOf(spot));
  const photoHtml = cardPhoto
    ? `<div class="spot-photo">
         <img src="${cardPhoto.url}" alt="${spot.name}" loading="lazy"
              onerror="this.closest('.spot-media') && this.parentElement.remove()">
         <span class="photo-credit">📷 ${cardPhoto.credit || "Wikimedia Commons"}</span>
       </div>`
    : "";
  const mediaHtml = `<div class="spot-media">${photoHtml}${miniMapHtml(spot)}</div>`;

  const arriveInfo =
    reach.status === "closed"
      ? ""
      : `<span class="arrive-info${reach.status === "missed" ? " arrive-ng" : ""}">🚗 今出ると ${reach.arriveStr} 着</span>`;
  const hoursHtml = spot.hours
    ? `<div class="hours-box">🕐 <b>${spot.hours.open}</b>${spot.hours.closed ? `・<span class="hours-closed">${spot.hours.closed}</span>` : ""}${spot.hours.note ? `<span class="hours-note">（${spot.hours.note}）</span>` : ""}${arriveInfo}</div>`
    : "";

  const parking = (spot.parking || [])
    .map(
      (p) =>
        `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          p.name + " " + spot.area
        )}" target="_blank" rel="noopener">${p.name}</a>（${p.fee}${p.hours ? `・<b>🕐${p.hours}</b>` : ""}${p.note ? "・" + p.note : ""}）`
    )
    .join("／");

  const restoEntries = (spot.restaurants || []).filter((r) => r.policy !== "なし" || r.ref);
  const resolved = restoEntries.map((entry) => resolveResto(entry));
  const insideN = resolved.filter((r) => r.policy === "店内OK").length;
  const restoBlock = resolved.length
    ? `<details class="resto-details">
        <summary>🍽️ 近隣の犬連れOK店 <b>${resolved.length}件</b>${insideN ? `（店内OK ${insideN}件）` : ""}</summary>
        <div class="resto-cards">${resolved.map((r) => restaurantCardHtml(r, spot)).join("")}</div>
      </details>`
    : "";

  const weatherBox = w
    ? `
    <div class="weather-box">
      <div>
        <span class="weather-temp ${tempClass(w.temp)}">${weatherIcon(w.code)} ${w.temp.toFixed(1)}℃</span>
      </div>
      <div class="weather-detail">
        体感 ${w.feels.toFixed(0)}℃ ／ 湿度 ${w.humidity}%<br>
        本日最高 ${w.tempMax.toFixed(0)}℃ ／ 降水確率 ${w.rainProb != null ? w.rainProb + "%" : "--"}<br>
        🌅 日の出 ${w.sunrise || "--"} ／ 🌇 日の入 ${w.sunset || "--"}
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
    ${spot.water && spot.water.swimBan
      ? swimBanToday(spot)
        ? `<div class="swimban now">⛔ <b>本日は犬の入水NG</b>（${spot.water.swimBan.label}）</div>`
        : `<div class="swimban off">🏖️ ${spot.water.swimBan.label}は犬NG ／ <b>現在はオフシーズンで入水解禁</b></div>`
      : ""}
    ${hoursHtml}
    ${weatherBox}
    ${visitBlockHtml(spot)}
    <div class="spot-detail">
      ${spot.water ? `<div class="detail-row"><span class="detail-icon">💦</span><span>${spot.water.note || spot.water.depth || ""}</span></div>` : ""}
      ${spot.night ? `<div class="detail-row"><span class="detail-icon">💡</span><span>照明: ${spot.night.lighting} ／ ${spot.night.vibe || ""}${spot.night.note ? `<br>${spot.night.note}` : ""}</span></div>` : ""}
      <div class="detail-row"><span class="detail-icon">🅿️</span><span>${parking || "要確認"}</span></div>
      ${spot.night
        ? `<div class="detail-row"><span class="detail-icon">🐾</span><span>地面: ${spot.surface ? spot.surface.ground : "?"}</span></div>`
        : `<div class="detail-row"><span class="detail-icon">🌳</span><span>日陰: ${spot.surface ? spot.surface.shade : "?"} ／ 地面: ${spot.surface ? spot.surface.ground : "?"}</span></div>`}
      ${spot.notes ? `<div class="detail-row"><span class="detail-icon">📝</span><span>${spot.notes}</span></div>` : ""}
      ${spot.official && spot.official.url
        ? `<div class="detail-row official-row"><span class="detail-icon">📖</span><span>犬連れルールの一次情報: <a href="${spot.official.url}" target="_blank" rel="noopener"><b>${spot.official.label || "公式サイト"}</b></a> で最新情報を確認してからお出かけください</span></div>`
        : ""}
    </div>
    ${restoBlock}
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

/* ---------- モード切り替え ---------- */
function renderCategoryChips() {
  const container = document.getElementById("filter-chips");
  container.innerHTML = MODE_CONFIG[currentMode].cats
    .map(
      (c) =>
        `<button class="chip ${c === currentFilter ? "active" : ""}" data-filter="${c}">${c === "all" ? "すべて" : CATEGORY_LABEL[c]}</button>`
    )
    .join("");
}

function applyMode(mode) {
  currentMode = mode;
  localStorage.setItem("cogi-mode", mode);
  currentFilter = "all";
  document.getElementById("mode-day").classList.toggle("active", mode === "day");
  document.getElementById("mode-night").classList.toggle("active", mode === "night");
  document.getElementById("app-subtitle").textContent = MODE_CONFIG[mode].subtitle;
  document.getElementById("top-picks-title").textContent = MODE_CONFIG[mode].topTitle;
  document.body.classList.toggle("night-mode", mode === "night");
  renderCategoryChips();
  renderExcluded();
  renderAll();
}

/* ---------- 除外リスト ---------- */
function renderExcluded() {
  const container = document.getElementById("excluded-list");
  if (!container || typeof EXCLUDED === "undefined") return;
  const nightList = typeof NIGHT_EXCLUDED !== "undefined" ? NIGHT_EXCLUDED : [];
  const list = currentMode === "night" ? nightList : EXCLUDED;
  if (list.length === 0) {
    container.innerHTML = '<p class="excluded-note">（このモードの除外リストはまだありません）</p>';
    return;
  }
  container.innerHTML = list.map(
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
  document.getElementById("mode-day").addEventListener("click", () => applyMode("day"));
  document.getElementById("mode-night").addEventListener("click", () => applyMode("night"));

  // レポート写真タップ→ライトボックスで表示
  document.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("visit-photo-img")) openLightbox(e.target);
  });

  // 隠しショートカット: タイトルを素早く2回タップ→おでかけメモ（飼い主用）
  let lastTitleTap = 0;
  document.querySelector(".app-header h1").addEventListener("click", () => {
    const now = Date.now();
    if (now - lastTitleTap < 500) location.href = "report.html";
    lastTitleTap = now;
  });

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

  // 海水浴期間で本日犬NGの海岸を除外するトグル
  const sbBtn = document.getElementById("swimban-filter");
  if (sbBtn) {
    // swimBan付きスポットが無ければ行ごと隠す
    const anyBan = [...SPOTS, ...NIGHT_SPOTS].some((s) => s.water && s.water.swimBan);
    if (!anyBan) document.getElementById("swimban-row").style.display = "none";
    sbBtn.addEventListener("click", () => {
      excludeSwimBan = !excludeSwimBan;
      sbBtn.classList.toggle("active", excludeSwimBan);
      renderSpots();
      renderMarkers();
    });
  }

  // 端末間同期
  document.getElementById("sync-btn").addEventListener("click", () => {
    const panel = document.getElementById("sync-panel");
    panel.classList.toggle("hidden");
    if (!panel.classList.contains("hidden")) {
      document.getElementById("sync-url").value = buildSyncUrl();
    }
  });
  document.getElementById("sync-copy-btn").addEventListener("click", async () => {
    const input = document.getElementById("sync-url");
    input.value = buildSyncUrl();
    await navigator.clipboard.writeText(input.value);
    const btn = document.getElementById("sync-copy-btn");
    btn.textContent = "✅ コピー済み";
    setTimeout(() => (btn.textContent = "コピー"), 2000);
  });
  document.getElementById("sync-share-btn").addEventListener("click", () => {
    const url = buildSyncUrl();
    if (navigator.share) {
      navigator.share({ title: "ひんやりコギさんぽ 同期", url }).catch(() => {});
    } else {
      navigator.clipboard.writeText(url);
      alert("この端末は共有シート非対応のためURLをコピーしました");
    }
  });
  document.getElementById("sync-close-btn").addEventListener("click", () => {
    document.getElementById("sync-panel").classList.add("hidden");
  });
  document.getElementById("origin-reset-btn").addEventListener("click", () => {
    localStorage.removeItem(LS_ORIGIN);
    origin = DEFAULT_ORIGIN;
    document.getElementById("origin-name").textContent = origin.label;
    document.getElementById("origin-status").textContent = "川崎市（初期設定）に戻しました";
    renderAll();
  });

  const driveChips = document.getElementById("drive-chips");
  const savedDrive = localStorage.getItem("cogi-drivemax") || "all";
  driveChips.querySelectorAll(".chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.drive === savedDrive);
  });
  driveChips.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    driveChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentDriveMax = chip.dataset.drive === "all" ? null : parseInt(chip.dataset.drive, 10);
    localStorage.setItem("cogi-drivemax", chip.dataset.drive);
    renderAll();
  });

  const hoursChips = document.getElementById("hours-chips");
  hoursChips.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    hoursChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");
    currentHoursFilter = chip.dataset.hours;
    renderAll();
  });
  document.getElementById("day-select").addEventListener("change", (e) => {
    currentDay = e.target.value;
    const note = document.getElementById("day-note");
    note.textContent = currentDay === "today" ? "" : "定休日のスポットを除外中";
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
  // サブ導線の飲食店件数
  const rc = document.getElementById("subnav-resto-count");
  if (rc && typeof RESTAURANTS !== "undefined") rc.textContent = Object.keys(RESTAURANTS).length;

  initMap();
  applyMode(currentMode);
  importFromSyncHash();
  refresh();

  // 飲食店一覧の「近くの遊び場」リンクから来たとき該当カードへスクロール
  // （気温取得後の再描画でスクロール位置がずれるため、数秒間ターゲットに追従する）
  if (location.hash.startsWith("#spot-")) {
    const id = location.hash.slice(6);
    if (typeof NIGHT_SPOTS !== "undefined" && NIGHT_SPOTS.some((s) => s.id === id) && currentMode !== "night") applyMode("night");
    let tries = 0;
    const timer = setInterval(() => {
      const el = document.getElementById("spot-" + id);
      if (el) el.scrollIntoView({ block: "start" });
      tries++;
      if ((el && tries >= 6) || tries >= 12) clearInterval(timer);
    }, 700);
  }
});
