/* 訪問記録データ（飼い主の一次情報）
   schemaVersion 1
   - 1レコード = 1回の訪問。spotId で spots.js の SPOTS[].id を参照する
   - 飲食店への訪問は spotId: null + restaurantRef（RESTAURANTSのid、例 "r013"）を使う → 飲食店カードに表示される
   - まだスポット登録がない場所への訪問は spotId: null + pendingSpotName を使う
   - 「飼い主が現地で見たこと」だけを記録する。公式情報は spots.js 側に持つ
   - AIエージェントは docs/AI_AGENT_GUIDE.md の手順でのみこのファイルを更新すること
   - 過去の訪問記録は当時の記録として保持し、後から書き換えない

   VisitRecord:
   {
     id: "visit-YYYY-MM-DD-nnn",
     schemaVersion: 1,
     spotId: "hadano-tokawa",      // SPOTSのid（未登録スポットはnull）
     restaurantRef: null,            // 飲食店訪問のときRESTAURANTSのid（例 "r013"）
     pendingSpotName: null,          // spotId=nullのときの場所名メモ
     date: "2026-07-20",
     arrivedAt: "13:00",            // 任意
     durationMin: 70,                // 任意
     weather: "晴れ",               // 任意（飼い主の体感）
     summary: "一言まとめ",
     dogCondition: ["よく歩いた", "水遊びをした"],
     routeNotes: ["駐車場から川まで徒歩5分", "川沿いはほぼ木陰"],
     shadeImpression: "ほぼ木陰",   // 任意
     crowdImpression: "静か",       // 任意
     groundTemps: [                  // 任意。tempC=実測値、feel=素手体感（危険/アチアチ/人肌/ひんやり）。どちらか必須
       { time: "13:15", surface: "日向のアスファルト", tempC: 46.8, feel: "", sun: "日向", device: "放射温度計", note: "" }
     ],
     onSiteNotes: ["現地看板: ..."],  // 現地で確認した注意事項（公式情報と食い違う場合もここに残す）
     rawNote: "飼い主の生メモ（原文のまま保存）",
     diary: "AIが事実の範囲内で編集した短い旅行記",
     photos: [
       { src: "assets/visits/visit-YYYY-MM-DD-nnn/01.jpg", alt: "", caption: "", representative: true }
     ],
     issue: 12                       // 元になったGitHub Issue番号（任意）
   }
*/
const VISITS = [
  {
    "id": "visit-2026-08-01-9723",
    "schemaVersion": 1,
    "spotId": "yuyake-koyake",
    "pendingSpotName": null,
    "date": "2026-08-02",
    "arrivedAt": "15:00",
    "durationMin": 60,
    "weather": "曇り",
    "summary": "川はほぼ木陰で涼しい。透明度の高い浅瀬で水遊びも泳ぎもできた",
    "dogCondition": [
      "よく歩いた",
      "楽しそうだった",
      "水遊びをした",
      "泳いだ",
      "また来てもよさそう"
    ],
    "routeNotes": [
      "日陰だけを選んで歩けた",
      "芝生や土の道があった",
      "犬が入れる水辺へ簡単に行けた"
    ],
    "shadeImpression": "ほぼ日陰",
    "crowdImpression": "混雑",
    "groundTemps": [],
    "onSiteNotes": [],
    "rawNote": "浅瀬の広い川遊び場あり。川はほとんど木陰で気温より涼しく感じる。川遊び場の入り口付近は夏休みの子どもで混み合うが、場所を選んで奥の方で遊べばほとんど人のいない区画あり。川の水は透明度が高くてきれい。",
    "diary": "川がほとんど木陰で、真夏の午後でも気温より涼しく感じた。15時に着いて1時間ほど滞在。日陰だけを選んで歩けて、芝生や土の道もあり、犬が入れる水辺へ簡単に行けた。ルチルはよく歩き、浅瀬で水遊びをして泳ぎもした。川の水は透明度が高くてきれい。夏休みの川遊び場入口付近は子どもで混み合っていたが、奥の方にはほとんど人のいない区画があった。",
    "photos": [
      {
        "src": "assets/visits/visit-2026-08-01-9723/01.jpg",
        "alt": "木陰の川辺の浅瀬に立つコーギー",
        "caption": "川沿いはほとんど木陰",
        "representative": true
      },
      {
        "src": "assets/visits/visit-2026-08-01-9723/02.jpg",
        "alt": "ハーネスとリードを着けたまま川で泳ぐコーギー",
        "caption": "リードのまま泳げた",
        "representative": false
      },
      {
        "src": "assets/visits/visit-2026-08-01-9723/03.jpg",
        "alt": "川の浅瀬に立つコーギー、奥に木橋と階段",
        "caption": "奥の区画は人が少なかった",
        "representative": false
      }
    ],
    "issue": 2
  },
  {
    "id": "visit-2026-08-02-3205",
    "schemaVersion": 1,
    "spotId": null,
    "restaurantRef": "r013",
    "pendingSpotName": null,
    "date": "2026-08-02",
    "arrivedAt": "17:00",
    "durationMin": 30,
    "weather": "曇り",
    "summary": "各店のテラス席に加え、テイクアウトを持ち込める芝生のドッグテラスあり",
    "dogCondition": [],
    "routeNotes": [],
    "shadeImpression": "日向多め",
    "crowdImpression": "静か",
    "groundTemps": [],
    "onSiteNotes": [
      "施設南側は民家の駐車場入り口と間違えやすいので注意",
      "駐車場は10台ほど・近隣にコインパーキングなし（混雑時注意）"
    ],
    "rawNote": "各飲食店のテラス席やテイクアウトを持ち込めるドッグテラスあり。",
    "diary": "夕方17時ごろに寄って30分ほど滞在。曇りで暑さはちょうどよく、園内は静かだった。各飲食店のテラス席のほか、テイクアウトを持ち込める芝生のドッグテラスがある。施設南側は民家の駐車場入り口と間違えやすいので注意。駐車場は10台ほどで近隣にパーキングがないため、混雑する時間帯は駐車できない可能性がある。",
    "photos": [
      {
        "src": "assets/visits/visit-2026-08-02-3205/01.jpg",
        "alt": "カフェのガラス戸の前のテラスに座るコーギー",
        "caption": "テラス席は犬OK（リード着用）",
        "representative": false
      },
      {
        "src": "assets/visits/visit-2026-08-02-3205/02.jpg",
        "alt": "44APARTMENTのドリンクとテイクアウトのカレー",
        "caption": "テイクアウトをドッグテラスへ持ち込める",
        "representative": false
      },
      {
        "src": "assets/visits/visit-2026-08-02-3205/03.jpg",
        "alt": "芝生のドッグテラスを歩くコーギー",
        "caption": "芝生のドッグテラス",
        "representative": true
      },
      {
        "src": "assets/visits/visit-2026-08-02-3205/04.jpg",
        "alt": "つくい城の里の建物外観",
        "caption": "古民家を活用した複合施設",
        "representative": false
      }
    ],
    "issue": 3
  },
  {
    "id": "visit-2024-08-10-1101",
    "schemaVersion": 1,
    "spotId": "highland-dogyard",
    "restaurantRef": null,
    "pendingSpotName": null,
    "date": "2024-08-10",
    "arrivedAt": "",
    "durationMin": null,
    "weather": "",
    "summary": "浅め・深めの2種類のプールで全犬種が楽しめる。プール内のおもちゃ使用もOK",
    "dogCondition": [
      "楽しそうだった",
      "水遊びをした",
      "泳いだ",
      "また来てもよさそう"
    ],
    "routeNotes": [],
    "shadeImpression": "",
    "crowdImpression": "",
    "groundTemps": [],
    "onSiteNotes": [
      "プールへのスロープは無し。段差が気になる子は抱っこで入れる必要あり",
      "プールサイドは陽射しに当たって暑くなるので注意"
    ],
    "rawNote": "プールは膝下ほどの浅いものと腰ぐらいの深いものの2種類で全犬種楽しめる作り。プール内でのおもちゃ使用もOK。プールへのスロープは無いので段差が気になる子は抱っこで入れる必要あり。プールサイドは陽射しに当たって暑くなるので注意。洗い場や人間用の更衣室あり。",
    "diary": "プールは膝下ほどの浅いものと腰くらいの深いものの2種類で、体格を問わず楽しめるつくり。プール内でおもちゃを使うのもOK。ルチルはライフジャケットを着て泳いで、楽しそうだった。プールへのスロープはないので、段差が気になる子は抱っこで入れてあげる必要がある。プールサイドは陽射しで暑くなるので注意。洗い場や人間用の更衣室もあって、帰り支度がしやすかった。",
    "photos": [
      {
        "src": "assets/visits/visit-2024-08-10-1101/01.jpg",
        "alt": "ライフジャケットを着てプールで泳ぐコーギー",
        "representative": true
      },
      {
        "src": "assets/visits/visit-2024-08-10-1101/02.jpg",
        "alt": "プールの浅い段に立って舌を出すコーギー",
        "representative": false
      }
    ],
    "issue": 6
  }
];
