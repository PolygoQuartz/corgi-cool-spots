/* スポットデータ（2026年8月調査）
   掲載基準: 犬の入水OK / 駐車場あり / 犬連れ飲食店 / 日陰・路面環境
   official: 犬連れ可否の一次情報リンク ／ hours: 営業時間 ／ parking[].hours: 駐車場利用時間
   ⚠️ ルールは変更されることがあるため、おでかけ前に公式情報を確認 */
const SPOTS = [
  {
    "id": "hikichigawa-shinsui-park",
    "name": "引地川親水公園",
    "category": "river",
    "area": "神奈川県藤沢市",
    "lat": 35.3645,
    "lng": 139.45,
    "elevation_m": 5,
    "driveMin": 50,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "流れが緩く浅い親水護岸で夏も安定して水遊び可（リード着用）。泳ぐには浅めだがクールダウンに最適。夏休みは子どもが多いので離れた河原を選ぶこと"
    },
    "parking": [
      {
        "name": "第1駐車場（天神橋横・82台）",
        "fee": "無料",
        "hours": "夏期おおむね8:00〜18:00",
        "note": "第2駐車場（54台・無料）もあり"
      }
    ],
    "restaurants": [
      {
        "name": "湘南T-SITE（辻堂）内カフェ各店",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分。犬同伴OK店舗が多くわんこメニューのある店も（店舗により条件あり）"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "芝生の緩護岸＋浅い石・砂利の川床"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園は常時開放、駐車場のみ時間制限あり"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Hikiji%20River%20-%20Fujisawa%20Kanagawa%20-%202026%203%2023%20various%202.jpg?width=640",
      "credit": "Nesnad / CC BY 4.0"
    },
    "official": {
      "url": "https://www.city.fujisawa.kanagawa.jp/kouen/kyoiku/leisure/koen/fujisawashi/hikijigawa-02/",
      "label": "藤沢市公式"
    },
    "notes": "園内に登録制・無料の天然芝ドッグパーク（約1,200㎡）併設。川崎から50分と近く、海NGな真夏日の代替先として優秀"
  },
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
        "note": "河川敷隣接",
        "hours": "要確認（キャンプ・BBQ利用者の駐車は不可）"
      },
      {
        "name": "河川敷（車両乗り入れ可）",
        "fee": "無料",
        "note": "川沿いまで直接乗り入れ可。土日祝は朝早くに埋まる",
        "hours": "24時間"
      }
    ],
    "restaurants": [
      {
        "name": "オレンジツリー",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・愛川町のログハウス洋食。店内・テラスとも犬同伴可"
      },
      {
        "name": "和ごころカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・愛川町のカフェ・和食。店内とテラスで同伴可"
      },
      {
        "name": "丸太小屋レストラン びんずる",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・清川村の定食食堂。別棟店内とテラスで同伴可・清川恵水ポークが名物"
      },
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "河川敷自体は終日利用可"
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
        "note": "川遊び場まで徒歩数分",
        "hours": "入庫6:30〜21:00（出庫24時間可）"
      },
      {
        "name": "水無川駐車場",
        "fee": "530円/日程度",
        "note": "公園南側エリアに近い",
        "hours": "入庫6:30〜21:00（出庫24時間可）"
      }
    ],
    "restaurants": [
      {
        "name": "kent crew",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・松田町のドッグカフェ。ドッグラン併設・犬用メニューあり"
      },
      {
        "name": "森のカフェ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "秦野市内。ペット同伴OKのテラス席は3席程度と少なめ"
      },
      {
        "name": "白笹うどん 多奈加亭",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分・白笹稲荷神社そばのうどん・甘味処。要事前確認"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園は常時開放。パークセンター等は日中のみ"
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
        "note": "河原まで徒歩5分程度",
        "hours": "入庫3〜9月6:00〜20:00／10〜2月8:00〜18:00"
      }
    ],
    "restaurants": [
      {
        "name": "I'm home",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・青梅市和田町のカフェ＆雑貨。店内同伴可（マナーパンツ推奨）"
      },
      {
        "name": "DOG CAFE CANIS",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・青梅IC近くのドッグカフェ。屋内席OKで雨の日も安心"
      },
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園・河原自体は終日利用可"
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
        "note": "予約不要で日帰り利用可。サイト＝駐車場所で川まで至近",
        "hours": "8:00〜17:00"
      }
    ],
    "restaurants": [
      {
        "name": "オギノパン 本社工場直売店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分。屋外ベンチで名物あげぱん可"
      },
      {
        "name": "つくい城の里",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約18分・古民家カフェ複合施設。ドッグテラス完備・愛犬用ごはんあり"
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
    },
    "hours": {
      "open": "8:00〜17:00",
      "closed": null,
      "note": "デイキャンプ受付8:00〜・当日17:00まで。予約不要"
    }
  },
  {
    "id": "kakiyamada-camp",
    "name": "柿山田オートキャンプガーデン（小糸川）",
    "category": "river",
    "area": "千葉県君津市",
    "lat": 35.2445,
    "lng": 139.9996,
    "elevation_m": 100,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "三方を小糸川に囲まれたキャンプ場でペット同伴可（君津市公式に明記）。浅瀬が多く犬の川遊び向き。流れが緩く真夏の水遊びに好適"
    },
    "parking": [
      {
        "name": "場内駐車（サイト乗り入れ）",
        "fee": "デイキャンプ料金に含む（大人800円〜）",
        "hours": "10:00〜18:00",
        "note": "要事前予約。ドッグラン・温水シャワーあり"
      }
    ],
    "restaurants": [
      {
        "name": "猟師工房ドライブイン",
        "policy": "店内OK",
        "leadOK": null,
        "note": "車約15分。抱っこで入店可（12kgは要相談）・犬用ジビエおやつ販売・水曜定休"
      }
    ],
    "surface": {
      "shade": "多い",
      "ground": "河原（砂利・岩）＋芝サイト"
    },
    "hours": {
      "open": "10:00〜18:00",
      "closed": "不定休",
      "note": "デイキャンプの利用時間。要予約"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Koitogawa-Fukuhashi.jpg?width=640",
      "credit": "Wikimedia Commons（小糸川下流部）"
    },
    "official": {
      "url": "https://www.city.kimitsu.lg.jp/site/kanko/2172.html",
      "label": "君津市公式"
    },
    "notes": "圏央道木更津東IC経由。有料施設で監視の目があり川遊びデビューでも安心。川遊び後の温水シャワー・足洗いが使える"
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
        "note": "湯本駅周辺は台数少なめ、休日午前中の到着推奨",
        "hours": "土日祝のみ・8:00開場（閉場時刻は要確認）"
      }
    ],
    "restaurants": [
      {
        "name": "箱根唐揚げ Karatto",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・湯本駅前商店街。店内犬同伴可"
      },
      {
        "name": "DogHub箱根",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・おにぎりカフェ＋ペットホテル複合施設。店内ワンコOK"
      },
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "河川敷自体は終日利用可"
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
        "note": "駐車場すぐ脇の河原で泳げる。8時台到着推奨",
        "hours": "8:00〜17:00"
      }
    ],
    "restaurants": [
      {
        "name": "CAFE MOJAVE",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・秋川駅近くのアメリカンダイナー。バーガーが名物・店内OK"
      },
      {
        "name": "米沢牛ステーキハウス un",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・ステーキハウス兼ドッグカフェ。犬用メニューあり"
      },
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "河原自体は終日利用可"
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
        "note": "トイレ完備。川まで徒歩数分",
        "hours": "7:00〜17:00（最終入庫16:30）"
      }
    ],
    "restaurants": [
      {
        "name": "阿里山Cafe",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "高麗駅近く。屋根付きウッドデッキのテラスが犬同伴可"
      },
      {
        "name": "CAWAZ base",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・高麗川沿いの古民家リノベカフェ。川辺散策も可"
      },
      {
        "name": "カフェ＆ベーカリー 日月堂",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・渓流を見下ろす薪窯パン＆ピザ"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "巾着田自体は終日散策可。曼珠沙華開花期は公園入場有料"
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
        "note": "52台。河原に直結。満車時は御岳交流センター駐車場（1日500円）",
        "hours": "24時間"
      }
    ],
    "restaurants": [
      {
        "name": "炭鳥筏 IKADA",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・炭火焼き鳥体験店。犬連れ専用スペース・犬用焼き鳥あり"
      },
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
      },
      {
        "name": "Riverside Cafe awa",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・川井の川沿いテラスカフェ。川原に直接下りられる"
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
    "notes": "遊歩道が整備され犬連れ散策と水遊びを両方楽しめる。夏休みは上流側の岩場が比較的空いている",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "渓谷・遊歩道は終日利用可"
    }
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
        "note": "約130台。川の近くまで乗り入れ可。営業4〜10月、8〜17時",
        "hours": "8:00〜17:00（営業日のみ）"
      }
    ],
    "restaurants": [
      {
        "name": "ジビエールカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・同じ原市場の川沿いドッグカフェ。猟師店主の鹿肉ワンコごはんあり"
      },
      {
        "name": "CARVAAN BREWERY & RESTAURANT 飯能本店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "飯能河原沿い。テラス40席が犬同伴可、予約時に事前連絡"
      },
      {
        "name": "COUNTRY CAFE ターニップ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約12分・上名栗のカントリーカフェ。要事前確認"
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
    },
    "hours": {
      "open": "8:00〜17:00",
      "closed": "平日休（GW・夏休みは無休）",
      "note": "営業4〜10月・日帰りのみ"
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
        "note": "夏の週末は午前9時頃満車になることも",
        "hours": "施設営業時間内が目安"
      }
    ],
    "restaurants": [
      {
        "name": "haz",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約25分・山北駅前のカフェ（15分圏内に犬OK店なし）"
      },
      {
        "name": "cafe だいず",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約25分・山北町市街のカフェ。店内同伴可"
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
    "notes": "水質・透明度は神奈川屈指。帰りに人間だけ交代で温泉入浴可（犬は不可）。犬の車内待機は温度に注意",
    "hours": {
      "open": "10:00〜18:00",
      "closed": "月曜定休（祝日は翌日）",
      "note": "8月は全日10:00〜20:00。温泉施設の時間＝駐車場利用の目安"
    }
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
        "note": "デイキャンプは予約不要、7〜17時。河原まですぐ",
        "hours": "7:00〜17:00"
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
    },
    "hours": {
      "open": "7:00〜17:00",
      "closed": null,
      "note": "デイキャンプは7:00〜17:00。年末年始休業"
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
        "note": "約300台。河原至近。営業3月下旬〜12月上旬、9〜16時",
        "hours": "9:00〜16:00"
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
    },
    "hours": {
      "open": "9:00〜16:00",
      "closed": null,
      "note": "通常営業3月下旬〜12月上旬。冬期は土日祝の予約営業のみ"
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
      },
      {
        "name": "マカロニ市場 三島店",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・ベーカリーイタリアン。大型犬まで店内OK"
      },
      {
        "name": "BARN COFFEE 静岡函南店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分・ロースターカフェ。全サイズOKのオープンエア席"
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
    "notes": "ホタル生息の清流のため排泄・シャンプー厳禁などマナー最重視。夏は子供連れで賑わうので早朝推奨",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "川沿いの水辺の道は終日散策可"
    }
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
        "note": "9:00〜17:00（17:00施錠のため退出厳守）",
        "hours": "9:00〜17:00（17時施錠）"
      }
    ],
    "restaurants": [
      {
        "name": "ビブラビブレ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・ピザ・パスタ・カレー。ワンコ専用屋内席＋ドッグラン併設"
      },
      {
        "name": "川の駅 伊豆城山 園内カフェ",
        "policy": "テラスのみ",
        "leadOK": null,
        "note": "ドッグラン併設施設内のカフェ。同伴条件は現地要確認"
      },
      {
        "name": "カフェ&バル 掌",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・伊豆長岡のカフェバル"
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
    },
    "hours": {
      "open": "9:00〜17:00",
      "closed": null,
      "note": "駐車場が17時施錠のため公園利用も実質この時間内"
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
        "note": "岩畳まで徒歩約5分",
        "hours": "要確認（日中のみとみられる）"
      },
      {
        "name": "タイムズ長瀞駅前",
        "fee": "60分400円〜",
        "note": "商店街・岩畳至近",
        "hours": "24時間"
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
      },
      {
        "name": "丹一",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約3分・そば・鮎飯。屋根付きテラスで雨天も犬連れOK"
      },
      {
        "name": "そば処 むらた",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約3分・商店街入口のそば店。テラス7〜8席がペット対応"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "岩畳自体は終日見学可"
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
        "note": "滝入口向かい。キャンプ場併設",
        "hours": "要確認（日中利用が目安）"
      }
    ],
    "restaurants": [
      {
        "name": "MAVERICK（中伊豆ワイナリー内）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分。ステーキ中心"
      },
      {
        "name": "黒玉テラス&Dog",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分・銘菓「出口の黒玉」直営カフェ。テラスはリードOK・伊豆牛カレー"
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
    "notes": "水温は夏でも低く冷却効果大。滝つぼ直下は遊泳不可だが下流親水エリアで水遊び可",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "滝の見学は終日可。隣接キャンプ場受付は10:00〜20:00・水木定休"
    }
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
        "note": "約130台。周辺道路は全面駐車禁止で取締り強化中、必ずここに駐車",
        "hours": "8:00〜16:00・7〜8月のみ"
      }
    ],
    "restaurants": [
      {
        "name": "いぬかふぇ まいら（鹿沼市街）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約25分のドッグカフェ。ドッグラン直結"
      },
      {
        "name": "Lake Wood Resort",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・アウトドアリゾート内カフェ。ドッグパーク併設"
      },
      {
        "name": "リッチフィールド",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約20分・ドッグラン併設カフェ。店内・テラスとも犬OK"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "岩・玉石の河原（川への階段は急）"
    },
    "notes": "夏休みの週末は混雑必至で午前中着推奨。BBQ・花火は指定区域のみ。標高低めなので朝夕か曇天日向き",
    "hours": {
      "open": "8:00〜16:00",
      "closed": null,
      "note": "7〜8月のみのシーズン営業"
    }
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
        "note": "施設内に複数区画",
        "hours": "10:00〜15:00（営業期間中のみ）"
      }
    ],
    "restaurants": [
      {
        "name": "ファーマーズヒル",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分。石窯ピザ。犬連れ実績あり"
      },
      {
        "name": "ほたるの庭",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・湯ヶ島R414沿いのカフェ＆バー。テラスペット同伴可"
      },
      {
        "name": "黒玉テラス&Dog",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・カフェ＋ランチ。テラスはリードOK・大型犬も可"
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
    },
    "hours": {
      "open": "10:00〜15:00",
      "closed": null,
      "note": "夏季のみ営業（例年7月中旬〜8月末）"
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
        "note": "台数多め。清流公園に直結",
        "hours": "24時間（トイレも24時間）"
      }
    ],
    "restaurants": [
      {
        "name": "GRILL&BAR The Campfire MINAKAMI",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・グリル＆バー。店内に犬同伴区画あり・大型犬OK"
      },
      {
        "name": "大トロ牛乳",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・名物スイーツ店。サイズ制限なく店内OK"
      },
      {
        "name": "育風堂精肉店（はもん みなかみ）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約8分。各テーブルにリードフック完備、ペット用食器あり。生ハムが名物"
      },
      {
        "name": "DDC minakami",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・利根川沿いコーヒー＆軽食。犬用フードあり"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園・遊歩道は終日利用可。水紀行館は9:00〜17:00"
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
        "note": "汐見滝吊り橋まで徒歩約15分",
        "hours": "通常期は終日開放（紅葉まつり期間のみ有料・9〜16時目安）"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "渓谷自体は終日散策可"
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
        "note": "駐車場からすぐで川遊び可。台数少なめで夏休みは早着推奨",
        "hours": "7:00〜18:00（18時までに要出庫）"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "渓谷・河原自体は終日利用可"
    }
  },
  {
    "id": "yanagishima-kaigan",
    "name": "柳島海岸（相模川河口東側）",
    "category": "sea",
    "area": "神奈川県茅ヶ崎市",
    "lat": 35.317,
    "lng": 139.3765,
    "elevation_m": 3,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "サザンビーチ（海水浴場）の区域外のため夏期も犬の水遊び可。市はリード着用・フン持ち帰りを条件に犬同伴を容認。外海は波・離岸流ありライフジャケット推奨。河口寄りは流れに注意"
    },
    "parking": [
      {
        "name": "柳島スポーツ公園駐車場",
        "fee": "60分200円（当日最大 平日600円・土日祝900円）",
        "hours": "6:00〜22:15",
        "note": "海岸まで徒歩約5分。満車時は臨時開放あり"
      }
    ],
    "restaurants": [
      {
        "name": "TREX CHIGASAKI OCEAN CAFE",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約3分。敷地内に有料ドッグラン併設。店内可否は要確認"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜＋石積み護岸（約700m）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "実質、駐車場の6:00〜22:15に制約される"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Yanagishima,%20Chigasaki,%20Kanagawa%20Prefecture%20253-0064,%20Japan%20-%20panoramio.jpg?width=640",
      "credit": "運転太郎 / CC BY 3.0"
    },
    "official": {
      "url": "https://www.city.chigasaki.kanagawa.jp/kouen/1006491/1015429.html",
      "label": "茅ヶ崎市公式"
    },
    "notes": "湘南で通年犬連れできる貴重な浜。釣り人・サーファー中心の静かな環境。柳島しおさい公園とセットで"
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
        "note": "たたら浜へは第4・5駐車場が近い。夏の週末は午前中に満車になりやすい",
        "hours": "5:00〜19:00（第4は8:00〜17:00、7-8月は〜18:00）"
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
      },
      {
        "name": "かねよ食堂",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・走水海岸の漁師小屋改装シーフード食堂。海辺のテラス&ガーデン席が犬OK・月曜定休"
      },
      {
        "name": "Guna cafe' base",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・走水の古民家カフェ。犬用クッキーあり・木〜日営業"
      },
      {
        "name": "エルマール（浦賀）",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・浦賀の渡し船乗り場横。2階テラスが犬OK（階段を抱えられれば大型犬も可）"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "自然海岸のため入場自由。海水浴場としての開設はなし（遊泳は自己責任）"
    }
  },
  {
    "id": "futtsu-misaki",
    "name": "富津岬（県立富津公園の砂浜）",
    "category": "sea",
    "area": "千葉県富津市",
    "lat": 35.3125,
    "lng": 139.7833,
    "elevation_m": 2,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "海水浴場指定外のためペット規制なし。リード着用で犬散歩OK（犬連れ実績多数）。内湾側（北側）は遠浅で波静か。岬先端の外洋側は潮流が速いため入水は内湾側で"
    },
    "parking": [
      {
        "name": "富津公園第3駐車場（展望塔至近）",
        "fee": "無料",
        "hours": "終日",
        "note": "約100台。園内に他の無料駐車場もあり"
      }
    ],
    "restaurants": [
      {
        "name": "DOG DEPT GARDEN CAFE 木更津",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約30分・木更津金田。ドッグラン併設・木曜定休"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "砂浜（背後に松林の木陰あり）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "明治百年記念展望塔は通年無休・無料"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Cape%20Futtsu%2001.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.futtsu-kanko.info/",
      "label": "富津市観光協会"
    },
    "notes": "アクアライン→木更津南IC経由。真夏は砂が熱くなるため朝夕推奨。波音が苦手な犬は内湾側から慣らすのが吉"
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
        "note": "有料期間の営業7:00〜18:00",
        "hours": "有料期間は7:00〜18:00（期間外は閉鎖）"
      },
      {
        "name": "長浜駐車場（横須賀市側）",
        "fee": "同上",
        "note": "浜まで徒歩すぐ",
        "hours": "有料期間7:00〜18:00・期間外は24時間無料"
      }
    ],
    "restaurants": [
      {
        "name": "AnL cafe",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約7分・三崎口駅近くの手作りケーキのドッグカフェ。犬用クッキーあり・水木定休"
      },
      {
        "name": "三崎港 海の幸",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約12分・三崎港のマグロ・海鮮料理店。2階席のみ犬同伴OK"
      },
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
      },
      {
        "name": "カメハメハ大王の渚",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約8分・諸磯の海沿いレストラン。犬用水皿サービスあり"
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
    "notes": "透明度が高い遠浅ビーチで泳ぎ好きの中型犬に好適。塩抜き用の真水を多めに",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "自然海岸で入場自由。2026年海水浴場開設: 7月上旬〜8/31"
    }
  },
  {
    "id": "koyurugi-beach",
    "name": "こゆるぎの浜（大磯港西側）",
    "category": "sea",
    "area": "神奈川県大磯町",
    "lat": 35.3053,
    "lng": 139.3067,
    "elevation_m": 2,
    "driveMin": 75,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "海水浴場ではないため夏期も犬同伴・波打ち際の水遊び可（浜歩き実績多数）。ショアブレイクが強い日があるため沖へは泳がせず波打ち際中心に。ロングリード＋ライフジャケット推奨"
    },
    "parking": [
      {
        "name": "大磯港第1・第2駐車場",
        "fee": "310円/時間",
        "hours": "終日",
        "note": "電子決済可。浜へは港西側からすぐ"
      }
    ],
    "restaurants": [
      {
        "name": "OISO CONNECT",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "徒歩すぐ。地魚グルメを海を見ながらテラスで"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "さざれ石（小石）＋砂の混合浜"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": ""
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Terugasaki%20Coast%20-%20Oiso%20Kanagawa%202026%20March%2014%20various%201.jpg?width=640",
      "credit": "Nesnad / CC BY 4.0（隣接の照ヶ崎海岸）"
    },
    "official": {
      "url": "https://www.town.oiso.kanagawa.jp/isotabi/index.html",
      "label": "大磯町観光情報"
    },
    "notes": "夏でも海水浴客がほぼいない静かな石浜。小石浜なので肉球の火傷は砂浜より軽度だが日中は避け朝夕推奨。夏期NGの大磯北浜海岸と間違えないこと"
  },
  {
    "id": "ryujima-kaigan",
    "name": "竜島海岸（勝山）",
    "category": "sea",
    "area": "千葉県鋸南町",
    "lat": 35.115,
    "lng": 139.8265,
    "elevation_m": 3,
    "driveMin": 85,
    "water": {
      "allowed": true,
      "depth": "泳げる深さあり",
      "note": "地元SUPスクールが夏期含め通年「DOG SUP」を開催しており犬の海泳ぎが公認されている浜。湾が浮島に守られ波が非常に穏やか。夏の海水浴場開設時は遊泳区域の外側で"
    },
    "parking": [
      {
        "name": "竜島海岸駐車場",
        "fee": "無料",
        "hours": "終日",
        "note": "海水浴シーズンは混雑・有料化の場合あり。早めの到着推奨"
      }
    ],
    "restaurants": [
      {
        "name": "道の駅 保田小学校",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分。ペットOKテラス・無料ドッグラン・足洗い場あり"
      },
      {
        "name": "Pizza GONZO（金谷）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分。2階席がペット同伴可（要事前予約推奨）"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜＋小石混じり（マリンシューズ推奨）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "DOG SUP体験は要予約（犬は30kg以下）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Uki-Island%20Kyonan%20town.JPG?width=640",
      "credit": "Wikimedia Commons（竜島海岸沖の浮島）"
    },
    "official": {
      "url": "https://south-surf.com/",
      "label": "UMI to YAMA公式"
    },
    "notes": "鋸南勝山ICから約5分。泳ぎ好きコーギー向きの内房本命スポット。日陰がほぼ無いのでタープ持参推奨"
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
        "note": "ビーチまで徒歩数分。夏期は早めの到着推奨",
        "hours": "24時間利用可（プール期間の日中は1回1,000円）"
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
        "name": "豆杏cafe",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・ドッグラン併設カフェ。マナーウェア着用で店内OK（小中型犬）・要事前予約"
      },
      {
        "name": "福浦漁港 みなと食堂",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "漁港直送の海鮮。テラス席のみ犬OK"
      },
      {
        "name": "和食うおたつ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・魚屋直営の海鮮和食。大型犬も可（雨天時不可）・火水定休"
      },
      {
        "name": "しあわせ中華そば食堂 にこり",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約7分・飯田商店姉妹店のラーメン。火水定休"
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
    },
    "hours": {
      "open": "8:30〜17:00",
      "closed": null,
      "note": "海水浴場開設期間のみ（例年7月中旬〜8/31）。期間外の浜は終日立入可"
    }
  },
  {
    "id": "tsurigasaki-beach",
    "name": "釣ヶ崎海岸（志田下）",
    "category": "sea",
    "area": "千葉県一宮町",
    "lat": 35.3437,
    "lng": 140.3925,
    "elevation_m": 3,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "海水浴場として開設されないサーフィンビーチのため夏期の遊泳区域規制がなく、通年リードで砂浜・波打ち際遊びOK。波が高くサーファーが多いので犬の遊泳は波打ち際まで"
    },
    "parking": [
      {
        "name": "釣ヶ崎海岸 無料駐車場",
        "fee": "無料",
        "hours": "終日",
        "note": "大型駐車場。トイレ・シャワーあり。大会開催日は規制あり"
      }
    ],
    "restaurants": [
      {
        "name": "エリアスガーデン",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車1分・海岸の目の前。犬同伴BBQ・ドッグラン・ドッグプール併設"
      },
      {
        "name": "CROCE",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車10分・一宮市街のカフェ"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜＋海岸沿いに舗装遊歩道"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "サーフィン大会開催時は一部立入規制"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tsurigasaki%20Surfing%20Beach.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://ichinomiya.org/",
      "label": "一宮町観光協会"
    },
    "notes": "東京2020サーフィン会場。東浪見の鳥居が立つ絶景ビーチ。市原鶴舞IC経由で外房最短クラス"
  },
  {
    "id": "ichinomiya-beach",
    "name": "一宮海岸",
    "category": "sea",
    "area": "千葉県一宮町",
    "lat": 35.3733,
    "lng": 140.3966,
    "elevation_m": 3,
    "driveMin": 90,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "リードで砂浜同伴OK・ペット連れに寛容。海水浴場開設期間（7月中旬〜8月中旬）の遊泳区域内は避け、区域外の波打ち際で。波はやや高めなので深追い禁物"
    },
    "parking": [
      {
        "name": "一宮海岸駐車場",
        "fee": "無料（開設期間は協力金の場合あり）",
        "hours": "終日",
        "note": "トイレ・シャワーは開設期間中利用可"
      }
    ],
    "restaurants": [
      {
        "name": "CROCE",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車5分。犬連れテラスでモーニング〜ランチ"
      },
      {
        "name": "エリアスガーデン",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車8分。犬同伴BBQ・ドッグプール"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "幅30m×長さ350mの砂浜。堤防沿いに散歩道あり"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "海水浴場開設は例年7月中旬〜8月中旬"
    },
    "official": {
      "url": "https://ichinomiya.org/spot/017/",
      "label": "一宮町観光協会"
    },
    "notes": "日本の渚百選。7-8月は運用が変わりうるため南隣の釣ヶ崎・太東を優先するのが無難"
  },
  {
    "id": "taito-beach",
    "name": "太東海岸（太東ビーチ）",
    "category": "sea",
    "area": "千葉県いすみ市",
    "lat": 35.3106,
    "lng": 140.403,
    "elevation_m": 2,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "リードで砂浜・浅瀬の水遊びOK。太東岬に守られ外房では波が穏やかで犬の水遊びに最も向く。夏期に海水浴場が開設される年は遊泳区域外で"
    },
    "parking": [
      {
        "name": "太東海岸 無料駐車場",
        "fee": "無料（開設期間は有料の場合あり）",
        "hours": "終日",
        "note": "広め。トイレ・シャワーあり"
      }
    ],
    "restaurants": [
      {
        "name": "CAFEビゼン",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車10分・いすみ市のカフェ。モーニング・ランチあり"
      },
      {
        "name": "エリアスガーデン",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車8分。犬同伴BBQ・ドッグプール"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "コンパクトで歩きやすい砂浜、ヤシの木あり"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "海水浴場開設時期はいすみ市の年度発表を確認"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/%E5%A4%AA%E6%9D%B1%E6%B5%B7%E6%B5%9C%E6%A4%8D%E7%89%A9%E7%BE%A4%E8%90%BD%E3%81%8B%E3%82%89%E3%81%AE%E9%A2%A8%E6%99%AF20190618-IMG%205203.jpg?width=640",
      "credit": "Wikimedia Commons / CC BY-SA"
    },
    "official": {
      "url": "https://www.city.isumi.lg.jp/soshikikarasagasu/suisanshokoka/kankopromotionhan/2/1/795.html",
      "label": "いすみ市公式"
    },
    "notes": "九十九里浜最南端。波穏やか・駐車無料で、泳ぎ好きコーギーの水遊びには外房で第一候補"
  },
  {
    "id": "katakai-beach",
    "name": "片貝海岸（片貝中央海岸）",
    "category": "sea",
    "area": "千葉県九十九里町",
    "lat": 35.5286,
    "lng": 140.4437,
    "elevation_m": 2,
    "driveMin": 105,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "リード着用で砂浜同伴OK（犬が海で遊ぶ実績多数）。海水浴場開設期間の遊泳区域内は犬の遊泳不可、夏は区域の外側で波打ち際遊びを。平坦で歩きやすい砂"
    },
    "parking": [
      {
        "name": "片貝海岸 町営駐車場",
        "fee": "開設期間500円程度・期間外無料",
        "hours": "終日（開設期間中は管理時間あり）",
        "note": "約1,250台と県内屈指の規模"
      }
    ],
    "restaurants": [
      {
        "name": "海の駅九十九里",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車3分・片貝漁港直結。2階の一部テラスが同伴可・イワシ料理"
      },
      {
        "name": "九十九里ハーブガーデン ラ・パニエ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車5分。テラスにリードフック・利用で芝ドッグラン無料"
      },
      {
        "name": "海鮮料理 大漁亭",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車7分。店内犬連れOKの大型海鮮レストラン"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "広く平坦な砂浜。駐車場から浜まで近い"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "海水浴場開設は例年7〜8月"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Kujukuri%20beach.jpg?width=640",
      "credit": "Syced / Wikimedia Commons"
    },
    "official": {
      "url": "https://maruchiba.jp/spot/detail_10660.html",
      "label": "ちば観光ナビ"
    },
    "notes": "九十九里浜中央部・犬連れ利用の代表格。隣の不動堂海岸も犬同伴OKで混雑回避の代替に"
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
        "note": "約400台。夏は早朝に満車必至。水道なしのため犬の足洗い用の水持参",
        "hours": "時間指定なし（無料・夏期は環境保全協力金あり）"
      }
    ],
    "restaurants": [
      {
        "name": "CARO FORESTA 館山DIANA",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・犬用宿併設レストラン。日帰りランチ可・利用でドッグラン無料"
      },
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
      },
      {
        "name": "館山なぎさ食堂",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・渚の駅たてやま2F。館山港を望むテラスが犬OK・海鮮丼"
      },
      {
        "name": "カフェデルマ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分・北条海岸のビーチカフェ。公式にテラスペットOK明記"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園・島への立入は自由。海水浴場開設は2026年7/18〜8/23・遊泳9:00〜16:00。島内にトイレなし"
    }
  },
  {
    "id": "motosuka-beach",
    "name": "本須賀海岸",
    "category": "sea",
    "area": "千葉県山武市",
    "lat": 35.5519,
    "lng": 140.4727,
    "elevation_m": 3,
    "driveMin": 110,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心",
      "note": "リード着用で砂浜・波打ち際OK。夏期の遊泳区域内は避け区域外の波打ち際で。犬連れ専用海の家「ASOBEACH」（7月上旬〜8月末・冷房付き屋内ドッグラン・シャワー完備）があり夏の犬連れ実績が厚い。ショアブレイクがあるため腰高までが安全"
    },
    "parking": [
      {
        "name": "本須賀海岸 市営駐車場",
        "fee": "開設期間500円/回・期間外無料",
        "hours": "5:00〜21:00（開設期間中）",
        "note": "約1,000台。トイレ・シャワーあり"
      }
    ],
    "restaurants": [
      {
        "name": "ASOBEACH -愛犬と過ごす海の家-",
        "policy": "店内OK",
        "leadOK": true,
        "note": "浜の上（徒歩0分）・夏期のみ。屋内ドッグラン付きプランあり・要予約"
      },
      {
        "name": "浜茶屋 網元",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・浜焼き。わんこ連れ専用エリアあり"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜（ヤシ並木）。夏は砂が高温になるため朝夕推奨"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "海水浴場開設は例年7月中旬〜8月下旬"
    },
    "official": {
      "url": "https://sammukanko.jp/attraction/123/",
      "label": "山武市観光協会"
    },
    "notes": "ブルーフラッグ認証ビーチ。犬連れ向け設備が九十九里で最も充実。圏央道・山武成東IC経由"
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
        "note": "約200台。浜のすぐ裏。有料シャワー500円あり",
        "hours": "要確認（夏期1日2,000円〜）"
      }
    ],
    "restaurants": [
      {
        "name": "Two Tails' cafe（下田プリンスホテル内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約4分・白浜海岸前のホテル内カフェ。犬用メニューあり・宿泊者以外も利用可"
      },
      {
        "name": "フラム ジャック",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・ペリーロードの洋食カフェ。不定休のため事前連絡推奨"
      },
      {
        "name": "ギャラリー&カフェ 草画房",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・ペリーロードの古民家カフェ。土間・縁側席で同伴可（要事前予約）"
      },
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "自然海岸で入場自由。海水浴場開設は2026年7/18〜8/23・遊泳8:00〜16:00"
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
        "note": "約110台。温水シャワー通年あり。夏休みは早朝満車注意",
        "hours": "要確認（夏期の日中営業が基本）"
      }
    ],
    "restaurants": [
      {
        "name": "South Cafe",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約4分・吉佐美のハワイアン系カフェ。全席ワンコOK・大型犬まで可・木曜定休"
      },
      {
        "name": "フラム ジャック",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約8分・ペリーロードの洋食カフェ。不定休のため事前連絡推奨"
      },
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
      },
      {
        "name": "Fermenco",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約3分・入田浜そばのピッツァ&ワイン。駐車場3台"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "浜自体は終日出入り可。海水浴場開設期間は例年7月中旬〜8月下旬、監視は8:00〜16:00"
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
        "note": "約10台。満車時は山中湖交流プラザきらら駐車場（300円）が徒歩圏",
        "hours": "24時間"
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
      },
      {
        "name": "煮込みシチューの店 Casserole",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・シチュー専門店。大型犬も店内OK・犬用メニューあり"
      },
      {
        "name": "NICO CAFE",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約4分・イタリアン。完全予約制で他の犬が苦手でも安心・犬用ケーキ可"
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
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "自然湖畔の浜で時間制限なし"
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
        "note": "湖畔まで徒歩すぐ。デイ利用可（湖畔利用料あり・要確認）",
        "hours": "9:00〜19:00目安・要事前電話連絡"
      }
    ],
    "restaurants": [
      {
        "name": "水明荘 売店・軽食カフェ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "湖畔テラスで軽食"
      },
      {
        "name": "湖畔cafe NATIVE GARDEN+",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "湖畔すぐ（龍雲荘側）。ペット可の湖畔テラス・SUP併設・火曜定休（季節変動あり）"
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
    },
    "hours": {
      "open": "9:00〜19:00",
      "closed": "不定休",
      "note": "水明荘は完全予約制（電話のみ・受付9〜13時/15〜19時）"
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
        "note": "湖を一周する道路沿いに複数あり",
        "hours": "24時間"
      }
    ],
    "restaurants": [
      {
        "name": "ながお亭",
        "policy": "店内OK",
        "leadOK": true,
        "note": "湖畔の定食屋。ペットと店内で食事可の実績あり。ワカサギフライが名物"
      },
      {
        "name": "Cafe 水月",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約2分・榛名湖畔。湖を望むテラスがペットOK・ジェラートが人気"
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
    "notes": "標高1,084mで夏も涼しい。犬連れOKの榛名神社と組み合わせた定番コース",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "県立榛名公園内の自然湖で見学自由"
    }
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
        "note": "湖岸に直結。紅葉期は早朝から混雑",
        "hours": "24時間入出庫可（6時間まで500円）"
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
      },
      {
        "name": "欧州浪漫館 シェ・ホシノ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・湖畔の老舗欧風料理。木曜定休・要予約推奨"
      },
      {
        "name": "レストラン メープル",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約5分・洋食店。パラソル付きテラス4席が犬OK・4〜11月営業"
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
    "notes": "標高1,269mの避暑地で真夏でも25℃前後。犬同伴OKのスワンボートやイタリア大使館別荘記念公園の散策も組み合わせ可",
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "湖畔自体は終日出入り可。県営駐車場は2025年4月から有料化"
    }
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
        "note": "営業は4月下旬〜10月20日頃",
        "hours": "日帰り受付8:00〜17:00内"
      }
    ],
    "restaurants": [
      {
        "name": "農家レストラン みのりの里",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約30分・R120沿いの農家直営。テラスがペット可・月曜定休（近隣に他店なし）"
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
    },
    "hours": {
      "open": "8:00〜17:00",
      "closed": null,
      "note": "季節営業（2026年は4/24〜10/20、期間内無休）"
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
        "note": "台数少なめ。近隣コインパーキング複数あり。第三京浜都筑ICから約5分",
        "hours": "営業時間内（10:00〜17:00）・400円"
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
      },
      {
        "name": "chou2clair",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・センター南のドッグカフェ。全席犬同伴OK・犬用メニューあり"
      },
      {
        "name": "FRESCO",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約7分・仲町台せせらぎ公園隣接のイタリアン。ウッドデッキ27席が犬OK"
      }
    ],
    "surface": {
      "shade": "普通",
      "ground": "土・人工芝のドッグラン"
    },
    "notes": "川崎から最も近い水遊び先で猛暑日の短時間利用に最適。営業10:00〜17:00・水曜定休。プール開催日はInstagramで要確認",
    "hours": {
      "open": "10:00〜17:00",
      "closed": "第3水曜定休",
      "note": "プール開催日はInstagramで要確認"
    }
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
        "note": "約50台完備",
        "hours": "営業時間内（9:00〜19:00）"
      }
    ],
    "restaurants": [
      {
        "name": "DOG ONE レストラン（併設）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "愛犬用メニューあり"
      },
      {
        "name": "ドッグカフェ BUBU'S PAW",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・ドッグスクール併設。アジリティ付きラン併設・月水定休"
      },
      {
        "name": "マカロニ市場 松戸店",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・ベーカリーイタリアン。冷暖房完備の屋内わんちゃん専用ルームあり"
      },
      {
        "name": "しろいぬカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・全席犬OK・サイズ制限なし。無料ドッグラン併設・年中無休"
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
    },
    "hours": {
      "open": "9:00〜19:00",
      "closed": null,
      "note": "レストラン10:00〜19:00。不定休の情報もありInstagramで最新確認推奨"
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
        "note": "12台。利用料は季節により1,000〜2,500円程度、水曜定休",
        "hours": "営業時間内"
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
        "name": "Dessert&Cafe BlueMoon",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・津久井浜R134沿い。店内一部＋テラスが犬OK（リード着用）"
      },
      {
        "name": "ドッグカフェわんこじゃん三浦海岸",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・松輪のドッグカフェ（2025年開店）"
      },
      {
        "name": "BEACHEND CAFE",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約10分"
      },
      {
        "name": "Bayside Cafe",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約8分・三浦海岸を望むカフェ"
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
    },
    "hours": {
      "open": "9:30〜17:30",
      "closed": "水曜定休",
      "note": "夏期（4〜10月）9:30〜17:30／冬期10:00〜16:00・年末年始休"
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
        "hours": "営業時間内（17時以降入園は駐車無料）",
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
      },
      {
        "name": "CAFE MOJAVE",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約6分・秋川駅近くのハンバーガーカフェ。全席ワンコOK（大型犬も可）"
      },
      {
        "name": "米沢牛ステーキハウス un",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・店内・ガーデンとも犬OK。犬用ステーキあり・水曜定休"
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
    },
    "hours": {
      "open": "10:00〜20:00",
      "closed": "水曜休園",
      "note": "夏の夜間営業期間（2026/7/24〜8/31）は〜20:00。通常期は〜17:00前後。お盆の水曜は営業"
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
        "note": "ドッグラン利用者用区画あり",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [
      {
        "name": "併設カフェ（七つ星カフェ）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "松田町産の旬野菜料理と犬用メニューあり"
      },
      {
        "name": "kent crew",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・大井松田IC近くの犬複合施設内カフェ。ドッグラン/プール併設・犬用鹿肉ハンバーグあり"
      },
      {
        "name": "haz",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約20分・山北駅前のカフェ"
      },
      {
        "name": "BIOTOPIA Café Saint-Jacques",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約20分・大井町BIOTOPIA内のカジュアルフレンチ。敷地内にドッグランあり"
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
    },
    "hours": {
      "open": "9:00〜17:00",
      "closed": "火曜定休",
      "note": "3〜9月は〜17:00（受付16:30）、10〜2月は〜16:00。火曜祝日は営業。最新情報はX/Instagram（@yadogrun）"
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
        "note": "郊外型店舗",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [
      {
        "name": "FETCH! 併設ドッグカフェ",
        "policy": "店内OK",
        "leadOK": true,
        "note": "ドッグカフェ一体型施設のため店内同伴可"
      },
      {
        "name": "和カフェ 夢宇",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約15分・喜多院近く。冷暖房完備の犬連れ専用スペースで大型犬OK・犬用米粉ワッフルあり"
      },
      {
        "name": "コエド ボナペティ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約15分・築130年古民家の洋食。屋根付きテラスで大型犬もOK"
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
    },
    "hours": {
      "open": "10:00〜18:00",
      "closed": "水・木曜定休",
      "note": "定休日が祝日の場合は営業"
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
        "note": "大規模駐車場あり。宿泊者は無料",
        "hours": "日帰り営業時間内"
      }
    ],
    "restaurants": [
      {
        "name": "施設内レストラン（ワンズガーデン等）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "リゾート内レストランは愛犬同伴可。犬用メニューあり"
      },
      {
        "name": "クチーナ・トキオネーゼ・コジマ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約12分・本格イタリアン。テラスOK・ドッグラン無料・日曜定休"
      },
      {
        "name": "プレールカフェ",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "車約12分・農園カフェ。エアコン完備の屋内型テラスで雨天も安心・犬用メニューあり"
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
    },
    "hours": {
      "open": "9:00〜21:00",
      "closed": null,
      "note": "ドッグランは原則年中無休。貸切ドッグランは9:00〜17:00"
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
        "note": "敷地内駐車場あり",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [
      {
        "name": "Woof カフェ&レストラン（館内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "犬同伴可のドッグカフェ・レストラン併設。犬用メニューあり"
      },
      {
        "name": "Dogs Garden WILDPARK",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約6分・花の都公園裏のドッグカフェ。森のドッグラン併設・火水定休"
      },
      {
        "name": "ほうとう さんさい",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約5分・ほうとう。別棟の店内わんこ席は大型犬OK"
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
    },
    "hours": {
      "open": "8:00〜18:00",
      "closed": null,
      "note": "ドッグラン8:00〜18:00、屋内温水プール9:00〜17:00。メンテナンス休館あり（要事前確認）。屋外プールは5〜10月のみ"
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
        "note": "10:00〜18:00利用可",
        "hours": "10:00〜18:00"
      }
    ],
    "restaurants": [
      {
        "name": "併設カフェ（愛犬の駅内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "店内・テラスとも犬同伴OK。犬用メニューあり"
      },
      {
        "name": "和食だワン",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・和食（犬メニューあり）。大型犬可・各席リードフック・ドッグラン併設"
      },
      {
        "name": "福茶's curry",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約3分・ログハウス系スパイスカレー。全サイズOK・芝ドッグラン併設"
      },
      {
        "name": "Cafe CANDY",
        "policy": "店内OK",
        "leadOK": true,
        "note": "車約10分・城ヶ崎海岸エリアのドッグカフェ。犬メニュー豊富・水木定休"
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
    },
    "hours": {
      "open": "10:00〜18:00",
      "closed": null,
      "note": "ドッグラン最終受付17:30、カフェ〜17:00（LO16:00）。メンテナンス臨時休業あり"
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
    "name": "由比ヶ浜・材木座海水浴場",
    "area": "神奈川県鎌倉市",
    "reason": "海水浴場開設期間（7-8月）は犬の入水不可。砂浜の散歩のみ可",
    "type": "夏期NG"
  },
  {
    "name": "片瀬東浜・片瀬西浜鵠沼海水浴場",
    "area": "神奈川県藤沢市",
    "reason": "海水浴場開設期間（7-8月）は犬の入水不可",
    "type": "夏期NG"
  },
  {
    "name": "辻堂海岸",
    "area": "神奈川県藤沢市",
    "reason": "夏期は混雑し、犬の入水可否の公式根拠が確認できず",
    "type": "不明"
  },
  {
    "name": "逗子海岸",
    "area": "神奈川県逗子市",
    "reason": "条例により開場時間中の海水浴場区域内は犬の持込自体が禁止",
    "type": "夏期NG"
  },
  {
    "name": "森戸・一色・長者ヶ崎海岸",
    "area": "神奈川県葉山町",
    "reason": "オフシーズンは犬連れ定番だが、海水浴場開設期間（7/1-8/31）は犬の入水禁止",
    "type": "夏期NG"
  },
  {
    "name": "サザンビーチちがさき",
    "area": "神奈川県茅ヶ崎市",
    "reason": "夏期は海水浴場開設のため犬の入水不可（西側の柳島海岸へ）",
    "type": "夏期NG"
  },
  {
    "name": "湘南ひらつかビーチパーク",
    "area": "神奈川県平塚市",
    "reason": "公衆衛生・安全のためペットの入水禁止と市公式に明記（通年）",
    "type": "入水禁止"
  },
  {
    "name": "大磯北浜海岸（大磯海水浴場）",
    "area": "神奈川県大磯町",
    "reason": "開設期間（7月中旬-8/31）は犬の入水不可（西側のこゆるぎの浜へ）",
    "type": "夏期NG"
  },
  {
    "name": "濃溝の滝・亀岩の洞窟",
    "area": "千葉県君津市",
    "reason": "リード散歩は可だが、ペットの川遊び（入水）は禁止",
    "type": "入水禁止"
  },
  {
    "name": "富津海岸潮干狩場",
    "area": "千葉県富津市",
    "reason": "犬同伴潮干狩りの実績はあるが営業は3〜7月で8月は閉場",
    "type": "夏期NG"
  },
  {
    "name": "江川海岸・久津間海岸",
    "area": "千葉県木更津市",
    "reason": "潮干狩り場で夏期は営業なし。犬同伴可否の公式記載も確認できず",
    "type": "不明"
  },
  {
    "name": "上総湊海水浴場",
    "area": "千葉県富津市",
    "reason": "条件は良いが犬入水OKの実績・公式明記が確認できず（市商工観光課に要確認）",
    "type": "不明"
  },
  {
    "name": "新舞子海岸",
    "area": "千葉県富津市",
    "reason": "犬連れ可否の一次情報が確認できず。隣接のDOG POOL VILLAGE富津海岸利用なら確実",
    "type": "不明"
  },
  {
    "name": "保田海岸・元名海岸",
    "area": "千葉県鋸南町",
    "reason": "海水浴場開設期間（7-8月）の犬入水可否が確認できず",
    "type": "不明"
  },
  {
    "name": "大原海岸",
    "area": "千葉県いすみ市",
    "reason": "犬同伴可否の一次情報・実績が確認できず。確認が取れるまで非推奨",
    "type": "不明"
  },
  {
    "name": "不動堂海岸",
    "area": "千葉県九十九里町",
    "reason": "犬同伴はOKだが駐車場情報が確認できず。片貝海岸の代替として利用可",
    "type": "不明"
  }
];
