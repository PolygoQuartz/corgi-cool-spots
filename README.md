# 🐕💦 ひんやりコギさんぽ

暑い日でも快適な、コーギーと行ける水遊び・夜さんぽスポットを探す個人用Webアプリ兼、犬連れ旅行記データベース。

**公開URL**: https://polygoquartz.github.io/corgi-cool-spots/

## 構成

Vanilla HTML/CSS/JSの静的サイト。ビルド工程なし。main と gh-pages（Pages公開元）へ同内容をpushする。

| ファイル | 内容 |
|---|---|
| `index.html` / `app.js` / `style.css` | アプリ本体（昼/夜モード・地図・フィルター・飲食店カード） |
| `spots.js` | スポットデータ（SPOTS / NIGHT_SPOTS / RESTAURANTS / EXCLUDED / NIGHT_EXCLUDED） |
| `visits.js` | 訪問記録（飼い主の一次情報。スキーマはファイル冒頭コメント） |
| `report.html` / `report.js` / `report.css` | 📝 おでかけメモ（飼い主用の現地入力フォーム） |
| `assets/visits/` | 訪問写真 |
| `tests/validate.js` | データ検証（`node tests/validate.js`） |
| `docs/AI_AGENT_GUIDE.md` | AIエージェントの処理手順書 |

⚠️ `index.html` のCSS/JS参照は `?v=N` のキャッシュバスター付き。**ファイルを更新したらNを上げること。**

## 訪問レポートの流れ（人間とAIの役割分担）

```
現地（人間・3分）          →  GitHub Issue        →  AIエージェント              →  人間
─────────────────           ───────────           ─────────────────             ──────
report.htmlでメモ入力        プリフィルURLで作成    場所特定・公式情報調査          PRレビュー
（場所・日付・犬の様子・     写真を添付            spots.js/visits.js更新・写真整理  未確認事項を確認
 一言メモ・地面温度・写真）                        テスト実行→ブランチ→PR作成      マージ→Pages公開
```

- **人間が書くのは現地でしか分からないことだけ**（犬の様子・実測地面温度・現地看板・写真）。
- **住所・営業時間・犬同伴規約などはAIが公式情報を調査**し、情報源URLと確認日つきで記録する。
- AIが確認できなかった情報は推測せず「未確認」としてPRに明記される。
- AIはmainへ直接pushできない。公開の最終判断は常に人間のマージ。

### 現地での入力（最小3項目）

1. スマホで https://polygoquartz.github.io/corgi-cool-spots/report.html を開く（アプリのフッターからも辿れる）
2. 場所（名前 or Googleマップ共有URL or 📍現在地ボタン）・訪問日・犬の様子チップ＋一言メモ
3. 「内容を確認する」→「🐙 GitHub Issueを作成する」→ Issue画面でSubmit → 写真をコメントに添付

入力は端末内（localStorage）へ自動保存され、途中で閉じても復元される。地面温度・動線・写真メモなどは後から追記できる。メモが長くURL方式が使えない場合は「Markdownをコピー」でIssueへ貼り付ける。

### AIエージェントの起動

Claude Code等のエージェントに以下を依頼する:

```
docs/AI_AGENT_GUIDE.md の手順で、Issue #<番号> の訪問レポートを処理してPull Requestを作ってください
```

### PRの確認ポイント

1. 「確認できなかったこと」欄 — 未確認・食い違い項目
2. 情報源URLと確認日が各項目に付いているか
3. 訪問記録の diary が事実の範囲内か（rawNoteと見比べる）
4. 写真に人物・ナンバー等が写っていないか
5. `node tests/validate.js` の結果

問題なければマージ → mainをgh-pagesへ反映（`git push origin main:gh-pages`）→ 数分でPages公開。

## 情報の扱い

- **飼い主実測**（地面温度など）・**飼い主の体感**・**公式情報**・**未確認**をデータと表示の両方で区別する。
- 公式情報には確認日（`lastChecked`）と情報源を持たせる。訪問レポート処理時に関連する公式情報を再確認する（定期監視はしない）。
- 過去の訪問記録は当時の記録として保持し、書き換えない。
- 写真は公開前にExif（位置情報）を削除する。

## AIを使わない手動更新

`spots.js` / `visits.js` を直接編集 → `node tests/validate.js` → main と gh-pages へpush。AI処理が動かなくてもサイト閲覧・手動更新は従来どおり可能。

## しないこと

一般ユーザー投稿 / ブラウザへのGitHubトークン保存 / 独自バックエンド・常時稼働サーバー / AIによるmain直接更新 / 人間の確認なしの自動公開
