/* 飼い主用おでかけメモ
   - 人間の一次情報だけを記録し、AI処理用データ（IntakeReport）を生成する
   - 下書きはlocalStorageへ自動保存（写真ファイル本体は保存しない）
   - GitHubトークンは一切扱わない。Issue作成はプリフィルURL/コピー/ダウンロードで人間が行う */

const REPO = "PolygoQuartz/corgi-cool-spots";
const LS_DRAFTS = "cogi-intake-drafts";
const ISSUE_LABELS = "spot-report,ai-research-needed";

const DOG_CHOICES = [
  "よく歩いた", "楽しそうだった", "水遊びをした", "泳いだ",
  "暑そうだった", "ハアハアしていた", "休憩が多かった", "怖がった",
  "足元を気にしていた", "途中で抱っこした", "また来てもよさそう", "夏の日中は厳しそう",
];

const ROUTE_CHOICES = [
  "日陰だけを選んで歩けた", "熱い舗装路を避けられた", "芝生や土の道があった",
  "犬が入れる水辺へ簡単に行けた", "カート・ベビーカーでも行けそう", "階段や急斜面があった",
  "犬を抱えて移動する場面があった",
];

const SURFACE_CHOICES = [
  "日向のアスファルト", "日陰のアスファルト", "芝生", "土", "砂", "ウッドデッキ", "石", "コンクリート", "その他",
];

let current = newReport();
let saveTimer = null;
let sessionPhotoFiles = []; // 「写真を選択」で選んだFile本体（縮小版書き出し用・保存はしない）

function newReport() {
  const now = new Date();
  return {
    schemaVersion: 1,
    reportId: "visit-" + now.toISOString().slice(0, 10) + "-" + String(now.getTime()).slice(-4),
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    location: { name: "", sharedUrl: "", lat: null, lng: null, hint: "", existingId: "", existingKind: "" },
    visit: { date: now.toISOString().slice(0, 10), arrivedAt: "", durationMin: "", weather: "", feel: "", crowd: "", shade: "" },
    dogCondition: [],
    rawNote: "",
    routeChecks: [],
    routeNote: "",
    groundTemps: [],
    photos: [], // {name,size,lastModified,note,representative} 本体は保存しない
    trouble: "",
    nextNote: "",
    aiStatus: "draft",
  };
}

/* ---------- localStorage ---------- */
function loadDrafts() {
  try { return JSON.parse(localStorage.getItem(LS_DRAFTS)) || {}; } catch (e) { return {}; }
}
function persist() {
  current.updatedAt = new Date().toISOString();
  const drafts = loadDrafts();
  drafts[current.reportId] = current;
  localStorage.setItem(LS_DRAFTS, JSON.stringify(drafts));
  const t = new Date().toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("draft-status").textContent = `自動保存済み ${t}（${current.reportId}）`;
}
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(persist, 400);
}

/* ---------- フォーム⇔データ ---------- */
function collect() {
  const g = (id) => document.getElementById(id).value.trim();
  current.location.name = g("f-place-name");
  current.location.sharedUrl = g("f-place-url");
  current.location.hint = g("f-place-hint");
  current.visit.date = g("f-date");
  current.visit.arrivedAt = g("f-arrived");
  current.visit.durationMin = g("f-duration");
  current.visit.weather = g("f-weather");
  current.visit.feel = g("f-feel");
  current.visit.crowd = g("f-crowd");
  current.visit.shade = g("f-shade");
  current.rawNote = g("f-raw-note");
  current.routeNote = g("f-route-note");
  current.trouble = g("f-trouble");
  current.nextNote = g("f-next");
  current.dogCondition = [...document.querySelectorAll("#f-dog-chips .chip.on")].map((c) => c.textContent);
  current.routeChecks = [...document.querySelectorAll("#f-route-checks input:checked")].map((c) => c.value);
  current.groundTemps = [...document.querySelectorAll(".gt-row-edit")].map((row) => ({
    time: row.querySelector(".gt-time").value,
    surface: row.querySelector(".gt-surface").value,
    tempC: parseFloat(row.querySelector(".gt-temp").value) || null,
    feel: row.querySelector(".gt-feel").value || "",
    sun: row.querySelector(".gt-sun").value,
    note: row.querySelector(".gt-note").value.trim(),
  })).filter((t) => t.tempC != null || t.feel);
  current.photos = [...document.querySelectorAll(".photo-item")].map((p, i) => ({
    name: p.dataset.name,
    size: +p.dataset.size,
    lastModified: p.dataset.lm,
    takenAt: p.dataset.takenAt || "",
    note: p.querySelector("input[type=text]").value.trim(),
    representative: p.querySelector("input[type=radio]").checked,
  }));
}

function fill() {
  const s = (id, v) => (document.getElementById(id).value = v || "");
  const sel = document.getElementById("f-existing-spot");
  sel.value = current.location.existingId ? `${current.location.existingKind}:${current.location.existingId}` : "";
  if (sel.selectedIndex < 0) sel.value = ""; // 削除済みスポット等
  applyExistingSelection();
  s("f-place-name", current.location.name);
  s("f-place-url", current.location.sharedUrl);
  s("f-place-hint", current.location.hint);
  s("f-date", current.visit.date);
  s("f-arrived", current.visit.arrivedAt);
  s("f-duration", current.visit.durationMin);
  s("f-weather", current.visit.weather);
  s("f-feel", current.visit.feel);
  s("f-crowd", current.visit.crowd);
  s("f-shade", current.visit.shade);
  s("f-raw-note", current.rawNote);
  s("f-route-note", current.routeNote);
  s("f-trouble", current.trouble);
  s("f-next", current.nextNote);
  document.getElementById("f-geo-status").textContent =
    current.location.lat ? `記録済み: ${current.location.lat.toFixed(4)}, ${current.location.lng.toFixed(4)}` : "";
  document.querySelectorAll("#f-dog-chips .chip").forEach((c) =>
    c.classList.toggle("on", current.dogCondition.includes(c.textContent)));
  document.querySelectorAll("#f-route-checks input").forEach((c) =>
    (c.checked = current.routeChecks.includes(c.value)));
  document.getElementById("f-gt-rows").innerHTML = "";
  current.groundTemps.forEach((t) => addGtRow(t));
  document.getElementById("f-photo-list").innerHTML = "";
  current.photos.forEach((p) => addPhotoItem(p));
}

/* ---------- 動的UI ---------- */
function addGtRow(t = {}) {
  const div = document.createElement("div");
  div.className = "gt-row-edit";
  const now = new Date();
  const nowStr = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  div.innerHTML = `
    <label>測定時刻<input type="time" class="gt-time" value="${t.time || nowStr}"></label>
    <label>🖐️ 素手で触った体感<select class="gt-feel">${["", "ひんやり", "人肌", "アチアチ", "危険"].map((f) => `<option value="${f}" ${t.feel === f ? "selected" : ""}>${f || "--"}</option>`).join("")}</select></label>
    <label>表面温度℃（計測できれば）<input type="number" step="0.1" inputmode="decimal" class="gt-temp" value="${t.tempC ?? ""}"></label>
    <label>路面<select class="gt-surface">${SURFACE_CHOICES.map((s) => `<option ${t.surface === s ? "selected" : ""}>${s}</option>`).join("")}</select></label>
    <label>日向/日陰<select class="gt-sun"><option ${t.sun === "日向" ? "selected" : ""}>日向</option><option ${t.sun === "日陰" ? "selected" : ""}>日陰</option></select></label>
    <input type="text" class="gt-note full" placeholder="一言メモ（任意）" value="${t.note || ""}">
    <button type="button" class="mini-btn gt-del">削除</button>`;
  div.querySelector(".gt-del").addEventListener("click", () => { div.remove(); collect(); scheduleSave(); });
  div.querySelectorAll("input,select").forEach((el) => el.addEventListener("input", () => { collect(); scheduleSave(); }));
  document.getElementById("f-gt-rows").appendChild(div);
}

function addPhotoItem(p) {
  const div = document.createElement("div");
  div.className = "photo-item";
  div.dataset.name = p.name;
  div.dataset.size = p.size;
  div.dataset.lm = p.lastModified || "";
  div.dataset.takenAt = p.takenAt || "";
  div.innerHTML = `
    <input type="radio" name="rep-photo" title="代表写真" ${p.representative ? "checked" : ""}>
    <span>📷 ${p.name}</span>
    <input type="text" placeholder="短いメモ（任意）" value="${p.note || ""}">`;
  div.querySelectorAll("input").forEach((el) => el.addEventListener("input", () => { collect(); scheduleSave(); }));
  document.getElementById("f-photo-list").appendChild(div);
}

function todayStr() { return new Date().toISOString().slice(0, 10); }

/* ---------- 既存スポットへの追記UI ---------- */
function buildExistingSpotSelect() {
  const sel = document.getElementById("f-existing-spot");
  // 本体アプリと同じlocalStorageから「✅ 行った」マークを読む
  let marks = {};
  try { marks = JSON.parse(localStorage.getItem("cogi-marks") || "{}"); } catch (e) {}
  const visited = (id) => marks[id] && marks[id].visited;
  // 既にルチルレポートがあるか（visits.js参照）
  const reported = new Set();
  if (typeof VISITS !== "undefined") VISITS.forEach((v) => { if (v.spotId) reported.add(v.spotId); if (v.restaurantRef) reported.add(v.restaurantRef); });
  const label = (kind, id, name) => {
    const icon = { spot: "☀️", night: "🌙", restaurant: "🍽️" }[kind];
    return `${icon} ${name}${reported.has(id) ? "" : "（レポ未）"}`;
  };
  const add = (groupLabel, items) => {
    if (!items.length) return;
    const og = document.createElement("optgroup");
    og.label = groupLabel;
    items.forEach(([kind, id, name]) => {
      const o = document.createElement("option");
      o.value = `${kind}:${id}`;
      o.textContent = label(kind, id, name);
      og.appendChild(o);
    });
    sel.appendChild(og);
  };
  const all = [];
  if (typeof SPOTS !== "undefined") SPOTS.forEach((s) => all.push(["spot", s.id, s.name]));
  if (typeof NIGHT_SPOTS !== "undefined") NIGHT_SPOTS.forEach((s) => all.push(["night", s.id, s.name]));
  if (typeof RESTAURANTS !== "undefined") Object.values(RESTAURANTS).forEach((r) => all.push(["restaurant", r.id, r.name]));
  const byName = (a, b) => a[2].localeCompare(b[2], "ja");
  // 「行った」マーク済みを最上部に（レポ未のものが先）
  const visitedItems = all.filter(([k, id]) => visited(id)).sort((a, b) => (reported.has(a[1]) - reported.has(b[1])) || byName(a, b));
  add("✅ 行ったマーク済み（この端末）", visitedItems);
  add("☀️ 昼・水遊びスポット", all.filter(([k]) => k === "spot").sort(byName));
  add("🌙 夜さんぽスポット", all.filter(([k]) => k === "night").sort(byName));
  add("🍽️ 飲食店", all.filter(([k]) => k === "restaurant").sort(byName));
}

function applyExistingSelection() {
  const sel = document.getElementById("f-existing-spot");
  const badge = document.getElementById("f-existing-badge");
  const v = sel.value;
  if (!v) {
    current.location.existingId = "";
    current.location.existingKind = "";
    badge.classList.add("hidden");
    return;
  }
  const [kind, id] = v.split(":");
  current.location.existingKind = kind;
  current.location.existingId = id;
  const name = sel.options[sel.selectedIndex].textContent;
  document.getElementById("f-existing-name").textContent = name;
  badge.classList.remove("hidden");
  // 名前欄が空なら自動で入れる（編集可）
  const nameEl = document.getElementById("f-place-name");
  if (!nameEl.value) { nameEl.value = name; current.location.name = name; }
}

/* ---------- 写真のExif読み取り（撮影時刻・GPS） ---------- */
async function readExif(file) {
  try {
    const buf = await file.slice(0, 256 * 1024).arrayBuffer();
    const v = new DataView(buf);
    if (v.getUint16(0) !== 0xffd8) return {}; // JPEGのみ対応
    let o = 2;
    while (o + 4 < v.byteLength) {
      const marker = v.getUint16(o);
      if ((marker & 0xff00) !== 0xff00) break;
      const size = v.getUint16(o + 2);
      if (marker === 0xffe1 && v.getUint32(o + 4) === 0x45786966) return parseTiff(v, o + 10);
      o += 2 + size;
    }
  } catch (e) { /* Exifなし・HEIC等は無視 */ }
  return {};
}

function parseTiff(v, base) {
  const little = v.getUint16(base) === 0x4949;
  const g16 = (p) => v.getUint16(p, little);
  const g32 = (p) => v.getUint32(p, little);
  const out = {};
  const readIfd = (off, cb) => {
    const n = g16(off);
    for (let i = 0; i < n; i++) { const e = off + 2 + i * 12; cb(g16(e), g16(e + 2), g32(e + 4), e); }
  };
  const valPtr = (e, count, unitSize) => (count * unitSize <= 4 ? e + 8 : base + g32(e + 8));
  const ascii = (e, count) => {
    const p = valPtr(e, count, 1);
    let s = "";
    for (let i = 0; i < count - 1; i++) s += String.fromCharCode(v.getUint8(p + i));
    return s;
  };
  const rat = (p) => g32(p) / (g32(p + 4) || 1);
  let exifOff = 0, gpsOff = 0;
  readIfd(base + g32(base + 4), (tag, type, count, e) => {
    if (tag === 0x8769) exifOff = base + g32(e + 8);
    if (tag === 0x8825) gpsOff = base + g32(e + 8);
  });
  if (exifOff) readIfd(exifOff, (tag, type, count, e) => {
    if (tag === 0x9003) out.dateTime = ascii(e, count); // "YYYY:MM:DD HH:MM:SS"
  });
  if (gpsOff) {
    let latRef, lonRef, lat, lon;
    readIfd(gpsOff, (tag, type, count, e) => {
      if (tag === 1) latRef = ascii(e, count);
      if (tag === 3) lonRef = ascii(e, count);
      if (tag === 2) { const p = valPtr(e, count, 8); lat = rat(p) + rat(p + 8) / 60 + rat(p + 16) / 3600; }
      if (tag === 4) { const p = valPtr(e, count, 8); lon = rat(p) + rat(p + 8) / 60 + rat(p + 16) / 3600; }
    });
    if (lat != null && lon != null && (lat || lon)) {
      out.lat = (latRef === "S" ? -1 : 1) * lat;
      out.lng = (lonRef === "W" ? -1 : 1) * lon;
    }
  }
  return out;
}

/* Exif情報でフォームを自動補完（空欄のみ・上書きしない） */
function autofillFromExif(exifs) {
  const filled = [];
  const times = exifs.map((x) => x.dateTime).filter(Boolean).sort();
  if (times.length) {
    const m = times[0].match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2})/);
    if (m) {
      const dateEl = document.getElementById("f-date");
      const arrEl = document.getElementById("f-arrived");
      const photoDate = `${m[1]}-${m[2]}-${m[3]}`;
      if (!dateEl.value || dateEl.value === todayStr()) { dateEl.value = photoDate; filled.push(`日付${m[2]}/${m[3]}`); }
      if (!arrEl.value) { arrEl.value = `${m[4]}:${m[5]}`; filled.push(`到着${m[4]}:${m[5]}（最初の写真の撮影時刻）`); }
    }
  }
  const gps = exifs.find((x) => x.lat != null);
  if (gps && current.location.lat == null) {
    current.location.lat = +gps.lat.toFixed(5);
    current.location.lng = +gps.lng.toFixed(5);
    document.getElementById("f-geo-status").textContent = `記録済み: ${current.location.lat}, ${current.location.lng}（写真のExifから）`;
    filled.push("撮影場所の座標");
  }
  return filled;
}

/* ---------- AI処理用データ生成 ---------- */
function toIntakeYaml(r) {
  const lines = [];
  lines.push(`report_id: ${r.reportId}`);
  lines.push(`schema_version: ${r.schemaVersion}`);
  lines.push(`submitted_at: ${new Date().toISOString()}`);
  lines.push(`location_hint:`);
  if (r.location.existingId) {
    lines.push(`  existing_spot_id: ${r.location.existingId}`); // 既存カードへの追記（場所の特定・重複確認は不要）
    lines.push(`  existing_kind: ${r.location.existingKind}`); // spot | night | restaurant
  }
  if (r.location.name) lines.push(`  name: ${r.location.name}`);
  if (r.location.sharedUrl) lines.push(`  shared_url: ${r.location.sharedUrl}`);
  if (r.location.lat != null) { lines.push(`  latitude: ${r.location.lat}`); lines.push(`  longitude: ${r.location.lng}`); }
  if (r.location.hint) lines.push(`  nearby_note: ${r.location.hint}`);
  lines.push(`visit:`);
  lines.push(`  date: ${r.visit.date}`);
  if (r.visit.arrivedAt) lines.push(`  arrived_at: "${r.visit.arrivedAt}"`);
  if (r.visit.durationMin) lines.push(`  duration_minutes: ${r.visit.durationMin}`);
  lines.push(`owner_observations:`);
  if (r.dogCondition.length) { lines.push(`  dog_condition:`); r.dogCondition.forEach((d) => lines.push(`    - ${d}`)); }
  if (r.visit.weather) lines.push(`  weather_feel: ${r.visit.weather}`);
  if (r.visit.feel) lines.push(`  heat_feel: ${r.visit.feel}`);
  if (r.visit.shade) lines.push(`  shade: ${r.visit.shade}`);
  if (r.visit.crowd) lines.push(`  crowd: ${r.visit.crowd}`);
  if (r.routeChecks.length) { lines.push(`  route_checks:`); r.routeChecks.forEach((d) => lines.push(`    - ${d}`)); }
  if (r.routeNote) lines.push(`  route_note: ${r.routeNote}`);
  if (r.trouble) lines.push(`  trouble: ${r.trouble}`);
  if (r.nextNote) lines.push(`  next_visit_note: ${r.nextNote}`);
  if (r.rawNote) {
    lines.push(`  raw_note: |`);
    r.rawNote.split("\n").forEach((l) => lines.push(`    ${l}`));
  }
  if (r.groundTemps.length) {
    lines.push(`ground_temperatures:`);
    r.groundTemps.forEach((t) => {
      lines.push(`  - measured_at: "${t.time}"`);
      lines.push(`    surface: ${t.surface}`);
      lines.push(`    sun: ${t.sun}`);
      if (t.tempC != null) lines.push(`    temperature_c: ${t.tempC}`);
      if (t.feel) lines.push(`    hand_feel: ${t.feel}`); // 素手で触った体感（実測値ではない）
      if (t.note) lines.push(`    note: ${t.note}`);
    });
  }
  if (r.photos.length) {
    lines.push(`photos:`);
    r.photos.forEach((p) => {
      lines.push(`  - local_reference: ${p.name}`);
      if (p.representative) lines.push(`    representative: true`);
      if (p.note) lines.push(`    note: ${p.note}`);
      if (p.takenAt || p.lastModified) lines.push(`    taken_at_hint: ${p.takenAt || p.lastModified}`);
    });
  }
  return lines.join("\n");
}

function toIssueMarkdown(r) {
  return [
    "<!-- ひんやりコギさんぽ 訪問レポート（飼い主の一次情報）。AIエージェントは docs/AI_AGENT_GUIDE.md の手順で処理すること -->",
    "## 訪問レポート",
    "",
    "```yaml",
    toIntakeYaml(r),
    "```",
    "",
    "### 写真",
    r.photos.length
      ? "以下に写真ファイルをドラッグ＆ドロップで添付（上のyamlの local_reference と対応させる）:"
      : "（写真なし）",
    "",
    "---",
    "**AIエージェントへ**: このIssueは `spot-report` です。場所を特定し、公式情報を調査のうえ、既存スポート更新か新規追加かを判断して Pull Request を作成してください。確認できない情報は推測せず「未確認」としてPRに明記してください。",
  ].join("\n").replace("スポート", "スポット");
}

function issueTitle(r) {
  return `[訪問レポート] ${r.location.name || r.location.hint || "場所未特定"}（${r.visit.date}）`;
}

/* ---------- 送信プレビュー ---------- */
function humanSummary(r) {
  const parts = [];
  if (r.location.existingId) parts.push(`📌 既存カードへの追記: ${r.location.existingId}（${r.location.existingKind}）`);
  parts.push(`📍 ${r.location.name || "（名前未入力）"}${r.location.lat ? `（現在地: ${r.location.lat.toFixed(4)}, ${r.location.lng.toFixed(4)}）` : ""}`);
  if (r.location.sharedUrl) parts.push(`🔗 ${r.location.sharedUrl}`);
  parts.push(`📅 ${r.visit.date}${r.visit.arrivedAt ? ` ${r.visit.arrivedAt}着` : ""}${r.visit.durationMin ? `・約${r.visit.durationMin}分滞在` : ""}`);
  if (r.dogCondition.length) parts.push(`🐕 ${r.dogCondition.join("、")}`);
  if (r.groundTemps.length) parts.push(`🌡️ ${r.groundTemps.map((t) => `${t.surface}${t.tempC != null ? t.tempC + "℃" : "・" + t.feel + "(体感)"}`).join("／")}`);
  if (r.routeChecks.length) parts.push(`🚶 ${r.routeChecks.join("、")}`);
  if (r.rawNote) parts.push(`📝 ${r.rawNote}`);
  if (r.photos.length) parts.push(`📷 写真${r.photos.length}枚（Issueに手動添付）`);
  return parts.join("\n");
}

function showPreview() {
  collect();
  if (!current.location.existingId && !current.location.name && !current.location.sharedUrl && current.location.lat == null && !current.location.hint) {
    alert("場所がわかる情報（名前・共有URL・現在地・目印メモ）をどれか1つ入力してください");
    return;
  }
  if (!current.visit.date) {
    alert("📅 訪問日（いつ？）を入力してください。昔のおでかけでも日付があると記録として残せます");
    return;
  }
  persist();
  document.getElementById("f-preview").classList.remove("hidden");
  document.getElementById("f-preview-body").textContent = humanSummary(current);
  const md = toIssueMarkdown(current);
  const url = `https://github.com/${REPO}/issues/new?labels=${encodeURIComponent(ISSUE_LABELS)}&title=${encodeURIComponent(issueTitle(current))}&body=${encodeURIComponent(md)}`;
  const warn = document.getElementById("f-url-warn");
  const btn = document.getElementById("f-issue-btn");
  if (url.length > 7500) {
    // 本文が長い場合はタイトル・ラベルだけプリフィル（本文はボタン押下時に自動コピー済み）
    btn.href = `https://github.com/${REPO}/issues/new?labels=${encodeURIComponent(ISSUE_LABELS)}&title=${encodeURIComponent(issueTitle(current))}`;
    btn.style.opacity = 1;
    warn.textContent = "⚠️ メモが長いため本文のプリフィルは省略されます。ボタンを押すと本文を自動コピーするので、開いたIssueの本文欄に貼り付けてください。";
  } else {
    btn.href = url;
    btn.style.opacity = 1;
    warn.textContent = "ボタンを押すと本文を自動コピーしてからGitHubを開きます。ブラウザで開けば内容入力済み。GitHubアプリに飛んで本文が空だった場合は、新規Issueの本文欄に貼り付けるだけでOK。写真はIssue作成後にコメントへ添付してください。";
  }
  document.getElementById("f-preview").scrollIntoView({ behavior: "smooth" });
}

/* ---------- 下書き一覧 ---------- */
function renderDraftList() {
  const drafts = loadDrafts();
  const box = document.getElementById("draft-items");
  const items = Object.values(drafts).sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  box.innerHTML = items.length === 0 ? '<p class="hint">下書きはありません</p>' : "";
  items.forEach((d) => {
    const div = document.createElement("div");
    div.className = "draft-item";
    div.innerHTML = `
      <span class="grow">${d.visit.date} ${d.location.name || d.location.hint || "（場所未入力）"}</span>
      <button class="mini-btn d-open">開く</button>
      <button class="mini-btn d-dup">複製</button>
      <button class="mini-btn d-del">削除</button>`;
    div.querySelector(".d-open").addEventListener("click", () => { current = d; fill(); toggleDraftList(false); });
    div.querySelector(".d-dup").addEventListener("click", () => {
      const c = JSON.parse(JSON.stringify(d));
      c.reportId = newReport().reportId;
      c.createdAt = new Date().toISOString();
      const all = loadDrafts(); all[c.reportId] = c;
      localStorage.setItem(LS_DRAFTS, JSON.stringify(all));
      renderDraftList();
    });
    div.querySelector(".d-del").addEventListener("click", () => {
      if (!confirm(`「${d.location.name || d.reportId}」の下書きを削除しますか？`)) return;
      const all = loadDrafts(); delete all[d.reportId];
      localStorage.setItem(LS_DRAFTS, JSON.stringify(all));
      renderDraftList();
    });
    box.appendChild(div);
  });
}

function toggleDraftList(show) {
  const el = document.getElementById("draft-list");
  const target = show != null ? show : el.classList.contains("hidden");
  el.classList.toggle("hidden", !target);
  if (target) renderDraftList();
}

function download(name, content, type) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([content], { type }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

/* ---------- 初期化 ---------- */
document.addEventListener("DOMContentLoaded", () => {
  // 犬の様子チップ
  document.getElementById("f-dog-chips").innerHTML =
    DOG_CHOICES.map((d) => `<button type="button" class="chip">${d}</button>`).join("");
  document.getElementById("f-dog-chips").addEventListener("click", (e) => {
    const c = e.target.closest(".chip");
    if (!c) return;
    c.classList.toggle("on");
    collect(); scheduleSave();
  });
  // 動線チェック
  document.getElementById("f-route-checks").innerHTML =
    ROUTE_CHOICES.map((r) => `<label><input type="checkbox" value="${r}">${r}</label>`).join("");

  // 既存スポット選択
  buildExistingSpotSelect();
  document.getElementById("f-existing-spot").addEventListener("change", () => {
    applyExistingSelection();
    collect(); persist();
  });

  // 直近の下書きを復元
  const drafts = Object.values(loadDrafts()).sort((a, b) => (b.updatedAt || "").localeCompare(a.updatedAt || ""));
  if (drafts.length && drafts[0].aiStatus === "draft") current = drafts[0];
  fill();

  // 自動保存
  document.querySelectorAll("main input, main select, main textarea").forEach((el) => {
    el.addEventListener("input", () => { collect(); scheduleSave(); });
  });

  // 現在地
  document.getElementById("f-geo-btn").addEventListener("click", () => {
    const st = document.getElementById("f-geo-status");
    if (!navigator.geolocation) { st.textContent = "この端末では取得できません"; return; }
    st.textContent = "取得中…";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        current.location.lat = +pos.coords.latitude.toFixed(5);
        current.location.lng = +pos.coords.longitude.toFixed(5);
        st.textContent = `記録済み: ${current.location.lat}, ${current.location.lng}`;
        persist();
      },
      () => { st.textContent = "取得できませんでした（名前や共有URLでOKです）"; }
    );
  });

  document.getElementById("f-gt-add").addEventListener("click", () => addGtRow());
  document.getElementById("f-photos").addEventListener("change", async (e) => {
    const files = [...e.target.files];
    e.target.value = "";
    const st = document.getElementById("f-photo-status");
    st.textContent = "Exifを読み取り中…";
    const exifs = [];
    for (const f of files) {
      const x = await readExif(f);
      exifs.push(x);
      sessionPhotoFiles.push(f); // 縮小版書き出し用（この画面を開いている間だけ保持）
      addPhotoItem({
        name: f.name, size: f.size,
        lastModified: f.lastModified ? new Date(f.lastModified).toISOString() : "",
        takenAt: x.dateTime ? x.dateTime.replace(/^(\d{4}):(\d{2}):/, "$1-$2-").replace(":", "-").replace(" ", "T") : "",
        note: "", representative: false,
      });
    }
    const filled = autofillFromExif(exifs);
    st.textContent = filled.length ? `📸 写真から自動入力: ${filled.join("・")}` : "写真情報を記録しました";
    collect(); scheduleSave();
  });

  // 縮小版の書き出し（長辺1600px・Exif除去。現地の弱い電波でも添付が軽くなる）
  document.getElementById("f-photo-export").addEventListener("click", async () => {
    const st = document.getElementById("f-photo-status");
    if (!sessionPhotoFiles.length) { st.textContent = "先に「写真を選択」で写真を選んでください（選び直しでもOK）"; return; }
    st.textContent = "縮小版を作成中…";
    const outFiles = [];
    for (let i = 0; i < sessionPhotoFiles.length; i++) {
      const f = sessionPhotoFiles[i];
      try {
        const bmp = await createImageBitmap(f);
        const scale = Math.min(1, 1600 / Math.max(bmp.width, bmp.height));
        const cv = document.createElement("canvas");
        cv.width = Math.round(bmp.width * scale);
        cv.height = Math.round(bmp.height * scale);
        cv.getContext("2d").drawImage(bmp, 0, 0, cv.width, cv.height);
        const blob = await new Promise((r) => cv.toBlob(r, "image/jpeg", 0.8));
        outFiles.push(new File([blob], `s_${String(i + 1).padStart(2, "0")}.jpg`, { type: "image/jpeg" }));
      } catch (err) { console.warn("変換不可:", f.name, err); }
    }
    if (!outFiles.length) { st.textContent = "⚠️ 縮小版を作成できませんでした（HEICは非対応の場合があります）"; return; }
    const total = Math.round(outFiles.reduce((s, f) => s + f.size, 0) / 1024);
    if (navigator.canShare && navigator.canShare({ files: outFiles })) {
      st.textContent = `共有シートから「画像を保存」→GitHubアプリで添付（計${total}KB）`;
      try { await navigator.share({ files: outFiles }); } catch (err) { /* キャンセル */ }
    } else {
      outFiles.forEach((f) => {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(f);
        a.download = f.name;
        a.click();
        setTimeout(() => URL.revokeObjectURL(a.href), 10000);
      });
      st.textContent = `縮小版${outFiles.length}枚をダウンロードしました（計${total}KB）`;
    }
  });

  document.getElementById("f-preview-btn").addEventListener("click", showPreview);
  // GitHubアプリに飛ぶとURLプリフィルが失われるため、遷移前に本文を自動コピーしておく
  document.getElementById("f-issue-btn").addEventListener("click", () => {
    collect();
    try { navigator.clipboard.writeText(toIssueMarkdown(current)); } catch (e) { /* コピー不可でもプリフィルがあるので続行 */ }
  });
  document.getElementById("f-copy-btn").addEventListener("click", async () => {
    collect();
    await navigator.clipboard.writeText(toIssueMarkdown(current));
    document.getElementById("f-copy-btn").textContent = "✅ コピーしました";
    setTimeout(() => (document.getElementById("f-copy-btn").textContent = "📋 Markdownをコピー"), 2000);
  });
  document.getElementById("f-dl-md-btn").addEventListener("click", () => {
    collect(); download(current.reportId + ".md", toIssueMarkdown(current), "text/markdown");
  });
  document.getElementById("f-dl-json-btn").addEventListener("click", () => {
    collect(); download(current.reportId + ".json", JSON.stringify(current, null, 2), "application/json");
  });

  // 下書き管理
  document.getElementById("draft-list-btn").addEventListener("click", () => toggleDraftList());
  document.getElementById("draft-new-btn").addEventListener("click", () => {
    current = newReport(); fill(); toggleDraftList(false); persist();
  });
  document.getElementById("draft-export-btn").addEventListener("click", () => {
    download("cogi-drafts-backup.json", JSON.stringify(loadDrafts(), null, 2), "application/json");
  });
  document.getElementById("draft-import").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(reader.result);
        const all = { ...loadDrafts(), ...data };
        localStorage.setItem(LS_DRAFTS, JSON.stringify(all));
        renderDraftList();
        alert("復元しました");
      } catch (err) { alert("JSONを読み込めませんでした"); }
    };
    reader.readAsText(file);
  });
});
