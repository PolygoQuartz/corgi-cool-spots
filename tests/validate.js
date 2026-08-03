/* データ検証テスト（Node製・依存ゼロ）
   実行: node tests/validate.js
   AIエージェントはPR作成前に必ずこれを実行し、失敗したらPRを完成扱いにしないこと */
const fs = require("fs");
const path = require("path");
const ROOT = path.join(__dirname, "..");

let failures = 0;
const fail = (msg) => { failures++; console.error("  ✗ " + msg); };
const ok = (msg) => console.log("  ✓ " + msg);

function loadConsts(file, names) {
  const src = fs.readFileSync(path.join(ROOT, file), "utf8");
  const out = {};
  const expose = names.map((n) => `out.${n} = typeof ${n} !== 'undefined' ? ${n} : undefined;`).join("");
  new Function("out", src + ";" + expose)(out);
  return out;
}

console.log("== spots.js ==");
const { SPOTS, RESTAURANTS, EXCLUDED, NIGHT_SPOTS, NIGHT_EXCLUDED } =
  loadConsts("spots.js", ["SPOTS", "RESTAURANTS", "EXCLUDED", "NIGHT_SPOTS", "NIGHT_EXCLUDED"]);

if (!Array.isArray(SPOTS) || SPOTS.length === 0) fail("SPOTSが空");
else ok(`SPOTS ${SPOTS.length}件`);

const ids = new Set();
const allSpots = [...SPOTS, ...(NIGHT_SPOTS || [])];
for (const s of allSpots) {
  const tag = `spot ${s.id || "(no id)"}`;
  if (!s.id) fail(`${tag}: idなし`);
  else if (ids.has(s.id)) fail(`${tag}: id重複`);
  ids.add(s.id);
  if (typeof s.lat !== "number" || typeof s.lng !== "number") fail(`${tag}: 座標が不正`);
  if (s.lat && (s.lat < 20 || s.lat > 46 || s.lng < 122 || s.lng > 154)) fail(`${tag}: 座標が日本国外`);
  if (!s.name) fail(`${tag}: nameなし`);
  if (!s.category) fail(`${tag}: categoryなし`);
  if (!Array.isArray(s.parking) || s.parking.length === 0) fail(`${tag}: 駐車場情報なし（掲載基準違反）`);
  for (const r of s.restaurants || []) {
    if (r.ref && !(RESTAURANTS || {})[r.ref]) fail(`${tag}: 存在しない飲食店ref ${r.ref}`);
  }
}
ok(`昼${SPOTS.length}＋夜${(NIGHT_SPOTS || []).length}スポットのID・座標・駐車場を確認`);

if (RESTAURANTS) {
  let geoN = 0;
  for (const [id, r] of Object.entries(RESTAURANTS)) {
    if (!r.name) fail(`restaurant ${id}: nameなし`);
    if (!["店内OK", "テラスのみ"].includes(r.policy)) fail(`restaurant ${id}: policy不正(${r.policy})`);
    if (r.lat) geoN++;
  }
  ok(`RESTAURANTS ${Object.keys(RESTAURANTS).length}件（座標あり${geoN}）`);
}

console.log("== EXCLUDED整合 ==");
{
  // 昇格済みスポットの消し込み漏れ検出（括弧書きを除いた名前が一致したらNG）
  const norm = (n) => (n || "").replace(/[（(].*?[）)]/g, "").trim();
  const dayNames = new Set(SPOTS.map((s) => norm(s.name)));
  const nightNames = new Set((NIGHT_SPOTS || []).map((s) => norm(s.name)));
  for (const e of EXCLUDED || []) {
    if (dayNames.has(norm(e.name))) fail(`EXCLUDED「${e.name}」は昇格済みスポットと重複（消し込み漏れ）`);
  }
  for (const e of NIGHT_EXCLUDED || []) {
    if (nightNames.has(norm(e.name))) fail(`NIGHT_EXCLUDED「${e.name}」は夜スポットと重複（消し込み漏れ）`);
  }
  ok("EXCLUDEDと掲載スポットの重複なし");
}

console.log("== visits.js ==");
const { VISITS } = loadConsts("visits.js", ["VISITS"]);
if (!Array.isArray(VISITS)) fail("VISITSが配列ではない");
else {
  const vids = new Set();
  for (const v of VISITS) {
    const tag = `visit ${v.id || "(no id)"}`;
    if (!v.id) fail(`${tag}: idなし`);
    else if (vids.has(v.id)) fail(`${tag}: id重複`);
    vids.add(v.id);
    if (v.schemaVersion !== 1) fail(`${tag}: schemaVersionが1ではない`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(v.date || "")) fail(`${tag}: dateがYYYY-MM-DD形式ではない`);
    if (v.spotId != null && !ids.has(v.spotId)) fail(`${tag}: 存在しないspotId ${v.spotId}`);
    if (v.restaurantRef && !(RESTAURANTS || {})[v.restaurantRef]) fail(`${tag}: 存在しないrestaurantRef ${v.restaurantRef}`);
    if (v.spotId == null && !v.restaurantRef && !v.pendingSpotName) fail(`${tag}: spotId/restaurantRef/pendingSpotNameのいずれもない`);
    if (!v.rawNote && !v.summary) fail(`${tag}: 一次情報（rawNote/summary）が空`);
    for (const t of v.groundTemps || []) {
      if (t.tempC == null && !t.feel) fail(`${tag}: 地面温度にtempC（実測）もfeel（素手体感）もない`);
      if (t.tempC != null && typeof t.tempC !== "number") fail(`${tag}: 地面温度が数値でない`);
      if (typeof t.tempC === "number" && (t.tempC < -20 || t.tempC > 90)) fail(`${tag}: 地面温度が非現実的(${t.tempC})`);
      if (t.feel && !["危険", "アチアチ", "人肌", "ひんやり"].includes(t.feel)) fail(`${tag}: feelが規定外(${t.feel})`);
    }
    for (const p of v.photos || []) {
      if (!/^assets\/visits\//.test(p.src)) fail(`${tag}: 写真パスが assets/visits/ 配下ではない(${p.src})`);
      const abs = path.join(ROOT, p.src);
      if (!fs.existsSync(abs)) fail(`${tag}: 写真ファイルが存在しない(${p.src})`);
    }
  }
  ok(`VISITS ${VISITS.length}件を確認`);
}

console.log("== HTML参照 ==");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
for (const f of ["spots.js", "visits.js", "app.js", "style.css"]) {
  if (!html.includes(f)) fail(`index.htmlが${f}を参照していない`);
}
const vm = html.match(/app\.js\?v=(\d+)/);
const sm = html.match(/spots\.js\?v=(\d+)/);
if (vm && sm && vm[1] !== sm[1]) fail("キャッシュバスターのバージョンが不一致");
ok("index.htmlの参照とキャッシュバスターを確認");

if (failures > 0) {
  console.error(`\nNG: ${failures}件の問題`);
  process.exit(1);
}
console.log("\nOK: すべての検証に合格");
