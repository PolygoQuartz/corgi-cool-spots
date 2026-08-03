/* 犬OK飲食店一覧ページ
   営業判定・訪問記録表示・ライトボックスは app.js から必要分を移植（本体はindex用のDOM前提のため共用不可） */

/* ---------- 営業時間判定（app.jsと同一ロジック） ---------- */
function closedDaysOf(hours) {
  const c = hours && hours.closed;
  const res = { days: new Set(), ordinal: null, weekdaysOff: false, unknown: false };
  if (!c) return res;
  if (/不定/.test(c)) { res.unknown = true; return res; }
  const stripped = c.replace(/[（(].*?[）)]/g, "").replace(/祝日?/g, "");
  const kanji = { 日: 0, 月: 1, 火: 2, 水: 3, 木: 4, 金: 5, 土: 6 };
  const ord = stripped.match(/第(\d)([日月火水木金土])/);
  if (ord) { res.ordinal = { nth: +ord[1], day: kanji[ord[2]] }; return res; }
  if (/平日/.test(stripped)) {
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

function parseOpenRange(open) {
  const m = (open || "").match(/(\d{1,2}):(\d{2})\s*〜\s*(\d{1,2}):(\d{2})/);
  if (!m) return null;
  return { from: +m[1] * 60 + +m[2], to: +m[3] * 60 + +m[4] };
}

function fmtMin(min) {
  return `${Math.floor(min / 60)}:${String(min % 60).padStart(2, "0")}`;
}

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

function isRestoOpenNow(r) {
  const now = new Date();
  if (!r.hours || !r.hours.open) return false;
  if (isClosedOnDate(r.hours, now)) return false;
  const range = parseOpenRange(r.hours.open);
  if (!range) return true;
  const nowMin = now.getHours() * 60 + now.getMinutes();
  return nowMin >= range.from && nowMin < range.to;
}

/* ---------- 訪問記録（app.jsから移植） ---------- */
function visitPhotoImgs(v) {
  return (v.photos || [])
    .map(
      (p) =>
        `<img class="visit-photo-img" src="${p.src}" alt="${p.alt || ""}" loading="lazy" onload="const r=this.naturalWidth/this.naturalHeight;this.style.width=(130*r)+'px';this.style.flexGrow=r*100" onerror="this.remove()">`
    )
    .join("");
}

function restoVisitsOf(rid) {
  if (typeof VISITS === "undefined") return [];
  return VISITS.filter((v) => v.restaurantRef === rid).sort((a, b) => (b.date || "").localeCompare(a.date || ""));
}

function visitEntryHtml(v) {
  const notes = (v.onSiteNotes || []).map((r) => `<li>⚠️ ${r}</li>`).join("");
  const photos = visitPhotoImgs(v);
  const detailBody =
    (notes ? `<ul class="visit-notes">${notes}</ul>` : "") +
    (v.diary ? `<p class="visit-diary">${v.diary}</p>` : "");
  return `
    <div class="visit-entry">
      <div class="visit-entry-date">📅 ${v.date}${v.arrivedAt ? ` ${v.arrivedAt}着` : ""}</div>
      ${v.summary ? `<p class="visit-summary">「${v.summary}」</p>` : ""}
      ${photos ? `<div class="visit-photos">${photos}</div>` : ""}
      ${detailBody ? `<details class="visit-details"><summary>訪問メモを読む</summary>${detailBody}</details>` : ""}
    </div>`;
}

function restoVisitHtml(rid) {
  const list = restoVisitsOf(rid);
  if (list.length === 0) return "";
  return `
  <div class="visit-block resto-visit">
    <div class="visit-head">🐾 <b>ルチルが遊びに行きました</b>${list.length > 1 ? `<span class="visit-date">計${list.length}回</span>` : ""}</div>
    ${list.map((v) => visitEntryHtml(v)).join("")}
    <p class="visit-caveat">※訪問時点の記録です。営業時間・ルールは変わることがあります。</p>
  </div>`;
}

/* ---------- 写真ライトボックス（app.jsから移植） ---------- */
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
  let sx = 0;
  div.addEventListener("touchstart", (e) => { sx = e.touches[0].clientX; }, { passive: true });
  div.addEventListener("touchend", (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50 && lbPhotos.length > 1) lbShow(lbIndex + (dx < 0 ? 1 : -1));
  }, { passive: true });
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

/* ---------- 観光ガイド風のざっくりエリア分け ---------- */
const REGION_RULES = [
  ["湘南・江の島・鎌倉", /藤沢|鎌倉|茅ヶ崎|平塚|逗子|葉山|大磯|二宮/],
  ["三浦半島", /横須賀|三浦市/],
  ["横浜・川崎", /横浜|川崎/],
  ["箱根・小田原・湯河原", /箱根|小田原|湯河原|真鶴|南足柄/],
  ["丹沢・宮ヶ瀬・相模原", /清川|愛川|相模原|厚木|伊勢原|秦野|山北|松田|大井町|開成|海老名|座間|綾瀬|大和市/],
  ["東京都心", /東京都(新宿|渋谷|世田谷|目黒|大田|品川|杉並|中野|港|千代田|中央|文京|台東|墨田|江東|豊島|北|荒川|板橋|練馬|足立|葛飾|江戸川)区/],
  ["多摩・奥多摩", /青梅|奥多摩|あきる野|檜原|八王子|府中市|調布|町田|稲城|多摩市|日野|立川|福生|羽村|昭島|狛江|三鷹|武蔵野|国立|国分寺|小金井|東村山|東大和|瑞穂/],
  ["富士五湖・山梨", /山中湖|富士河口湖|富士吉田|忍野|都留|大月|道志|甲府|山梨市|笛吹|北杜|甲州|御殿場|小山町|市川三郷|身延|富士川町/],
  ["伊豆・沼津", /伊東|下田|河津|南伊豆|東伊豆|西伊豆|松崎|伊豆市|伊豆の国|沼津|三島|函南|熱海|清水町|長泉|静岡市/],
  ["秩父・長瀞・埼玉", /埼玉県/],
  ["千葉・房総", /千葉県/],
  ["北関東", /茨城県|栃木県|群馬県/],
];

function regionOf(area) {
  for (const [label, re] of REGION_RULES) if (re.test(area || "")) return label;
  return "その他";
}

/* ---------- 一覧の描画 ---------- */
// 各店を参照している遊び場（逆リンク用）
const SPOTS_BY_RESTO = {};
[...SPOTS, ...NIGHT_SPOTS].forEach((s) =>
  (s.restaurants || []).forEach((r) => {
    if (!r.ref) return;
    (SPOTS_BY_RESTO[r.ref] = SPOTS_BY_RESTO[r.ref] || []).push(s);
  })
);

const filterState = { area: "", policy: "" };

function restoListCardHtml(r) {
  const visited = restoVisitsOf(r.id).length > 0;
  const lead = r.leadOK === true ? "・リードOK" : "";
  const tag = r.policy === "店内OK"
    ? `<span class="resto-tag in">店内OK${lead}</span>`
    : `<span class="resto-tag">テラス${lead}</span>`;
  const st = restoStatus(r);
  const hoursLine = r.hours && r.hours.open
    ? `<div class="resto-hours">🕐 ${r.hours.open}${r.hours.closed ? `・<span class="hours-closed">${r.hours.closed}</span>` : ""}${r.hours.note ? `<span class="hours-note">（${r.hours.note}）</span>` : ""}</div>`
    : "";
  const nearby = (SPOTS_BY_RESTO[r.id] || [])
    .map((s) => `<a href="index.html#spot-${s.id}">${s.name}</a>`)
    .join("・");
  return `
  <div class="resto-card">
    <div class="resto-card-head">
      <a class="resto-name" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(r.name + " " + (r.area || ""))}" target="_blank" rel="noopener">${r.name}</a>
      ${tag}
      ${visited ? '<span class="visited-badge">🐾 訪問済み</span>' : ""}
    </div>
    <div class="resto-status-row"><span class="resto-status ${st.cls}">${st.text}</span></div>
    <div class="resto-area-line">📍 ${r.area || ""}</div>
    ${hoursLine}
    ${nearby ? `<div class="nearby-spots">💦 近くの遊び場: ${nearby}</div>` : ""}
    ${restoVisitHtml(r.id)}
  </div>`;
}

function renderRestoList() {
  const all = Object.values(RESTAURANTS);
  let list = all.slice();
  if (filterState.area) list = list.filter((r) => regionOf(r.area) === filterState.area);
  if (filterState.policy === "店内OK") list = list.filter((r) => r.policy === "店内OK");
  else if (filterState.policy === "テラスのみ") list = list.filter((r) => r.policy !== "店内OK");
  else if (filterState.policy === "open") list = list.filter((r) => isRestoOpenNow(r));
  else if (filterState.policy === "visited") list = list.filter((r) => restoVisitsOf(r.id).length > 0);
  // 🐾訪問済み → 名前順
  list.sort((a, b) => {
    const va = restoVisitsOf(a.id).length > 0 ? 0 : 1;
    const vb = restoVisitsOf(b.id).length > 0 ? 0 : 1;
    if (va !== vb) return va - vb;
    return (a.name || "").localeCompare(b.name || "", "ja");
  });
  document.getElementById("resto-list").innerHTML =
    list.map(restoListCardHtml).join("") || '<p class="resto-count-line">条件に合う店がありません</p>';
  document.getElementById("rf-count").textContent = `${list.length}軒を表示（全${all.length}軒）`;
}

document.addEventListener("DOMContentLoaded", () => {
  // エリアの選択肢（観光ガイド風のざっくり区分・定義順）
  const counts = {};
  Object.values(RESTAURANTS).forEach((r) => {
    const g = regionOf(r.area);
    counts[g] = (counts[g] || 0) + 1;
  });
  const order = [...REGION_RULES.map(([l]) => l), "その他"];
  const sel = document.getElementById("rf-area");
  order.filter((l) => counts[l]).forEach((l) => {
    const o = document.createElement("option");
    o.value = l;
    o.textContent = `${l}（${counts[l]}軒）`;
    sel.appendChild(o);
  });
  sel.addEventListener("change", () => { filterState.area = sel.value; renderRestoList(); });
  document.querySelectorAll("#rf-policy .chip").forEach((c) =>
    c.addEventListener("click", () => {
      document.querySelectorAll("#rf-policy .chip").forEach((x) => x.classList.remove("active"));
      c.classList.add("active");
      filterState.policy = c.dataset.policy;
      renderRestoList();
    })
  );
  document.addEventListener("click", (e) => {
    if (e.target.classList && e.target.classList.contains("visit-photo-img")) openLightbox(e.target);
  });
  renderRestoList();
});
