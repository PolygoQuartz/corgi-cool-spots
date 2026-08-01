/* スポットデータ（2026年8月調査）
   掲載基準: 犬の入水OK / 駐車場あり / 犬連れ飲食店 / 日陰・路面環境
   official: 犬連れ可否の一次情報リンク（おでかけ前に必ず確認）
   ⚠️ ルールは変更されることがあるため、おでかけ前に公式情報を確認 */
const SPOTS = [
  {
    "id": "tashiro-nakatsugawa",
    "name": "田代運動公園前 中津川河川敷",
    "category": "river",
    "area": "神奈川県愛甲郡愛川町",
    "lat": 35.5321,
    "lng": 139.2905,
    "elevation_m": 90,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "透明度が高く川幅も広い。浅瀬と泳げる淵の両方あり。犬連れ川遊びの実績あり"
    },
    "parking": [
      {
        "name": "田代運動公園駐車場",
        "fee": "無料",
        "note": "河川敷隣接"
      },
      {
        "name": "河川敷（車両乗り入れ可）",
        "fee": "無料",
        "note": "川沿いまで直接乗り入れ可。土日祝は朝早くに埋まる"
      }
    ],
    "restaurants": [
      {
        "name": "服部牧場（カサリンガのジェラート）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車で約10分。入場・駐車無料、場内リード同伴OK"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂利"
    },
    "notes": "無料のため夏の週末は非常に混雑、BBQ客多め。川崎から最も近い本格川遊びスポットの一つ",
    "official": {
      "url": "https://www.town.aikawa.kanagawa.jp/aikawa_kankoukyoukai/Experience_play/1497666873966.html",
      "label": "愛川町公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nakatsu%20River%2001.jpg?width=640",
      "credit": "Σ64 / CC BY 3.0"
    }
  },
  {
    "id": "hadano-tokawa",
    "name": "県立秦野戸川公園・水無川（ペット入水指定区域）",
    "category": "river",
    "area": "神奈川県秦野市",
    "lat": 35.4152,
    "lng": 139.1841,
    "elevation_m": 170,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "公式にペット入水可の指定区域あり（川遊び場Aゾーンより下流側）。リード装着必須。浅く流れも穏やか"
    },
    "parking": [
      {
        "name": "大倉駐車場",
        "fee": "530円/日程度",
        "note": "川遊び場まで徒歩数分"
      },
      {
        "name": "水無川駐車場",
        "fee": "530円/日程度",
        "note": "公園南側エリアに近い"
      }
    ],
    "restaurants": [
      {
        "name": "森のカフェ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "秦野市内。ペット同伴OKのテラス席は3席程度と少なめ"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂利（一部護岸コンクリート）"
    },
    "notes": "県立公園が公式に犬の水遊びエリアを指定している貴重なスポット。風の吊り橋と丹沢の景観",
    "official": {
      "url": "https://www.kanagawa-park.or.jp/hadanotokawa/kawa.html",
      "label": "秦野戸川公園公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/HadanoTokawaKoen-KazenoTsuribashi.jpg?width=640",
      "credit": "テレストレラッソ / CC BY-SA 4.0"
    }
  },
  {
    "id": "kamanofuchi",
    "name": "釜の淵公園（多摩川）",
    "category": "river",
    "area": "東京都青梅市",
    "lat": 35.7847,
    "lng": 139.2568,
    "elevation_m": 180,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "浅瀬と深いゾーンが混在し、透明度の高い水。犬連れ川遊びの実績記事あり"
    },
    "parking": [
      {
        "name": "釜の淵公園無料駐車場",
        "fee": "無料",
        "note": "数台分のみ。休日は満車が続く"
      },
      {
        "name": "市営釜の淵公園大柳駐車場",
        "fee": "数百円/日程度",
        "note": "河原まで徒歩5分程度"
      }
    ],
    "restaurants": [
      {
        "name": "ome smash burger 杉屋",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "釜の淵公園内。テラス席ペットOK。火・水定休"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂利・岩（公園側は芝生と木陰）"
    },
    "notes": "夏は釣り・川遊び客で賑わう。深い淵は流れに注意。「わんにゃんおうめお出かけマップ」で周辺の犬連れ店を確認可能",
    "official": {
      "url": "https://www.omekanko.gr.jp/spot/80201/",
      "label": "おうめ観光ガイド"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ome%20Tama%20River%201.JPG?width=640",
      "credit": "京浜にけ / CC BY-SA 3.0"
    }
  },
  {
    "id": "aonohara",
    "name": "青野原オートキャンプ場（道志川）",
    "category": "river",
    "area": "神奈川県相模原市緑区",
    "lat": 35.5722,
    "lng": 139.1889,
    "elevation_m": 310,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "ペット同伴OKのキャンプ場。透明度が高く浅瀬が広い＋泳げる深場もあり、大型犬が泳ぐ体験記あり。犬の川遊びデビューにも向く"
    },
    "parking": [
      {
        "name": "場内乗り入れ（デイキャンプ）",
        "fee": "入場料大人500円＋普通車500円",
        "note": "予約不要で日帰り利用可。サイト＝駐車場所で川まで至近"
      }
    ],
    "restaurants": [
      {
        "name": "オギノパン 本社工場直売店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分。屋外ベンチで名物あげぱん可"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂利・玉石の河原（日陰少なくタープ推奨、林間サイトあり）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Doshigawa%2003210%202160v.jpg?width=640",
      "credit": "ISAKA Yoji / CC BY-SA 3.0（道志川の風景）"
    },
    "notes": "既存収録の道志川両国橋より下流の別スポット。徒歩20分の大滝も見応えあり。夏の週末は早め到着推奨",
    "official": {
      "url": "https://www.aonohara-acl.jp/",
      "label": "青野原ACL公式"
    }
  },
  {
    "id": "hakone-yumoto",
    "name": "早川・須雲川合流部の河川敷（箱根湯本）",
    "category": "river",
    "area": "神奈川県箱根町",
    "lat": 35.2312,
    "lng": 139.1058,
    "elevation_m": 100,
    "driveMin": 75,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "犬連れ散歩サービスが須雲川の浅瀬を「愛犬が安全に水際へ降りられる水遊びポイント」として公式紹介。早川河川敷は遊歩道・親水階段整備済み"
    },
    "parking": [
      {
        "name": "箱根町営駐車場（湯本大橋そば）",
        "fee": "40分400円程度",
        "note": "湯本駅周辺は台数少なめ、休日午前中の到着推奨"
      }
    ],
    "restaurants": [
      {
        "name": "NARAYA CAFE（宮ノ下）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分。足湯テラスで犬同伴可の定番店"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "玉石の河原＋護岸の階段"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Haya%20River%20in%20Hakone-Yumoto%201.jpg?width=640",
      "credit": "Christophe95 / CC BY-SA 4.0"
    },
    "notes": "川崎から最短クラスで行ける候補。雨後は増水が速く立入不可になるため天候確認必須",
    "official": {
      "url": "https://wanwalk.jp/spots/sugumogawa-asase-mizuasobi",
      "label": "WanWalk箱根"
    }
  },
  {
    "id": "akigawa",
    "name": "秋川渓谷（十里木河原・石舟橋周辺）",
    "category": "river",
    "area": "東京都あきる野市",
    "lat": 35.7286,
    "lng": 139.2213,
    "elevation_m": 230,
    "driveMin": 80,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "浅瀬中心だが淵もあり犬が泳げる。犬連れ川遊び・BBQの実績多数。流れは緩やか"
    },
    "parking": [
      {
        "name": "十里木駐車場（市営）",
        "fee": "無料",
        "note": "河原まで徒歩5分。夏は午前中に満車"
      },
      {
        "name": "荷田子駐車場",
        "fee": "1,000円/日",
        "note": "駐車場すぐ脇の河原で泳げる。8時台到着推奨"
      }
    ],
    "restaurants": [
      {
        "name": "黒茶屋",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "築300年古民家の食事処。犬同伴は指定テラス席のみ。要事前確認"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂利・岩"
    },
    "notes": "夏の週末はBBQ客で混雑。水質良好。豪雨後は河原の状況が変わるため出発前に要確認",
    "official": {
      "url": "https://www.akirunokanko.com/?p=326",
      "label": "あきる野観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Akigawa%20River%20in%20the%20autumn.jpg?width=640",
      "credit": "Hiroaki Kaneko / CC BY-SA 2.0"
    }
  },
  {
    "id": "kinchakuda",
    "name": "巾着田・高麗川（ドレミファ橋周辺）",
    "category": "river",
    "area": "埼玉県日高市",
    "lat": 35.8859,
    "lng": 139.3138,
    "elevation_m": 85,
    "driveMin": 80,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "高麗川の浅く穏やかな流れ。犬連れBBQ・川遊びの実績あり。渇水期は特に浅い"
    },
    "parking": [
      {
        "name": "巾着田有料駐車場",
        "fee": "500円/日",
        "note": "トイレ完備。川まで徒歩数分"
      }
    ],
    "restaurants": [
      {
        "name": "阿里山Cafe",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "高麗駅近く。屋根付きウッドデッキのテラスが犬同伴可"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂利（川沿いに木陰あり）"
    },
    "notes": "浅いので泳ぐより水遊び向き。芝生・遊歩道があり散歩と組み合わせやすい。曼珠沙華まつり期間（9月中旬〜10月上旬）は大混雑",
    "official": {
      "url": "https://kinchakuda.com/",
      "label": "巾着田公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinchakuda%20park%2C%20Saitama%20Prefecture%3B%20September%202017%20%2801%29.jpg?width=640",
      "credit": "雷太 / CC BY 2.0"
    }
  },
  {
    "id": "mitake-keikoku",
    "name": "御岳渓谷（御岳苑地）",
    "category": "river",
    "area": "東京都青梅市",
    "lat": 35.801,
    "lng": 139.186,
    "elevation_m": 220,
    "driveMin": 80,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "日本名水百選の清流。浅瀬から淵まであり犬の川遊び実績多数。増水時・カヌー練習エリアには注意"
    },
    "parking": [
      {
        "name": "御岳苑地駐車場",
        "fee": "1時間100円・1日最大800円",
        "note": "52台。河原に直結。満車時は御岳交流センター駐車場（1日500円）"
      }
    ],
    "restaurants": [
      {
        "name": "MITAKE Deck Cafe Bitte",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "多摩川を見下ろすデッキ席。看板犬あり"
      },
      {
        "name": "澤乃井園（清流ガーデン）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "遊歩道で行ける酒蔵の庭園。屋外席は犬OK"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "岩・玉石の河原（一部大岩あり、肉球注意）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mitake%20Valley%20@%20Tama%20River%20Walk%20@%20Ome%20City%20(13165382293).jpg?width=640",
      "credit": "Guilhem Vellut / CC BY 2.0"
    },
    "notes": "遊歩道が整備され犬連れ散策と水遊びを両方楽しめる。夏休みは上流側の岩場が比較的空いている"
  },
  {
    "id": "seiryuen",
    "name": "清流園（名栗川／入間川上流）",
    "category": "river",
    "area": "埼玉県飯能市",
    "lat": 35.8672,
    "lng": 139.2648,
    "elevation_m": 130,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "浅瀬から深い場所まで多様。遠浅で水がきれい。大型犬連れの川遊び実績あり。犬は無料・予約不要"
    },
    "parking": [
      {
        "name": "清流園駐車場",
        "fee": "1,000円/日〜＋入園料200円/人",
        "note": "約130台。川の近くまで乗り入れ可。営業4〜10月、8〜17時"
      }
    ],
    "restaurants": [
      {
        "name": "CARVAAN BREWERY & RESTAURANT 飯能本店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "飯能河原沿い。テラス40席が犬同伴可、予約時に事前連絡"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂利"
    },
    "notes": "管理された有料河原のためマナーは比較的良好。林に囲まれ午後は日陰ができる",
    "official": {
      "url": "https://hanno-tourism.jp/camp_bbq/",
      "label": "飯能観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Hanno%20Iruma%20River%201.JPG?width=640",
      "credit": "京浜にけ / CC BY-SA 3.0"
    }
  },
  {
    "id": "nakagawa-bunanoyu",
    "name": "中川温泉ぶなの湯前の河原（中川川）",
    "category": "river",
    "area": "神奈川県山北町",
    "lat": 35.48,
    "lng": 139.065,
    "elevation_m": 380,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "エメラルドグリーンの淵で犬が泳ぐ実績多数（2023年以降も）。飛び込みできる深場もあるため犬用ライフジャケット推奨。浅瀬もあり"
    },
    "parking": [
      {
        "name": "ぶなの湯 川側駐車場",
        "fee": "駐車券＋温泉利用券2枚セット2,100円",
        "note": "夏の週末は午前9時頃満車になることも"
      }
    ],
    "restaurants": [
      {
        "name": "周辺に犬OK店はほぼ無し",
        "policy": "なし",
        "leadOK": null,
        "note": "テイクアウトして河原で食べるのが定番"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "玉石・岩の河原（滑る岩ありマリンシューズ推奨）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Tanzawa%2002.jpg?width=640",
      "credit": "Σ64 / CC BY 3.0（至近の丹沢湖）"
    },
    "notes": "水質・透明度は神奈川屈指。帰りに人間だけ交代で温泉入浴可（犬は不可）。犬の車内待機は温度に注意"
  },
  {
    "id": "doshigawa",
    "name": "道志川・両国橋キャンプ場（デイキャンプ）",
    "category": "river",
    "area": "山梨県道志村",
    "lat": 35.5516,
    "lng": 139.1697,
    "elevation_m": 330,
    "driveMin": 95,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "道志川は透明度抜群で流れも緩やか。犬連れ川遊びの実績あり。屋外・河原は犬同伴可"
    },
    "parking": [
      {
        "name": "両国橋キャンプ場場内駐車場",
        "fee": "1,000〜1,500円＋施設利用料700円/人",
        "note": "デイキャンプは予約不要、7〜18時。河原まですぐ"
      }
    ],
    "restaurants": [
      {
        "name": "道の駅どうし（屋外ベンチ）",
        "policy": "なし",
        "leadOK": null,
        "note": "周辺に犬連れ入店可の飲食店は少ない。道の駅の屋外ベンチ利用が現実的"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "砂利・岩"
    },
    "notes": "標高330m前後で夏も比較的涼しい。水質は屈指。道志みちは週末渋滞しやすい",
    "official": {
      "url": "https://www.doshi-kanko.jp/camp/ryoukokubashi/",
      "label": "道志村観光サイト"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Doshigawa%2003210%202160v.jpg?width=640",
      "credit": "ISAKA Yoji (cory) / CC BY-SA 3.0"
    }
  },
  {
    "id": "ranzan",
    "name": "嵐山渓谷バーベキュー場（槻川）",
    "category": "river",
    "area": "埼玉県比企郡嵐山町",
    "lat": 36.0233,
    "lng": 139.3046,
    "elevation_m": 70,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "槻川は穏やかで浅く安心して川遊び可。ペット同伴可（リード必須）と施設が明示"
    },
    "parking": [
      {
        "name": "嵐山渓谷バーベキュー場駐車場",
        "fee": "1,000円/日",
        "note": "約300台。河原至近。営業3月下旬〜12月上旬、9〜16時"
      }
    ],
    "restaurants": [
      {
        "name": "場内併設ドッグカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "営業状況は訪問前に要確認"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂利・岩"
    },
    "notes": "手ぶらBBQができるためBBQ客は多め。管理されており炊事場・トイレが整う",
    "official": {
      "url": "https://www.ranzan-kanko.jp/bbq",
      "label": "嵐山町観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Ranzan%20Ranzan-Valley%201.JPG?width=640",
      "credit": "京浜にけ / CC BY-SA 3.0"
    }
  },
  {
    "id": "genbeigawa",
    "name": "源兵衛川（水の苑緑地）",
    "category": "river",
    "area": "静岡県三島市",
    "lat": 35.1219,
    "lng": 138.9125,
    "elevation_m": 25,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "楽寿園湧水源の富士山系冷水。犬の入水禁止規定なし。通常水位は足首〜膝下。真夏でも水が冷たい"
    },
    "parking": [
      {
        "name": "源兵衛川水辺の道横 有料駐車場",
        "fee": "1時間200円",
        "note": "満車時は広小路駅周辺コインパーキング"
      }
    ],
    "restaurants": [
      {
        "name": "Cafe Lirio",
        "policy": "店内OK",
        "leadOK": true,
        "note": "柿田川公園そば（車約10分）。看板犬のいるドッグカフェ"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "飛び石・石畳（濡れて滑りやすい）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Genbei%20River%202011-09-18%20(c).jpg?width=640",
      "credit": "Batholith / Public domain"
    },
    "notes": "ホタル生息の清流のため排泄・シャンプー厳禁などマナー最重視。夏は子供連れで賑わうので早朝推奨"
  },
  {
    "id": "kanogawa-kamishima",
    "name": "狩野川神島公園「川の駅 伊豆城山」",
    "category": "river",
    "area": "静岡県伊豆の国市",
    "lat": 35.025,
    "lng": 138.935,
    "elevation_m": 20,
    "driveMin": 115,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "犬の入水を禁じる規定は確認されず、河原へ降りられるSUP/カヤック拠点。本流は流れがあるため浅い岸際限定・ライフジャケット推奨。増水時は不可"
    },
    "parking": [
      {
        "name": "川の駅 伊豆城山 駐車場",
        "fee": "無料",
        "note": "9:00〜17:00（17:00施錠のため退出厳守）"
      }
    ],
    "restaurants": [
      {
        "name": "川の駅 伊豆城山 園内カフェ",
        "policy": "テラスのみ",
        "leadOK": null,
        "note": "ドッグラン併設施設内のカフェ。同伴条件は現地要確認"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "芝生広場＋玉石の河原"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20Joyama%2020100426%20(a).jpg?width=640",
      "credit": "Batholith / Public domain"
    },
    "notes": "無料ドッグラン（2面）併設で水遊び後の休憩に好適。要ワクチン接種。増水時はドッグラン撤去あり",
    "official": {
      "url": "https://kanogawakamishima.com/dog/",
      "label": "川の駅伊豆城山公式"
    }
  },
  {
    "id": "nagatoro",
    "name": "長瀞 岩畳（荒川）",
    "category": "river",
    "area": "埼玉県秩父郡長瀞町",
    "lat": 36.094,
    "lng": 139.1113,
    "elevation_m": 130,
    "driveMin": 130,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "岩畳の岸辺の浅場で犬の水遊び実績あり。荒川本流は深く流れが強い遊泳禁止箇所が多いため、入水は浅場のみ厳守"
    },
    "parking": [
      {
        "name": "宝登山神社大鳥居横 観光駐車場",
        "fee": "500円/日",
        "note": "岩畳まで徒歩約5分"
      },
      {
        "name": "タイムズ長瀞駅前",
        "fee": "60分400円〜",
        "note": "商店街・岩畳至近"
      }
    ],
    "restaurants": [
      {
        "name": "エルズパーク長瀞 カフェ&バル",
        "policy": "店内OK",
        "leadOK": true,
        "note": "犬同伴前提の施設。フック・マナーマット完備、宿泊者以外も利用可"
      },
      {
        "name": "長瀞商店街のペットOKテラス各店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "観光協会が「ペット受け入れ可能施設一覧」を公開しており選択肢多数"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "岩盤（岩畳）"
    },
    "notes": "夏の岩盤は高温になるため肉球注意・朝夕推奨。ライン下りなど犬連れ観光と組み合わせられる",
    "official": {
      "url": "https://www.nagatoro.gr.jp/wp-content/uploads/2000/03/17e2ae510a9d0af90e737e9354505560.pdf",
      "label": "長瀞町観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nagatoro%20Iwadatami%20Rocks%20%2811043511563%29.jpg?width=640",
      "credit": "Guilhem Vellut / CC BY 2.0"
    }
  },
  {
    "id": "banjo-falls",
    "name": "萬城の滝（地蔵堂川）",
    "category": "river",
    "area": "静岡県伊豆市",
    "lat": 34.9529,
    "lng": 139.0186,
    "elevation_m": 320,
    "driveMin": 140,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "滝下流の親水場と「渓流の小路」沿いの淵が犬の水遊び定番。大型犬の実績あり。犬連れ増加でマナー看板設置済み、リード・排泄マナー厳守"
    },
    "parking": [
      {
        "name": "萬城の滝キャンプ場駐車場",
        "fee": "無料",
        "note": "滝入口向かい。キャンプ場併設"
      }
    ],
    "restaurants": [
      {
        "name": "MAVERICK（中伊豆ワイナリー内）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分。ステーキ中心"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "岩・石段（水飛沫で滑りやすい）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Banjo%20Falls%2020111002.jpg?width=640",
      "credit": "Batholith / Public domain"
    },
    "notes": "水温は夏でも低く冷却効果大。滝つぼ直下は遊泳不可だが下流親水エリアで水遊び可"
  },
  {
    "id": "oashigawa",
    "name": "大芦川（西大芦フォレストビレッジ）",
    "category": "river",
    "area": "栃木県鹿沼市",
    "lat": 36.6053,
    "lng": 139.6659,
    "elevation_m": 350,
    "driveMin": 140,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "「関東一の清流」と呼ばれる透明度。手前は浅瀬、奥は流れが速く深い場所あり。犬の川遊び実績多数。排泄物処理は厳守"
    },
    "parking": [
      {
        "name": "西大芦フォレストビレッジ駐車場",
        "fee": "1,500円/日（8〜16時）",
        "note": "約130台。周辺道路は全面駐車禁止で取締り強化中、必ずここに駐車"
      }
    ],
    "restaurants": [
      {
        "name": "いぬかふぇ まいら（鹿沼市街）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約25分のドッグカフェ。ドッグラン直結"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "岩・玉石の河原（川への階段は急）"
    },
    "notes": "夏休みの週末は混雑必至で午前中着推奨。BBQ・花火は指定区域のみ。標高低めなので朝夕か曇天日向き"
  },
  {
    "id": "mizukoidori",
    "name": "天城 水恋鳥広場",
    "category": "river",
    "area": "静岡県伊豆市",
    "lat": 34.907,
    "lng": 138.928,
    "elevation_m": 230,
    "driveMin": 150,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "夏季限定営業の有料川遊び場。観光協会確認で「川遊びOK（駐車場近くの下流区域）」。飼い主も一緒に入るスタイル。マス掴み取り体験あり"
    },
    "parking": [
      {
        "name": "水恋鳥広場 専用駐車場",
        "fee": "無料（入場料500円）",
        "note": "施設内に複数区画"
      }
    ],
    "restaurants": [
      {
        "name": "ファーマーズヒル",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分。石窯ピザ。犬連れ実績あり"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "川原の石（川歩き用シューズ推奨）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Joren%20Falls%2005.jpg?width=640",
      "credit": "Motokoka / CC BY-SA 4.0（写真は至近の浄蓮の滝）"
    },
    "notes": "夏季のみ営業なので開催期間は要事前確認",
    "official": {
      "url": "https://mizukoidori.com/kawa/",
      "label": "水恋鳥広場公式"
    }
  },
  {
    "id": "suwakyo",
    "name": "清流公園・諏訪峡（利根川）",
    "category": "river",
    "area": "群馬県みなかみ町",
    "lat": 36.7783,
    "lng": 138.9975,
    "elevation_m": 420,
    "driveMin": 150,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "道の駅みなかみ水紀行館下の利根川沿い公園。夏は水遊びできる浅瀬があり、公園内にドッグラン併設。町全体が「ペットフレンドリーみなかみ」を掲げ犬連れ水遊び・犬用SUP/カヌー体験も盛ん。上流ダム放流時のサイレンに注意"
    },
    "parking": [
      {
        "name": "道の駅みなかみ水紀行館 駐車場",
        "fee": "無料",
        "note": "台数多め。清流公園に直結"
      }
    ],
    "restaurants": [
      {
        "name": "育風堂精肉店（はもん みなかみ）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約8分。各テーブルにリードフック完備、ペット用食器あり。生ハムが名物"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "玉石の河原・芝生（公園部）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Suwakyo%20promenade.jpg?width=640",
      "credit": "Qurren / CC BY-SA 4.0"
    },
    "notes": "諏訪峡遊歩道の散策も犬連れOK。本流は流れが速い箇所があるためライフジャケット推奨",
    "official": {
      "url": "https://www.enjoy-minakami.jp/pet",
      "label": "みなかみ町観光協会"
    }
  },
  {
    "id": "hananuki",
    "name": "花貫渓谷（小滝沢キャンプ場周辺）",
    "category": "river",
    "area": "茨城県高萩市",
    "lat": 36.7297,
    "lng": 140.6157,
    "elevation_m": 180,
    "driveMin": 150,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "渓流沿いの無料キャンプ場脇で川遊び可。深さがなく犬向き。水は真夏でも冷たい"
    },
    "parking": [
      {
        "name": "花貫渓谷駐車場",
        "fee": "通常無料（紅葉まつり期間のみ500円）",
        "note": "汐見滝吊り橋まで徒歩約15分"
      }
    ],
    "restaurants": [
      {
        "name": "周辺に犬同伴可の店は確認できず",
        "policy": "なし",
        "leadOK": null,
        "note": "テイクアウト持参推奨"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "自然林に覆われた岩場・玉石の河原"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Hananuki%20Gorge%20%2851847182208%29.jpg?width=640",
      "credit": "Raita Futo / CC BY 2.0"
    },
    "notes": "常磐道・高萩ICから約25分。標高は低いが樹林の日陰が多く体感は涼しい。吊り橋散策も犬連れOK（リード必須）",
    "official": {
      "url": "https://www.takahagi-kanko.jp/play/mountain/page000032.html",
      "label": "高萩市観光協会"
    }
  },
  {
    "id": "kinomata",
    "name": "木の俣渓谷・木の俣園地",
    "category": "river",
    "area": "栃木県那須塩原市",
    "lat": 36.9989,
    "lng": 139.9271,
    "elevation_m": 480,
    "driveMin": 190,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "エメラルドグリーンの透明な淵があり泳げる。リード同伴での利用可"
    },
    "parking": [
      {
        "name": "木の俣園地駐車場",
        "fee": "4〜9月有料（自動精算機）",
        "note": "駐車場からすぐで川遊び可。台数少なめで夏休みは早着推奨"
      }
    ],
    "restaurants": [
      {
        "name": "那須高原 清流の里",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "犬連れOK食事処（釣り堀併設）。屋外席で同伴可"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "岩・砂利"
    },
    "notes": "林間の日陰が多く夏も涼しい。水は冷たく水質抜群。遠いため早朝出発推奨、那須観光と組み合わせ向き",
    "official": {
      "url": "https://www.city.nasushiobara.tochigi.jp/soshikikarasagasu/tsuishin/6/2/2775.html",
      "label": "那須塩原市公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kinomata%20River%2C%20Nasushiobara%2C%20Tochigi.jpg?width=640",
      "credit": "Kanohara / Public domain"
    }
  },
  {
    "id": "tatarahama",
    "name": "たたら浜（観音崎ビーチ）",
    "category": "sea",
    "area": "神奈川県横須賀市",
    "lat": 35.2508,
    "lng": 139.742,
    "elevation_m": 2,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "海水浴場として開設されておらず夏期も犬の水遊び実績多数。遠浅で透明度高め、岩場寄りは波穏やか。リード着用推奨"
    },
    "parking": [
      {
        "name": "県立観音崎公園駐車場（第1〜6）",
        "fee": "550〜880円/日",
        "note": "たたら浜へは第4・5駐車場が近い。夏の週末は午前中に満車になりやすい"
      }
    ],
    "restaurants": [
      {
        "name": "アクアマーレ（横須賀美術館内）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "海を望むテラス席が犬同伴可。キッチンカーも利用可"
      },
      {
        "name": "レストア（走水）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "広いテラス席で犬同伴可"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "白砂の砂浜＋両側に岩場・磯"
    },
    "notes": "川崎から最も近い海候補。初代ゴジラ上陸の浜。ライフセーバー不在のため入水は自己責任。観音崎公園の緑地で木陰の休憩がしやすい",
    "official": {
      "url": "https://www.kanagawa-park.or.jp/kannonzaki/about.html",
      "label": "観音崎公園公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tatarahama%20-%20Kannonzaki%20%28Yokosuka%29.jpg?width=640",
      "credit": "Quercus acuta / CC BY-SA 4.0"
    }
  },
  {
    "id": "wadanahama",
    "name": "和田長浜海岸",
    "category": "sea",
    "area": "神奈川県三浦市・横須賀市",
    "lat": 35.1965,
    "lng": 139.6075,
    "elevation_m": 3,
    "driveMin": 75,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "犬の立入・遊泳禁止の掲示なし。犬連れ海遊びの実績多数で通年犬OKの定番浜。⚠️7月上旬〜8月末は海水浴場開設のため、遊泳区域（ロープ内）を避け早朝・夕方の利用が無難"
    },
    "parking": [
      {
        "name": "和田浜駐車場（三浦市側）",
        "fee": "夏期1,000〜1,500円/日、その他の平日無料",
        "note": "有料期間の営業7:00〜18:00"
      },
      {
        "name": "長浜駐車場（横須賀市側）",
        "fee": "同上",
        "note": "浜まで徒歩すぐ"
      }
    ],
    "restaurants": [
      {
        "name": "ソレイユの丘 内レストラン",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分。テラス・BBQ場が犬OK、ドッグランも併設"
      },
      {
        "name": "BEACHEND CAFE（三浦海岸）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分。海の見えるテラス"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "遠浅の砂浜＋両端に磯（日陰皆無、タープ・水持参必須）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%92%8C%E7%94%B0%E9%95%B7%E6%B5%9C%E6%B5%B7%E5%B2%B8.JPG?width=640",
      "credit": "Mizunoumi / CC BY-SA 3.0"
    },
    "notes": "透明度が高い遠浅ビーチで泳ぎ好きの中型犬に好適。塩抜き用の真水を多めに"
  },
  {
    "id": "yugawara",
    "name": "湯河原海水浴場（吉浜海岸）",
    "category": "sea",
    "area": "神奈川県湯河原町",
    "lat": 35.1466,
    "lng": 139.114,
    "elevation_m": 3,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "海水浴場開設期間中（例年7月中旬〜8月末）もリード着用で犬の同伴・入水OKという関東でも希少な公認ビーチ"
    },
    "parking": [
      {
        "name": "湯河原海浜公園駐車場",
        "fee": "2時間無料、以降200円/30分・最大1,100円",
        "note": "ビーチまで徒歩数分。夏期は早めの到着推奨"
      }
    ],
    "restaurants": [
      {
        "name": "WAKAFE（湯河原駅近く）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "店内に愛犬同伴席あり。名物・湯河原ナポリタン"
      },
      {
        "name": "ラ・テラス岩本屋（万葉公園入口）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "店内ペットOKのドッグフレンドリーカフェ"
      },
      {
        "name": "福浦漁港 みなと食堂",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "漁港直送の海鮮。テラス席のみ犬OK"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜（一部小石混じり）"
    },
    "notes": "海水浴シーズンに堂々と犬と泳げる貴重な海水浴場。徒歩10分の湯河原海辺公園に海を望むドッグランあり（町外200円）。夏は遊泳者が多いので端のエリア利用がマナー",
    "official": {
      "url": "https://www.yugawara.or.jp/feature/634/",
      "label": "湯河原観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/BEACH%20-%20panoramio%20-%20kcomiida.jpg?width=640",
      "credit": "kcomiida / CC BY-SA 3.0"
    }
  },
  {
    "id": "okinoshima",
    "name": "沖ノ島公園（館山・沖ノ島の磯浜）",
    "category": "sea",
    "area": "千葉県館山市",
    "lat": 34.9787,
    "lng": 139.8258,
    "elevation_m": 3,
    "driveMin": 110,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "島の周囲の磯・浜はリード着用で通年犬OK。シュノーケルスポット級の透明度。⚠️夏の海水浴場開設期間（7月中旬〜8月中旬 9〜16時）は指定海水浴場エリアのみ犬NG——島の南〜西側の磯浜を利用"
    },
    "parking": [
      {
        "name": "沖ノ島公園駐車場",
        "fee": "無料",
        "note": "約400台。夏は早朝に満車必至。水道なしのため犬の足洗い用の水持参"
      }
    ],
    "restaurants": [
      {
        "name": "ドッグ&ベジレストラン トゥルシー（館山市内）",
        "policy": "テラスのみ",
        "leadOK": false,
        "note": "プチドッグラン併設・テラスはノーリード可の席あり"
      },
      {
        "name": "カフェえどもんず",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "館山の犬連れ定番カフェ"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "砂浜＋磯（岩場）。島内は海岸林で木陰豊富"
    },
    "notes": "歩いて渡れる無人島。アクアライン経由で意外と近い。磯遊びと泳ぎの両方が楽しめる",
    "official": {
      "url": "https://www.city.tateyama.chiba.jp/tosikeikaku/page000206.html",
      "label": "館山市公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tateyama%20Okinoshima.jpg?width=640",
      "credit": "Xser21 / CC BY-SA 4.0"
    }
  },
  {
    "id": "sotoura",
    "name": "外浦海水浴場",
    "category": "sea",
    "area": "静岡県下田市",
    "lat": 34.691,
    "lng": 138.979,
    "elevation_m": 3,
    "driveMin": 180,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "下田市内の海水浴場共通ルールでリード着用なら夏期も犬の入水OK。入り江のため遠浅で波が非常に穏やか、犬の泳ぎに安心"
    },
    "parking": [
      {
        "name": "外浦海岸周辺駐車場",
        "fee": "夏期2,000円〜/日",
        "note": "約200台。浜のすぐ裏。有料シャワー500円あり"
      }
    ],
    "restaurants": [
      {
        "name": "下田バーガー Ra-maru（車約10分）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "道の駅開国下田みなと内"
      },
      {
        "name": "青木サザエ店（白浜・車約7分）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "大型犬対応"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "白砂の砂浜（入り江）"
    },
    "notes": "下田エリアで最も波が穏やかで、泳ぎ好きのコーギーがしっかり泳ぎ込める。家族連れ中心で落ち着いた雰囲気。多々戸浜より人が少なめ",
    "official": {
      "url": "https://www.shimoda-city.info/sotoura",
      "label": "下田市観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sotoura%20Beach%2001.jpg?width=640",
      "credit": "飯嶋 麗士 / CC BY 2.1 JP"
    }
  },
  {
    "id": "tatado",
    "name": "多々戸浜海水浴場",
    "category": "sea",
    "area": "静岡県下田市",
    "lat": 34.662,
    "lng": 138.922,
    "elevation_m": 5,
    "driveMin": 190,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "下田市観光公式が「市内の海水浴場はリード着用で愛犬と海で泳ぐこともできる」と明言。夏期もOK。サーフスポットで波はやや高め"
    },
    "parking": [
      {
        "name": "多々戸浜駐車場（民間）",
        "fee": "夏期2,000円〜/日",
        "note": "約110台。温水シャワー通年あり。夏休みは早朝満車注意"
      }
    ],
    "restaurants": [
      {
        "name": "下田バーガー Ra-maru（道の駅開国下田みなと）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "名物・金目鯛バーガー。テラス席犬OK"
      },
      {
        "name": "青木サザエ店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "大型犬まで対応実績あり。サザエ・海鮮"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "水質AAのきめ細かい白砂"
    },
    "notes": "透明度抜群の白砂450m。波があるため泳ぎ好きで体力のある犬向き。片道約3時間なので早朝出発推奨",
    "official": {
      "url": "https://www.shimoda-city.info/tatado",
      "label": "下田市観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Izu%20Shimoda%20Tatado%20hama.jpg?width=640",
      "credit": "tmano / CC BY 4.0"
    }
  },
  {
    "id": "yamanakako-hirano",
    "name": "山中湖・平野の浜",
    "category": "lake",
    "area": "山梨県山中湖村",
    "lat": 35.4149,
    "lng": 138.8909,
    "elevation_m": 982,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "山中湖には犬の入水禁止規定がなく、通年犬の水遊び・遊泳実績多数。遠浅で徐々に深くなる。犬用ライフジャケット着用推奨（水温低め）"
    },
    "parking": [
      {
        "name": "平野の浜 湖畔無料駐車スペース",
        "fee": "無料",
        "note": "約10台。満車時は山中湖交流プラザきらら駐車場（300円）が徒歩圏"
      }
    ],
    "restaurants": [
      {
        "name": "SUGEEZ lil' frites（平野）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "全席犬同伴OKのバーガー・カフェ"
      },
      {
        "name": "PICA山中湖 Hammock Cafe",
        "policy": "店内OK",
        "leadOK": true,
        "note": "全席犬同伴OK（屋外ハンモック席）"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂浜（湖岸）＋一部草地。周辺に木陰あり"
    },
    "notes": "逆さ富士の絶景スポット。波がなく穏やかで泳ぎ好きの犬に最適。標高982mで夏も涼しく熱中症リスクが低い。犬連れSUP/カヤック体験も豊富",
    "official": {
      "url": "https://lake-yamanakako.com/theme/theme12",
      "label": "山中湖観光協会"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Yamanaka.jpg?width=640",
      "credit": "RESPITE / Public domain"
    }
  },
  {
    "id": "shibireko",
    "name": "四尾連湖（水明荘湖畔）",
    "category": "lake",
    "area": "山梨県市川三郷町",
    "lat": 35.5568,
    "lng": 138.4553,
    "elevation_m": 850,
    "driveMin": 140,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "ペット同伴可の湖で犬の遊泳禁止規定なし。岸近くから深くなり犬がしっかり泳げる。透明度高い。波・モーターボートなしで安全"
    },
    "parking": [
      {
        "name": "水明荘 第1・第2駐車場",
        "fee": "500円/日",
        "note": "湖畔まで徒歩すぐ。デイ利用可（湖畔利用料あり・要確認）"
      }
    ],
    "restaurants": [
      {
        "name": "水明荘 売店・軽食カフェ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "湖畔テラスで軽食"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "土・砂利の湖畔（森に囲まれた周囲1.2kmの山上湖）"
    },
    "notes": "「ゆるキャン△」聖地の静かな山上湖。木陰が多く真夏でも過ごしやすい。混雑度低め。道中最後は狭い山道あり",
    "official": {
      "url": "http://shibirekosms.sub.jp/",
      "label": "水明荘公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Shibire.JPG?width=640",
      "credit": "さかおり / CC BY-SA 3.0"
    }
  },
  {
    "id": "harunako",
    "name": "榛名湖",
    "category": "lake",
    "area": "群馬県高崎市",
    "lat": 36.474,
    "lng": 138.8598,
    "elevation_m": 1084,
    "driveMin": 150,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "湖畔の緩やかな浅場で犬の水遊び実績あり（公式な犬入水禁止の掲示は確認できず）。人の遊泳は禁止のため岸辺の水遊び向き。ボート・釣り客の往来に注意"
    },
    "parking": [
      {
        "name": "榛名湖畔 無料駐車場（湖畔各所）",
        "fee": "無料",
        "note": "湖を一周する道路沿いに複数あり"
      }
    ],
    "restaurants": [
      {
        "name": "ながお亭",
        "policy": "店内OK",
        "leadOK": true,
        "note": "湖畔の定食屋。ペットと店内で食事可の実績あり。ワカサギフライが名物"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂利・草地の湖畔"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Haruna%2001.jpg?width=640",
      "credit": "きゅうすけ / CC BY 2.1 JP"
    },
    "notes": "標高1,084mで夏も涼しい。犬連れOKの榛名神社と組み合わせた定番コース"
  },
  {
    "id": "chuzenji",
    "name": "中禅寺湖（歌ヶ浜）",
    "category": "lake",
    "area": "栃木県日光市",
    "lat": 36.7292,
    "lng": 139.4897,
    "elevation_m": 1269,
    "driveMin": 165,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "歌ヶ浜駐車場前の湖岸で犬が湖で泳いだ実績多数（大型犬も）。透明度が高く岸からすぐ深くなる場所もあるためライフジャケット推奨。遊覧船桟橋・釣り人の近くは避ける"
    },
    "parking": [
      {
        "name": "県営歌ヶ浜第一駐車場",
        "fee": "無料",
        "note": "湖岸に直結。紅葉期は早朝から混雑"
      }
    ],
    "restaurants": [
      {
        "name": "鹿の子",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "中禅寺湖を見下ろすログハウス調カフェ。テラス席のみ犬OK"
      },
      {
        "name": "TOKI珈琲店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "湖畔モーニングの犬連れ実績あり"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂浜・砂利の湖岸、木立の日陰あり"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mount%20nantai%20and%20lake%20chuzenji.jpg?width=640",
      "credit": "Uraomote yamaneko / CC BY-SA 3.0"
    },
    "notes": "標高1,269mの避暑地で真夏でも25℃前後。犬同伴OKのスワンボートやイタリア大使館別荘記念公園の散策も組み合わせ可"
  },
  {
    "id": "sugenuma",
    "name": "菅沼キャンプ村（菅沼湖畔）",
    "category": "lake",
    "area": "群馬県片品村",
    "lat": 36.8022,
    "lng": 139.3447,
    "elevation_m": 1730,
    "driveMin": 195,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "全国屈指の透明度の湖。場内に川を利用した公認ドッグプールとドッグランあり（夏季・利用者無料）。真夏でも水温が低いので長時間の泳ぎは注意"
    },
    "parking": [
      {
        "name": "菅沼キャンプ村 場内駐車場",
        "fee": "施設利用者は無料（日帰り可・受付必要）",
        "note": "営業は4月下旬〜10月20日頃"
      }
    ],
    "restaurants": [
      {
        "name": "丸沼高原センターステーション",
        "policy": "なし",
        "leadOK": null,
        "note": "車約10分。犬同伴可否は要確認。テイクアウト持参が無難"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "原生林に囲まれた砂地・小石の湖畔"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lake%20Sugenuma%202010%20-%20panoramio.jpg?width=640",
      "credit": "jtease9325 / CC BY 3.0"
    },
    "notes": "標高1,730mで真夏でも20℃前後と避暑に最適。バンガローはペット同泊可",
    "official": {
      "url": "https://www.sugenuma.com/",
      "label": "菅沼キャンプ村公式"
    }
  },
  {
    "id": "shippopo",
    "name": "しっぽ舗ドッグラン（夏季ドッグプール）",
    "category": "pool",
    "area": "神奈川県横浜市都筑区",
    "lat": 35.5415,
    "lng": 139.5765,
    "elevation_m": 40,
    "driveMin": 25,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "7・8月の土日祝限定でドッグラン内にプールを開放。フリー遊泳時間とスタッフ補助付き体験時間あり。プール料金：中型犬900円"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "400円",
        "note": "台数少なめ。近隣コインパーキング複数あり。第三京浜都筑ICから約5分"
      }
    ],
    "restaurants": [
      {
        "name": "Leko Cafe",
        "policy": "店内OK",
        "leadOK": true,
        "note": "センター南駅徒歩8分。店内・テラスとも犬同伴可"
      },
      {
        "name": "Cafe OREO",
        "policy": "店内OK",
        "leadOK": true,
        "note": "都筑中央公園近く"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "土・人工芝のドッグラン"
    },
    "notes": "川崎から最も近い水遊び先で猛暑日の短時間利用に最適。営業10:00〜17:00・水曜定休。プール開催日はInstagramで要確認"
  },
  {
    "id": "dogone-matsudo",
    "name": "DOG ONE 松戸秋山",
    "category": "pool",
    "area": "千葉県松戸市",
    "lat": 35.752,
    "lng": 139.933,
    "elevation_m": 25,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "犬用プール（中型犬用タイムあり）",
      "note": "夏季限定で屋外犬用プールを開放。小型犬と中型犬でタイム分けあり、12kgコーギーは中型犬枠。料金は要問合せ"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "無料",
        "note": "約50台完備"
      }
    ],
    "restaurants": [
      {
        "name": "DOG ONE レストラン（併設）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "愛犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "天然芝"
    },
    "notes": "ドッグラン営業9:00〜19:00（夏季〜20:00）、定休日は不定期（SNSで告知）。川崎から最も近い候補の一つ",
    "official": {
      "url": "https://www.instagram.com/dogone_matsudo_akiyama/",
      "label": "DOG ONE公式IG"
    }
  },
  {
    "id": "highland-dogyard",
    "name": "Highland DOG YARD",
    "category": "pool",
    "area": "神奈川県横須賀市",
    "lat": 35.223,
    "lng": 139.676,
    "elevation_m": 90,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "通年営業の屋外ドッグプールが2種（浅め＋泳げる深さ）。ライフジャケット無料貸出あり、貸切利用も可"
    },
    "parking": [
      {
        "name": "施設専用駐車場",
        "fee": "無料（利用料に含む）",
        "note": "12台。利用料は季節により1,000〜2,500円程度、水曜定休"
      }
    ],
    "restaurants": [
      {
        "name": "ドッグテラス アミエル&カフェ（三浦海岸）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分。店内・テラスとも犬OK"
      },
      {
        "name": "BEACHEND CAFE",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "人工芝・デッキ、プールサイドは滑りにくい舗装"
    },
    "notes": "犬専用シャワー完備。営業 4〜10月9:30〜17:30／11〜3月10:00〜16:00。狂犬病・ワクチン証明書と鑑札の持参必須。タオルは持参",
    "official": {
      "url": "https://hi-dogyard.com/",
      "label": "Highland DOG YARD公式"
    }
  },
  {
    "id": "wonderful-nature",
    "name": "わんダフルネイチャーヴィレッジ",
    "category": "pool",
    "area": "東京都あきる野市",
    "lat": 35.727,
    "lng": 139.251,
    "elevation_m": 190,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "泳げる（ドッグビーチ最深60cm・280㎡）",
      "note": "全犬種OKの屋外プール「ドッグビーチ」（噴水あり）。例年4〜10月頃、真夏は昼の部/夕涼みの部の2部制。犬1頭1,000〜2,500円/日＋入園料。WEB日時指定チケット制"
    },
    "parking": [
      {
        "name": "施設駐車場（サマーランド共用）",
        "fee": "700円/日",
        "note": "大規模駐車場で台数十分"
      }
    ],
    "restaurants": [
      {
        "name": "カフェ&レストラン アゼキリ（園内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "全70席全席犬同伴OK。石窯ピザ・地元野菜メニュー"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "天然芝・ウッドチップ。プールサイドは日差し強め、夕涼み部も検討"
    },
    "notes": "定休日は木曜中心（要公式カレンダー確認）。要ワクチン接種証明",
    "official": {
      "url": "https://www.wnv.tokyo/guide",
      "label": "わんダフル公式"
    }
  },
  {
    "id": "yadoriki",
    "name": "寄（やどりき）七つ星ドッグラン＆カフェ",
    "category": "pool",
    "area": "神奈川県松田町",
    "lat": 35.4076,
    "lng": 139.1259,
    "elevation_m": 340,
    "driveMin": 75,
    "water": {
      "allowed": true,
      "depth": "天然水プール（水遊び規模）",
      "note": "山の天然水を引いた屋外ドッグプール。例年4〜10月中旬の季節限定。プール利用は入場料に込み（大人330円・犬440円）。6面以上のドッグラン"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "500円/1区画",
        "note": "ドッグラン利用者用区画あり"
      }
    ],
    "restaurants": [
      {
        "name": "併設カフェ（七つ星カフェ）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "松田町産の旬野菜料理と犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "芝生・土（山あいの渓流沿いで木陰が多く夏も比較的涼しい）"
    },
    "notes": "営業9:00〜17:00。定休日は火曜（祝日は営業）。要ワクチン接種証明。東名・大井松田IC経由",
    "official": {
      "url": "https://yadoriki.com/spot-dogrun/",
      "label": "松田町寄公式"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/KoinoboriOverNakatsuRiverDuringYadorikiWakabaFestival.jpg?width=640",
      "credit": "Azegamaru / CC BY 4.0"
    }
  },
  {
    "id": "fetch-kawagoe",
    "name": "FETCH!（フェッチ）",
    "category": "pool",
    "area": "埼玉県川越市",
    "lat": 35.933,
    "lng": 139.43,
    "elevation_m": 20,
    "driveMin": 80,
    "water": {
      "allowed": true,
      "depth": "泳げる（水深約1.2m）",
      "note": "通年利用できる屋外ドッグプール。水深約1.2mで泳ぎ好きの犬向き（中型犬はライフジャケット推奨）。プール利用1,200円/頭"
    },
    "parking": [
      {
        "name": "店舗駐車場",
        "fee": "無料",
        "note": "郊外型店舗"
      }
    ],
    "restaurants": [
      {
        "name": "FETCH! 併設ドッグカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "ドッグカフェ一体型施設のため店内同伴可"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "屋外ラン＋屋内ランあり（悪天候・猛暑時は屋内に退避可）"
    },
    "notes": "営業10:00〜18:00、定休日は水・木曜。泳ぎ好きには関東でも数少ない「深さのある」通年プール。要ワクチン接種証明",
    "official": {
      "url": "http://www.fetch-cafe.com/",
      "label": "FETCH!公式"
    }
  },
  {
    "id": "doggys-island",
    "name": "小谷流の里 ドギーズアイランド",
    "category": "pool",
    "area": "千葉県八街市",
    "lat": 35.691,
    "lng": 140.254,
    "elevation_m": 50,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "泳げる（中〜大型犬用プール最大水深80cm）",
      "note": "日本最大級ドッグリゾート。中〜大型犬専用ラン内プール（最大80cm）、じゃぶじゃぶ池など複数の水遊び場。日帰り入場：大人1,000〜1,200円、中型犬1,000〜1,300円"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "800円/日",
        "note": "大規模駐車場あり。宿泊者は無料"
      }
    ],
    "restaurants": [
      {
        "name": "施設内レストラン（ワンズガーデン等）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "リゾート内レストランは愛犬同伴可。犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "天然芝（広大な芝生ラン、散策路あり）"
    },
    "notes": "日帰り9:00〜21:00。定休日なし（メンテ休業あり）。要ワクチン接種証明。アクアライン経由",
    "official": {
      "url": "https://doggys-island.jp/",
      "label": "ドギーズ公式"
    }
  },
  {
    "id": "woof-yamanakako",
    "name": "ドッグリゾートWoof（山中湖）",
    "category": "pool",
    "area": "山梨県山中湖村",
    "lat": 35.4243,
    "lng": 138.8952,
    "elevation_m": 990,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "泳げる（屋内25mプール・水深1m超）",
      "note": "約3万㎡の犬用複合リゾート。屋内温水25mプールは通年営業で泳ぎ好きの中型犬に最適。屋外温水プール（春〜夏）も。日帰りプール1,844円/頭〜"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "無料",
        "note": "敷地内駐車場あり"
      }
    ],
    "restaurants": [
      {
        "name": "Woof カフェ&レストラン（館内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "犬同伴可のドッグカフェ・レストラン併設。犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "芝生・土のドッグラン＋屋内ラン（標高約1,000mで夏も涼しい）"
    },
    "notes": "施設9:00〜18:00頃。雨天・猛暑でも屋内プールで泳げるのが強み。東名〜東富士五湖道路山中湖IC経由",
    "official": {
      "url": "https://www.yamanashi-kankou.jp/kankou/stay/pet_4.html",
      "label": "山梨県公式観光"
    }
  },
  {
    "id": "aiken-izukogen",
    "name": "愛犬の駅 伊豆高原",
    "category": "pool",
    "area": "静岡県伊東市",
    "lat": 34.877,
    "lng": 139.103,
    "elevation_m": 140,
    "driveMin": 150,
    "water": {
      "allowed": true,
      "depth": "わんこプール（夏季限定）",
      "note": "屋外ドッグランに夏季限定（例年7/1〜）で「わんこプール」が登場。タオル・ドライヤー完備。屋内ドッグランもあり"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "無料",
        "note": "10:00〜18:00利用可"
      }
    ],
    "restaurants": [
      {
        "name": "併設カフェ（愛犬の駅内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "店内・テラスとも犬同伴OK。犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "屋外ラン＋屋内ラン（真夏の日中は屋内に退避可）"
    },
    "notes": "営業10:00〜18:00、年中無休。伊豆ぐらんぱる公園至近で観光と組み合わせやすい。片道約2.5時間と日帰り圏の上限",
    "official": {
      "url": "https://www.welovedogs.jp/station/",
      "label": "愛犬の駅公式"
    }
  }
];

/* 調査の結果、掲載を見送ったスポット（2026年8月調査時点） */
const EXCLUDED = [
  {
    "name": "本栖湖",
    "area": "山梨県富士河口湖町・身延町",
    "reason": "漁協の要請により2022年から犬の遊泳（入水）が禁止",
    "type": "入水禁止"
  },
  {
    "name": "西湖（湖畔キャンプ場）",
    "area": "山梨県富士河口湖町",
    "reason": "湖畔キャンプ場がペットの水遊びを禁止",
    "type": "入水禁止"
  },
  {
    "name": "宇佐美海水浴場",
    "area": "静岡県伊東市",
    "reason": "犬の同伴は可だが入水は禁止",
    "type": "入水禁止"
  },
  {
    "name": "白浜中央海水浴場",
    "area": "静岡県下田市",
    "reason": "犬の同伴は可だが入水は禁止",
    "type": "入水禁止"
  },
  {
    "name": "熱海・長浜海水浴場",
    "area": "静岡県熱海市",
    "reason": "海水浴場開設期間中はペット同伴不可",
    "type": "夏期NG"
  },
  {
    "name": "南千倉海水浴場・御宿など千葉の主要海水浴場",
    "area": "千葉県",
    "reason": "海水浴場開設期間中は犬の入水禁止",
    "type": "夏期NG"
  },
  {
    "name": "三戸浜海岸",
    "area": "神奈川県三浦市",
    "reason": "2020年から駐車場が閉鎖されており車でのアクセスが困難",
    "type": "駐車場なし"
  },
  {
    "name": "長者ヶ崎海岸",
    "area": "神奈川県葉山町",
    "reason": "夏期の犬入水可否が公式に確認できなかったため掲載見送り",
    "type": "不明"
  }
];
