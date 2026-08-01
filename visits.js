/* 訪問記録データ（管理人の一次情報）
   schemaVersion 1
   - 1レコード = 1回の訪問。spotId で spots.js の SPOTS[].id を参照する
   - まだスポット登録がない場所への訪問は spotId: null + pendingSpotName を使う
   - 「管理人が現地で見たこと」だけを記録する。公式情報は spots.js 側に持つ
   - AIエージェントは docs/AI_AGENT_GUIDE.md の手順でのみこのファイルを更新すること
   - 過去の訪問記録は当時の記録として保持し、後から書き換えない

   VisitRecord:
   {
     id: "visit-YYYY-MM-DD-nnn",
     schemaVersion: 1,
     spotId: "hadano-tokawa",      // SPOTSのid（未登録スポットはnull）
     pendingSpotName: null,          // spotId=nullのときの場所名メモ
     date: "2026-07-20",
     arrivedAt: "13:00",            // 任意
     durationMin: 70,                // 任意
     weather: "晴れ",               // 任意（管理人の体感）
     summary: "一言まとめ",
     dogCondition: ["よく歩いた", "水遊びをした"],
     routeNotes: ["駐車場から川まで徒歩5分", "川沿いはほぼ木陰"],
     shadeImpression: "ほぼ木陰",   // 任意
     crowdImpression: "静か",       // 任意
     groundTemps: [                  // 任意・管理人実測
       { time: "13:15", surface: "日向のアスファルト", tempC: 46.8, sun: "日向", device: "放射温度計", note: "" }
     ],
     onSiteNotes: ["現地看板: ..."],  // 現地で確認した注意事項（公式情報と食い違う場合もここに残す）
     rawNote: "管理人の生メモ（原文のまま保存）",
     diary: "AIが事実の範囲内で編集した短い旅行記",
     photos: [
       { src: "assets/visits/visit-YYYY-MM-DD-nnn/01.jpg", alt: "", caption: "", representative: true }
     ],
     issue: 12                       // 元になったGitHub Issue番号（任意）
   }
*/
const VISITS = [
  {
    "id": "visit-2026-08-01-demo",
    "schemaVersion": 1,
    "spotId": "hadano-tokawa",
    "pendingSpotName": null,
    "date": "2026-08-01",
    "arrivedAt": "13:00",
    "durationMin": 70,
    "weather": "晴れ",
    "summary": "【動作確認用サンプル】川沿いはほぼ木陰で歩けた",
    "dogCondition": [
      "よく歩いた",
      "水遊びをした",
      "また来てもよさそう"
    ],
    "routeNotes": [
      "駐車場から川遊び場まで徒歩5分ほど",
      "途中に日向の舗装路が短くある"
    ],
    "shadeImpression": "日陰多め",
    "crowdImpression": "ほどほど",
    "groundTemps": [
      {
        "time": "13:15",
        "surface": "日向のアスファルト",
        "tempC": 46.8,
        "sun": "日向",
        "device": "",
        "note": ""
      },
      {
        "time": "13:18",
        "surface": "芝生",
        "tempC": 27.2,
        "sun": "日陰",
        "device": "",
        "note": ""
      }
    ],
    "onSiteNotes": [
      "※これはPRフローの動作確認用サンプルデータです（実際の訪問記録ではありません）"
    ],
    "rawNote": "（動作確認用サンプル）駐車場から川まで5分くらい。途中だけ日向の舗装路。川沿いはほぼ木陰。芝生は冷たかった。",
    "diary": "【動作確認用サンプル】このレコードは訪問レポート→PR作成フローのテスト用です。実際の旅行記はここに、管理人の生メモを事実の範囲で整えた文章が入ります。",
    "photos": []
  }
];
