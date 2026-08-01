# AIエージェント処理手順書（訪問レポート → Pull Request）

このドキュメントは、`spot-report` ラベルのGitHub Issueを処理するAIエージェント（Claude Code等）の作業規約である。
**この手順以外の方法でリポジトリを変更してはいけない。**

## 大原則

1. **mainブランチへ直接pushしない。** すべての変更はPull Requestとして提出する。Force push禁止。
2. **人間の一次情報を公式情報で上書きしない。** 食い違う場合は両方を残す。
3. **確認できない情報を推測で埋めない。** 未確認は未確認として残し、PRに明記する。
4. **無関係なファイルを変更しない。** 変更してよいのは原則 `spots.js` / `visits.js` / `assets/visits/` のみ。
5. 最終的な公開判断は人間がPRレビューで行う。

## リポジトリ構成（要点）

| ファイル | 内容 |
|---|---|
| `spots.js` | `SPOTS`（昼スポット）/ `NIGHT_SPOTS`（夜）/ `RESTAURANTS`（飲食店）/ `EXCLUDED` / `NIGHT_EXCLUDED` |
| `visits.js` | `VISITS`（訪問記録＝管理人の一次情報）。スキーマはファイル冒頭のコメント参照 |
| `assets/visits/<visit-id>/` | 訪問写真の置き場（例: `assets/visits/visit-2026-07-20-001/01.jpg`） |
| `tests/validate.js` | データ検証。`node tests/validate.js` |
| `app.js` / `style.css` / `index.html` | 表示ロジック。**データ処理では原則変更しない** |

ビルド工程はない（Vanilla JS静的サイト）。公開は main → gh-pages への反映後、GitHub Pagesが配信する（gh-pagesへの反映も人間のマージ後に行う）。

## 処理手順

### 1. Issueの受領
- `spot-report` + `ai-research-needed` ラベルのIssueを対象とする。
- 処理開始時にIssueへ「処理を開始しました」とコメントする。
- Issue本文の ```yaml ブロックを IntakeReport として読み取る。壊れている場合は独力で修復を試み、判断できなければIssueで人間に質問する。

### 2. 場所の特定
- `location_hint` の name / shared_url / latitude,longitude / nearby_note / 写真の順に手掛かりとして使う。
- 共有URLは展開して座標・施設名を得る。
- **似た名前の施設を同一と断定しない。** 座標と名称の両方が整合する場合のみ特定とみなす。
- 特定できない場合は処理を止め、Issueに候補を列挙して人間に確認を求める（ラベル `needs-human-review` を付ける）。

### 3. 既存スポットとの重複確認
以下で `SPOTS` / `NIGHT_SPOTS` を検索する:
- 名称・別名の部分一致
- 座標の距離（**1km以内は重複候補**）
- 公式URL・GoogleマップURLの一致

判定:
- **既存スポットと確定** → 新規作成せず、そのスポットへ訪問記録を追加する。
- **新規と確定** → 新規スポットを作成する。
- **曖昧** → AIだけで統合せず、両案をPRに書いて人間に確認を求める。

### 4. 公式情報の調査
情報源の優先順位:
1. 施設の公式サイト
2. 自治体・観光協会・公園管理者等の公式ページ
3. 公式SNS
4. 信頼できる一次情報に近い案内（Honda Dog等の施設提供データ）
5. その他の第三者情報

ルール:
- **第三者の口コミだけを根拠に犬同伴可否・禁止事項を断定しない。** Googleマップのユーザー投稿は規約の根拠にしない。
- 過去の営業時間を現在も有効とみなさない（2年以上前の情報は要再確認扱い）。
- 営業時間が不明でも一般的な時間で埋めない。
- 各情報に **値・確認日・情報源URL・確認状態** を持たせる。確認状態:
  `confirmed_official` / `confirmed_on_site` / `reported_by_owner` / `third_party_only` / `not_found` / `conflicting`
- スポットの `official` 欄・`sources` 欄・`lastChecked`（YYYY-MM-DD）を更新する。
- 管理人の現地確認と公式情報が食い違う場合は、visits.jsの `onSiteNotes` に現地情報を残し、spots.js側には公式情報＋`conflicting`を記録し、**PRで明示する**。

### 5. データ作成

**訪問記録（visits.js）**
- `visits.js` 冒頭コメントのスキーマ（schemaVersion 1）に従う。
- `rawNote` は**原文のまま**保存する。
- `diary` は rawNote と入力項目を事実の範囲内で読みやすく編集した短い旅行記。
  - 構成: 一言まとめ → 訪問時の状況 → 実際の動線 → 犬の様子 → 良かった点 → 注意したい点 → 次回メモ
  - **事実の追加禁止。犬の感情の創作禁止。** 「絶対」「安全」「おすすめ」等の断定表現を避ける。
  - 管理人の言葉・手作り感を残す。観光紹介文・広告文にしない。
- 実測していない温度を実測値として書かない。
- 過去の訪問記録は変更しない。

**スポット（spots.js）**
- 新規スポットは既存スポットと同じ形式（id, name, category, area, lat, lng, elevation_m, driveMin, water/night, parking[], restaurants[], surface, hours, photo, official, notes）。
- 掲載基準（駐車場必須など）を満たさない場合は `EXCLUDED` / `NIGHT_EXCLUDED` へ理由つきで追加し、PRで人間に確認を求める。
- 飲食店を追加する場合は `RESTAURANTS` に正規化し、spotからは `{ref, note}` で参照する。

### 6. 写真
- Issueに添付された写真をダウンロードし、`assets/visits/<visit-id>/01.jpg` 形式で配置（連番・小文字拡張子）。
- 長辺1600px程度へリサイズ、JPEG品質80目安、**Exif（特に位置情報）を削除**する。
- altとcaptionの下書きを作る。**写っていない事実を書かない。**
- 人物の顔・車のナンバー等が写っている可能性がある場合は、そのまま公開せずPRで人間に警告する。

### 7. 検証
```bash
node tests/validate.js
```
- 失敗したら修正する。修正できない場合、PRはDraftのままにして人間に報告する。
- 可能ならローカルHTTPサーバー（`python -m http.server`）で表示確認する（地図・カード・フィルター・訪問記録ブロック）。

### 8. Git操作
```bash
git checkout main && git pull
git checkout -b spot-report/YYYY-MM-DD-<slug>
# 変更（spots.js / visits.js / assets/visits/ のみ）
git add <意図したファイルだけ>
git commit -m "Add visit report for <スポット名>"
git push origin spot-report/YYYY-MM-DD-<slug>
```
- ブランチ名例: `spot-report/2026-07-20-example-park`
- `git add -A` を使う場合は `git status` で意図しない変更が混ざっていないか必ず確認する。
- **gh-pagesブランチには触れない**（公開反映は人間のマージ後に行う）。

### 9. Pull Request
- `.github/PULL_REQUEST_TEMPLATE.md` の構成に従い、以下を必ず書く:
  変更概要 / 人間の一次情報の要約 / AIが調査した情報（情報源URL・確認日つき）/ **確認できなかったこと** / テスト結果 / レビューしてほしい点（最大5件）
- `Closes #<Issue番号>` でIssueと関連付ける。
- 元Issueに結果（PRリンク・未確認事項）をコメントし、ラベルを `needs-human-review` に更新する。
- 未確認項目が多い場合は `research-incomplete` ラベルも付ける。

## 禁止事項（再掲）
- mainへの直接push / force push
- 似た名前の施設の同一視
- 公式に記載のない犬同伴可否の推測
- 写真だけからのルール断定
- 営業時間の一般値による補完
- 管理人が訪問していない場所の訪問記風文章
- 犬の感情の創作
- 実測していない温度の実測値扱い
- 人間の確認なしでの公開（マージ）

## 人間がAIを使わず更新する方法
`spots.js` / `visits.js` を直接編集し、`node tests/validate.js` が通ることを確認して main と gh-pages へpushすればよい（従来どおりの運用）。このガイドはAIの行動を縛るものであり、人間の直接編集を妨げない。
