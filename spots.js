/* スポットデータ（2026年8月調査）
   掲載基準: 犬の入水OK / 駐車場あり / 犬連れ飲食店 / 日陰・路面環境
   official: 一次情報リンク ／ hours: 営業時間 ／ restaurants: RESTAURANTSへのref参照（併設店はインライン）
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
      {"ref": "r156", "note": "車約8分・全天候インナーテラスのアルゼンチン料理カフェ"},
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
        "ref": "r002",
        "note": "車約10分・愛川町のログハウス洋食。店内・テラスとも犬同伴可"
      },
      {
        "ref": "r003",
        "note": "車約10分・愛川町のカフェ・和食。店内とテラスで同伴可"
      },
      {
        "ref": "r004",
        "note": "車約15分・清川村の定食食堂。別棟店内とテラスで同伴可・清川恵水ポークが名物"
      },
      {
        "ref": "r005",
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
        "ref": "r006",
        "note": "車約15分・松田町のドッグカフェ。ドッグラン併設・犬用メニューあり"
      },
      {
        "ref": "r007",
        "note": "秦野市内。ペット同伴OKのテラス席は3席程度と少なめ"
      },
      {
        "ref": "r008",
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
        "ref": "r009",
        "note": "車約10分・青梅市和田町のカフェ＆雑貨。店内同伴可（マナーパンツ推奨）"
      },
      {
        "ref": "r010",
        "note": "車約15分・青梅IC近くのドッグカフェ。屋内席OKで雨の日も安心"
      },
      {
        "ref": "r011",
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
        "ref": "r012",
        "note": "車約15分。屋外ベンチで名物あげぱん可"
      },
      {
        "ref": "r013",
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
      {"ref": "r140", "note": "車約25分。庭ノーリード可・夏は犬用プールも"},
      {
        "ref": "r014",
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
      {"ref": "r144", "note": "車約15分・小田原かまぼこ通り。犬用ジェラートあり"},
      {
        "ref": "r015",
        "note": "車約3分・湯本駅前商店街。店内犬同伴可"
      },
      {
        "ref": "r016",
        "note": "車約5分・おにぎりカフェ＋ペットホテル複合施設。店内ワンコOK"
      },
      {
        "ref": "r017",
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
        "ref": "r018",
        "note": "車約15分・秋川駅近くのアメリカンダイナー。バーガーが名物・店内OK"
      },
      {
        "ref": "r019",
        "note": "車約15分・ステーキハウス兼ドッグカフェ。犬用メニューあり"
      },
      {
        "ref": "r020",
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
        "ref": "r021",
        "note": "高麗駅近く。屋根付きウッドデッキのテラスが犬同伴可"
      },
      {
        "ref": "r022",
        "note": "車約10分・高麗川沿いの古民家リノベカフェ。川辺散策も可"
      },
      {
        "ref": "r023",
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
      {"ref": "r151", "note": "御嶽駅徒歩8分・渓谷を見下ろすテラス"},
      {
        "ref": "r024",
        "note": "車約3分・炭火焼き鳥体験店。犬連れ専用スペース・犬用焼き鳥あり"
      },
      {
        "ref": "r025",
        "note": "多摩川を見下ろすデッキ席。看板犬あり"
      },
      {
        "ref": "r026",
        "note": "遊歩道で行ける酒蔵の庭園。屋外席は犬OK"
      },
      {
        "ref": "r027",
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
        "ref": "r028",
        "note": "車約5分・同じ原市場の川沿いドッグカフェ。猟師店主の鹿肉ワンコごはんあり"
      },
      {
        "ref": "r029",
        "note": "飯能河原沿い。テラス40席が犬同伴可、予約時に事前連絡"
      },
      {
        "ref": "r030",
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
        "ref": "r031",
        "note": "車約25分・山北駅前のカフェ（15分圏内に犬OK店なし）"
      },
      {
        "ref": "r032",
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
    "restaurants": [],
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
      {"ref": "r146", "note": "車約15分・沼津港。犬は1階＋テラス"},
      {
        "ref": "r034",
        "note": "柿田川公園そば（車約10分）。看板犬のいるドッグカフェ"
      },
      {
        "ref": "r035",
        "note": "車約10分・ベーカリーイタリアン。大型犬まで店内OK"
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
        "ref": "r037",
        "note": "車約10分・ピザ・パスタ・カレー。ワンコ専用屋内席＋ドッグラン併設"
      },
      {
        "name": "川の駅 伊豆城山 園内カフェ",
        "policy": "テラスのみ",
        "leadOK": null,
        "note": "ドッグラン併設施設内のカフェ。同伴条件は現地要確認"
      },
      {
        "ref": "r039",
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
      {"ref": "r154", "note": "車約4分・上長瀞の古民家薪窯ピザ（土日のみ営業）"},
      {
        "ref": "r040",
        "note": "犬同伴前提の施設。フック・マナーマット完備、宿泊者以外も利用可"
      },
      {
        "name": "長瀞商店街のペットOKテラス各店",
        "policy": "テラスのみ",
        "leadOK": true,
        "note": "観光協会が「ペット受け入れ可能施設一覧」を公開しており選択肢多数"
      },
      {
        "ref": "r042",
        "note": "車約3分・そば・鮎飯。屋根付きテラスで雨天も犬連れOK"
      },
      {
        "ref": "r043",
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
        "ref": "r044",
        "note": "車約10分。ステーキ中心"
      },
      {
        "ref": "r045",
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
        "ref": "r046",
        "note": "車約25分のドッグカフェ。ドッグラン直結"
      },
      {
        "ref": "r047",
        "note": "車約10分・アウトドアリゾート内カフェ。ドッグパーク併設"
      },
      {
        "ref": "r048",
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
        "ref": "r049",
        "note": "車約5分。石窯ピザ。犬連れ実績あり"
      },
      {
        "ref": "r050",
        "note": "車約5分・湯ヶ島R414沿いのカフェ＆バー。テラスペット同伴可"
      },
      {
        "ref": "r045",
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
        "ref": "r051",
        "note": "車約5分・グリル＆バー。店内に犬同伴区画あり・大型犬OK"
      },
      {
        "ref": "r052",
        "note": "車約3分・名物スイーツ店。サイズ制限なく店内OK"
      },
      {
        "ref": "r053",
        "note": "車約8分。各テーブルにリードフック完備、ペット用食器あり。生ハムが名物"
      },
      {
        "ref": "r054",
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
    "restaurants": [],
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
        "ref": "r055",
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
    "restaurants": [],
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
        "ref": "r057",
        "note": "海を望むテラス席が犬同伴可。キッチンカーも利用可"
      },
      {
        "ref": "r058",
        "note": "広いテラス席で犬同伴可"
      },
      {
        "ref": "r059",
        "note": "車約5分・走水海岸の漁師小屋改装シーフード食堂。海辺のテラス&ガーデン席が犬OK・月曜定休"
      },
      {
        "ref": "r060",
        "note": "車約5分・走水の古民家カフェ。犬用クッキーあり・木〜日営業"
      },
      {
        "ref": "r061",
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
      {"ref": "r140", "note": "車約15分。庭ノーリード可・夏は犬用プールも"},
      {
        "ref": "r062",
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
      {"ref": "r142", "note": "車約12分・三浦海岸沿いのオープンデッキ"},
      {
        "ref": "r063",
        "note": "車約7分・三崎口駅近くの手作りケーキのドッグカフェ。犬用クッキーあり・水木定休"
      },
      {
        "ref": "r064",
        "note": "車約12分・三崎港のマグロ・海鮮料理店。2階席のみ犬同伴OK"
      },
      {
        "ref": "r065",
        "note": "車約5分。テラス・BBQ場が犬OK、ドッグランも併設"
      },
      {
        "ref": "r066",
        "note": "車約15分。海の見えるテラス"
      },
      {
        "ref": "r067",
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
        "ref": "r068",
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
        "ref": "r069",
        "note": "車約10分。ペットOKテラス・無料ドッグラン・足洗い場あり"
      },
      {
        "ref": "r070",
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
        "ref": "r071",
        "note": "店内に愛犬同伴席あり。名物・湯河原ナポリタン"
      },
      {
        "ref": "r072",
        "note": "店内ペットOKのドッグフレンドリーカフェ"
      },
      {
        "ref": "r073",
        "note": "車約10分・ドッグラン併設カフェ。マナーウェア着用で店内OK（小中型犬）・要事前予約"
      },
      {
        "ref": "r074",
        "note": "漁港直送の海鮮。テラス席のみ犬OK"
      },
      {
        "ref": "r075",
        "note": "車約10分・魚屋直営の海鮮和食。大型犬も可（雨天時不可）・火水定休"
      },
      {
        "ref": "r076",
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
        "ref": "r077",
        "note": "車1分・海岸の目の前。犬同伴BBQ・ドッグラン・ドッグプール併設"
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
        "ref": "r077",
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
        "ref": "r079",
        "note": "車10分・いすみ市のカフェ。モーニング・ランチあり"
      },
      {
        "ref": "r077",
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
        "ref": "r080",
        "note": "車3分・片貝漁港直結。2階の一部テラスが同伴可・イワシ料理"
      },
      {
        "ref": "r081",
        "note": "車5分。テラスにリードフック・利用で芝ドッグラン無料"
      },
      {
        "ref": "r082",
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
        "ref": "r083",
        "note": "車約15分・犬用宿併設レストラン。日帰りランチ可・利用でドッグラン無料"
      },
      {
        "ref": "r084",
        "note": "プチドッグラン併設・テラスはノーリード可の席あり"
      },
      {
        "ref": "r085",
        "note": "館山の犬連れ定番カフェ"
      },
      {
        "ref": "r086",
        "note": "車約5分・渚の駅たてやま2F。館山港を望むテラスが犬OK・海鮮丼"
      },
      {
        "ref": "r087",
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
        "ref": "r088",
        "note": "浜の上（徒歩0分）・夏期のみ。屋内ドッグラン付きプランあり・要予約"
      },
      {
        "ref": "r089",
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
        "ref": "r090",
        "note": "車約4分・白浜海岸前のホテル内カフェ。犬用メニューあり・宿泊者以外も利用可"
      },
      {
        "ref": "r091",
        "note": "車約10分・ペリーロードの洋食カフェ。不定休のため事前連絡推奨"
      },
      {
        "ref": "r092",
        "note": "車約10分・ペリーロードの古民家カフェ。土間・縁側席で同伴可（要事前予約）"
      },
      {
        "ref": "r093",
        "note": "道の駅開国下田みなと内"
      },
      {
        "ref": "r094",
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
        "ref": "r095",
        "note": "車約4分・吉佐美のハワイアン系カフェ。全席ワンコOK・大型犬まで可・木曜定休"
      },
      {
        "ref": "r091",
        "note": "車約8分・ペリーロードの洋食カフェ。不定休のため事前連絡推奨"
      },
      {
        "ref": "r093",
        "note": "名物・金目鯛バーガー。テラス席犬OK"
      },
      {
        "ref": "r094",
        "note": "大型犬まで対応実績あり。サザエ・海鮮"
      },
      {
        "ref": "r096",
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
      {"ref": "r149", "note": "車約20分・全天候インナーテラスのほうとう店"},
      {"ref": "r147", "note": "車約8分・湖畔イタリアン。犬連れは春〜秋限定"},
      {
        "ref": "r097",
        "note": "全席犬同伴OKのバーガー・カフェ"
      },
      {
        "ref": "r098",
        "note": "全席犬同伴OK（屋外ハンモック席）"
      },
      {
        "ref": "r099",
        "note": "車約3分・シチュー専門店。大型犬も店内OK・犬用メニューあり"
      },
      {
        "ref": "r100",
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
        "ref": "r101",
        "note": "湖畔テラスで軽食"
      },
      {
        "ref": "r102",
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
        "ref": "r103",
        "note": "湖畔の定食屋。ペットと店内で食事可の実績あり。ワカサギフライが名物"
      },
      {
        "ref": "r104",
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
        "ref": "r105",
        "note": "中禅寺湖を見下ろすログハウス調カフェ。テラス席のみ犬OK"
      },
      {
        "ref": "r106",
        "note": "湖畔モーニングの犬連れ実績あり"
      },
      {
        "ref": "r107",
        "note": "車約5分・湖畔の老舗欧風料理。木曜定休・要予約推奨"
      },
      {
        "ref": "r108",
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
        "ref": "r109",
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
        "ref": "r110",
        "note": "センター南駅徒歩8分。店内・テラスとも犬同伴可"
      },
      {
        "ref": "r111",
        "note": "都筑中央公園近く"
      },
      {
        "ref": "r112",
        "note": "車約5分・センター南のドッグカフェ。全席犬同伴OK・犬用メニューあり"
      },
      {
        "ref": "r113",
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
        "ref": "r115",
        "note": "車約3分・ドッグスクール併設。アジリティ付きラン併設・月水定休"
      },
      {
        "ref": "r116",
        "note": "車約15分・ベーカリーイタリアン。冷暖房完備の屋内わんちゃん専用ルームあり"
      },
      {
        "ref": "r117",
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
    "lat": 35.2228,
    "lng": 139.691,
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
        "ref": "r118",
        "note": "車約10分。店内・テラスとも犬OK"
      },
      {
        "ref": "r119",
        "note": "車約5分・津久井浜R134沿い。店内一部＋テラスが犬OK（リード着用）"
      },
      {
        "ref": "r120",
        "note": "車約15分・松輪のドッグカフェ（2025年開店）"
      },
      {
        "ref": "r066",
        "note": "車約10分"
      },
      {
        "ref": "r121",
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
    "lat": 35.7173,
    "lng": 139.2617,
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
        "ref": "r018",
        "note": "車約6分・秋川駅近くのハンバーガーカフェ。全席ワンコOK（大型犬も可）"
      },
      {
        "ref": "r019",
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
        "ref": "r006",
        "note": "車約15分・大井松田IC近くの犬複合施設内カフェ。ドッグラン/プール併設・犬用鹿肉ハンバーグあり"
      },
      {
        "ref": "r031",
        "note": "車約20分・山北駅前のカフェ"
      },
      {
        "ref": "r124",
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
        "ref": "r126",
        "note": "車約15分・喜多院近く。冷暖房完備の犬連れ専用スペースで大型犬OK・犬用米粉ワッフルあり"
      },
      {
        "ref": "r127",
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
        "ref": "r128",
        "note": "リゾート内レストランは愛犬同伴可。犬用メニューあり"
      },
      {
        "ref": "r129",
        "note": "車約12分・本格イタリアン。テラスOK・ドッグラン無料・日曜定休"
      },
      {
        "ref": "r130",
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
      {"ref": "r149", "note": "車約20分・全天候インナーテラスのほうとう店"},
      {"ref": "r147", "note": "車約9分・湖畔イタリアン。犬連れは春〜秋限定"},
      {
        "name": "Woof カフェ&レストラン（館内）",
        "policy": "店内OK",
        "leadOK": true,
        "note": "犬同伴可のドッグカフェ・レストラン併設。犬用メニューあり"
      },
      {
        "ref": "r132",
        "note": "車約6分・花の都公園裏のドッグカフェ。森のドッグラン併設・火水定休"
      },
      {
        "ref": "r133",
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
        "ref": "r134",
        "note": "車約3分・和食（犬メニューあり）。大型犬可・各席リードフック・ドッグラン併設"
      },
      {
        "ref": "r135",
        "note": "車約3分・ログハウス系スパイスカレー。全サイズOK・芝ドッグラン併設"
      },
      {
        "ref": "r136",
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
  },
  {
    "id": "yuyake-koyake",
    "name": "夕やけ小やけふれあいの里（北浅川）",
    "category": "river",
    "area": "東京都八王子市",
    "lat": 35.6703,
    "lng": 139.216,
    "elevation_m": 287,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "浅瀬中心・泳げる場所もあり（現地確認）",
      "note": "犬の入水に関する公式明文は見当たらず（2026-08-03時点）。園のペット規定はリードまたはケージ・建物内は抱っこ（公式FAQ）。訪問時はリードのまま川遊び・泳ぎができた（現地確認2026-08-02）"
    },
    "parking": [
      {
        "name": "園内駐車場",
        "fee": "無料",
        "note": "約200台（公式）。入園料が別途必要: 大人200円・中学生以下100円（土曜無料）・65歳以上100円",
        "hours": "開園時間内"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "多い",
      "ground": "川沿いはほぼ木陰・芝生や土の道あり（現地確認）"
    },
    "photo": {
      "url": "assets/visits/visit-2026-08-01-9723/01.jpg",
      "credit": "現地撮影（2026-08-02）"
    },
    "notes": "童謡『夕焼小焼』ゆかりの八王子市の入園施設。園内を北浅川が流れる。開園9:00〜16:30（11〜2月は16:00まで・GW/7-8月の土日祝/お盆は18:00まで）・年中無休。夏休みの川遊び場入口付近は混雑するが、奥に静かな区画あり（現地確認2026-08-02）",
    "official": {
      "url": "https://yuyakekoyake.jp/",
      "label": "夕やけ小やけふれあいの里 公式"
    },
    "hours": {
      "open": "9:00〜16:30",
      "closed": null,
      "note": "3〜10月。11〜2月は9:00〜16:00・GW/7-8月の土日祝/お盆は9:00〜18:00（公式・確認日2026-08-03）"
    }
  },
  {
    "id": "yamakita-nakagawa",
    "name": "中川温泉ぶなの湯裏の清流（河内川）",
    "category": "river",
    "area": "神奈川県山北町",
    "lat": 35.4436,
    "lng": 139.05,
    "elevation_m": 383,
    "driveMin": 85,
    "water": {
      "allowed": true,
      "depth": "浅場中心・深い場所は約2m（飛び込みポイントあり）",
      "note": "犬の入水に関する公式明文なし（2026-08-03時点・禁止規定も見当たらず）。犬連れ川遊びの実績情報は多数。透明度が高くエメラルドグリーンの清流"
    },
    "parking": [
      {
        "name": "ぶなの湯 川側駐車場",
        "fee": "2,100円/日",
        "note": "約50台・大人1日入浴券2枚付き（第三者情報・要現地確認）。夏季は混雑",
        "hours": "ぶなの湯営業時間に準ずる"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "未確認",
      "ground": "玉石の河原"
    },
    "notes": "中川温泉ぶなの湯の裏手を流れる河内川。温泉（2時間券大人750円）とセットで楽しめる。ぶなの湯は10:00〜18:00・月曜休",
    "official": {
      "url": "https://www.town.yamakita.kanagawa.jp/0000004453.html",
      "label": "山北町公式（ぶなの湯）"
    },
    "hours": {
      "open": "終日（川）",
      "closed": null,
      "note": "川自体に時間制限なし。駐車場は温泉営業時間に注意"
    }
  },
  {
    "id": "takatabashi-sagamigawa",
    "name": "高田橋多目的広場（相模川）",
    "category": "river",
    "area": "神奈川県相模原市中央区",
    "lat": 35.5407,
    "lng": 139.3349,
    "elevation_m": 51,
    "driveMin": 45,
    "water": {
      "allowed": true,
      "depth": "相模川本流。場所により流れ・深さあり（増水時注意）",
      "note": "犬の水遊びに関する管理者の明文なし（2026-08-03時点・禁止規定も未確認）。夏は水遊び客で賑わう開放河川敷。犬連れの実態情報は少なめ"
    },
    "parking": [
      {
        "name": "河川敷駐車スペース",
        "fee": "無料",
        "note": "約2,000台・河原まで乗り入れ可",
        "hours": "終日（トイレは7:00〜19:00目安）"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "少ない",
      "ground": "砂利の河原"
    },
    "notes": "毎年5月の「泳げ鯉のぼり相模川」会場として知られる広い河川敷。市内で唯一河川敷が広く開放されたエリア",
    "official": {
      "url": "https://www.sagamihara-iju.jp/guides/sagamigawa-summer-cool",
      "label": "相模原市移住サイト（参考）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": null
    }
  },
  {
    "id": "yumigahama",
    "name": "弓ヶ浜（南伊豆）",
    "category": "sea",
    "area": "静岡県南伊豆町",
    "lat": 34.6343,
    "lng": 138.8905,
    "elevation_m": 8,
    "driveMin": 180,
    "water": {
      "allowed": true,
      "depth": "遠浅・波穏やか",
      "note": "犬はリード付き可（第三者情報のみ・公式明文なし）。海水浴期間（2026年は7/18〜8/30）中の犬の扱いは未確認（確認日2026-08-03・南伊豆町観光協会0558-62-0141で要確認）"
    },
    "parking": [
      {
        "name": "弓ヶ浜駐車場",
        "fee": "夏季有料",
        "note": "約300台。夏季以外はビーチ両端が無料（第三者情報）",
        "hours": "終日"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "少ない",
      "ground": "白砂の砂浜（約1.2km）"
    },
    "notes": "日本の渚百選・白砂青松百選の弓形ビーチ。トイレ・有料シャワーあり（更衣室なし）。海水浴シーズンを外した時期が犬連れ向き",
    "official": {
      "url": "https://www.minami-izu.jp/",
      "label": "南伊豆町観光協会"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "遊泳期間中の監視は8:00〜16:00"
    }
  },
  {
    "id": "shinnase-hayama",
    "name": "真名瀬海岸（葉山）",
    "category": "sea",
    "area": "神奈川県葉山町",
    "lat": 35.2698,
    "lng": 139.5709,
    "elevation_m": 2,
    "driveMin": 50,
    "water": {
      "allowed": true,
      "depth": "砂浜＋磯場（浅い）",
      "note": "犬の入水に関する公式明文なし（2026-08-03時点）。リード着用・フン持ち帰りは町の規定。海水浴場ではないため夏季のペット規制は確認されず。砂浜BBQ・海岸近くの水上バイクは禁止"
    },
    "parking": [
      {
        "name": "町営真名瀬駐車場",
        "fee": "7〜8月30分500円",
        "note": "約50台・24時間。9〜6月は平日12時間最大500円など季節変動制（2022年改定情報・要現地確認）",
        "hours": "24時間"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜と磯場"
    },
    "notes": "真名瀬漁港隣接の小さな海岸。富士山・江の島・裕次郎灯台を望む夕景の名所。海水浴場ではないため監視員なし",
    "official": {
      "url": "https://www.town.hayama.lg.jp/soshiki/sangyou/1/7406.html",
      "label": "葉山町公式（真名瀬海岸）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": null
    }
  },
  {
    "id": "ramber-dog-field",
    "name": "RAMBER DOG FIELD（野田）",
    "category": "pool",
    "area": "千葉県野田市",
    "lat": 35.9421,
    "lng": 139.8984,
    "elevation_m": 18,
    "driveMin": 85,
    "water": {
      "allowed": true,
      "depth": "小型犬用の浅瀬〜中大型犬用プール（貸切プールSPLASH ONEは最深約1.1m）",
      "note": "公式が「日本最大級」とうたう屋外ドッグプール（夏季営業7/1〜8/30・公式明文）。貸切制プールSPLASH ONEは30分2,000円〜で通年枠あり（要予約）。混合・狂犬病ワクチン証明必須"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "無料",
        "note": "約100台（公式）",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "未確認",
      "ground": "ドッグラン（天然芝等）"
    },
    "notes": "ドッグラン＋プールの犬専用施設。土日祝は予約制（空きがあれば当日可）。ドッグラン入場料は公式サイトの料金表を要確認（確認日2026-08-03）",
    "official": {
      "url": "https://www.ramber-dog-field.com/",
      "label": "RAMBER DOG FIELD公式"
    },
    "hours": {
      "open": "9:00〜18:00",
      "closed": "月曜定休（祝日は振替）",
      "note": "ナイトラン（土日祝17:00〜20:00）あり"
    }
  },
  {
    "id": "ashigakubo-yokozegawa",
    "name": "道の駅あしがくぼ裏 横瀬川",
    "category": "river",
    "area": "埼玉県横瀬町",
    "lat": 35.9774,
    "lng": 139.1361,
    "elevation_m": 302,
    "driveMin": 100,
    "water": {
      "allowed": true,
      "depth": "浅瀬の清流",
      "note": "川遊びは埼玉県・道の駅公式が公認（川遊び客向け駐車場案内あり）。犬の入水に関する明文はなし（道の駅は建物内ペット不可のみ明記・確認日2026-08-03）"
    },
    "parking": [
      {
        "name": "道の駅第2駐車場（川遊び客向け）",
        "fee": "無料と推定（公式明記なし）",
        "note": "普通50台。第1駐車場は83台",
        "hours": "終日"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "未確認",
      "ground": "整備された河原"
    },
    "notes": "芝桜の丘・あしがくぼの氷柱で知られる道の駅の裏手。河原のBBQ場は4〜9月・11〜15時・完全予約制。道の駅でトイレ・買い出しができて便利",
    "official": {
      "url": "https://michinoeki-ashigakubo.com/",
      "label": "道の駅果樹公園あしがくぼ公式"
    },
    "hours": {
      "open": "終日（川）",
      "closed": null,
      "note": null
    }
  },
  {
    "id": "araihama",
    "name": "荒井浜海水浴場（油壺）",
    "category": "sea",
    "area": "神奈川県三浦市",
    "lat": 35.1592,
    "lng": 139.6119,
    "elevation_m": 2,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "湾状地形で波穏やか・磯遊び／シュノーケリング向き",
      "note": "犬同伴可。ただし海水浴場開設期間（2026年は7/17〜8/31・8:00〜17:00）中は遊泳区域内での犬の遊泳禁止（神奈川県観光協会明文・確認日2026-08-03）。犬と泳ぐならシーズン外がおすすめ"
    },
    "parking": [
      {
        "name": "三浦市営油壺駐車場",
        "fee": "7〜9月1,000円/日",
        "note": "102台・1〜6月は600円/日・予約不可。夏期土日祝は10時前に満車になりやすい。海岸まで徒歩約10分",
        "hours": "8:30〜17:00"
      }
    ],
    "restaurants": [
      {"ref": "r141", "note": "車約8分・三崎港。裏にドッグランあり"}
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜（約150m）と磯"
    },
    "notes": "環境省「日本の水浴場88選」選定。駐車場が17:00閉場なので帰り時間に注意",
    "official": {
      "url": "https://www.city.miura.kanagawa.jp/soshiki/kankoshokoka/kankoshokoka_kanko/beach/341.html",
      "label": "三浦市公式（海水浴場）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "遊泳期間中の監視は8:00〜17:00"
    }
  },
  {
    "id": "yokobori-kaigan",
    "name": "横堀海岸（油壺）",
    "category": "sea",
    "area": "神奈川県三浦市",
    "lat": 35.1617,
    "lng": 139.6156,
    "elevation_m": 2,
    "driveMin": 70,
    "water": {
      "allowed": true,
      "depth": "波穏やかなことが多い・シュノーケリング／磯遊び向き",
      "note": "犬に関する公式明文なし（2019年以降海水浴場非開設のため夏季のペット規制自体が存在しない・確認日2026-08-03）。監視員なし・自己責任で"
    },
    "parking": [
      {
        "name": "三浦市営油壺駐車場",
        "fee": "7〜9月1,000円/日",
        "note": "102台・海岸まで徒歩5〜10分（荒井浜と共用）",
        "hours": "8:30〜17:00"
      }
    ],
    "restaurants": [
      {"ref": "r141", "note": "車約8分・三崎港"}
    ],
    "surface": {
      "shade": "少ない",
      "ground": "小さな砂浜と磯"
    },
    "notes": "荒井浜の隣の小さな自然海岸。規模が小さく空いていることが多い（三浦市公式観光ガイド）。水がきれい",
    "official": {
      "url": "https://miura.miurahantourism.jp/yokobori-kaigan/",
      "label": "三浦市公式観光ガイド"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": null
    }
  },
  {
    "id": "tomyodo-kaigan",
    "name": "燈明堂海岸（浦賀）",
    "category": "sea",
    "area": "神奈川県横須賀市",
    "lat": 35.2321,
    "lng": 139.7286,
    "elevation_m": 8,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "小さな砂浜＋磯（東京湾側では水質良好とされる）",
      "note": "犬の可否に関する公式明文なし（禁止明文もなし・確認日2026-08-03）。海水浴場非開設・監視員なし・自己責任で"
    },
    "parking": [
      {
        "name": "燈明堂緑地駐車場（市所管）",
        "fee": "5〜9月30分250円（上限なし）",
        "note": "30台・10〜4月は30分150円上限1,000円。夏季の長時間滞在は駐車料金に注意。海岸に隣接",
        "hours": "5:00〜21:30"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜と磯"
    },
    "notes": "江戸時代の灯台「燈明堂」（復元）が立つ岬の海岸。処刑場跡の史跡でもある静かなスポット",
    "official": {
      "url": "https://www.city.yokosuka.kanagawa.jp/5560/toumyoudouryokuchi.html",
      "label": "横須賀市公式（燈明堂緑地）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "駐車場は5:00〜21:30"
    }
  },
  {
    "id": "kissa-zizi",
    "name": "喫茶ZiZi（君津）",
    "category": "pool",
    "area": "千葉県君津市",
    "lat": 35.3437,
    "lng": 139.8591,
    "elevation_m": 4,
    "driveMin": 75,
    "water": {
      "allowed": true,
      "depth": "犬用プール（夏限定・展望デッキ下）",
      "note": "夏限定の犬用プールあり（飼い主確認）。貸切は2時間1,500円＋庭利用500円・空いていれば自由利用（第三者情報・確認日2026-08-03）。※公式は「ドッグラン」を名乗っていない喫茶店の庭（飼い主情報）——庭で大小の犬が一緒に遊ぶスタイルなので、犬の性格に合わせて利用を"
    },
    "parking": [
      {
        "name": "店舗駐車場",
        "fee": "無料",
        "note": "広めのスペース・無料洗車機あり（台数明記なし）",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "未確認",
      "ground": "庭（芝等）"
    },
    "notes": "犬同伴OKの喫茶店。庭利用は1人500円ドリンクバー付き・ノーリード可。足洗い場・乾燥機あり。営業10:00〜18:00・木曜休（7〜9月は平日11:00〜19:00・土日祝10:00〜20:00）",
    "official": {
      "url": "https://www.instagram.com/kissazizi/",
      "label": "喫茶ZiZi 公式Instagram"
    },
    "hours": {
      "open": "10:00〜18:00",
      "closed": "木曜定休",
      "note": "7〜9月は平日11:00〜19:00・土日祝10:00〜20:00"
    }
  },
  {
    "id": "chiropero-hotdogrun",
    "name": "CHIRO&PERO HOT DOG RUN（町田）",
    "category": "pool",
    "area": "東京都町田市",
    "lat": 35.6058,
    "lng": 139.432,
    "elevation_m": 110,
    "driveMin": 40,
    "water": {
      "allowed": true,
      "depth": "ドッグプール（中・大型犬エリアのみ）",
      "note": "プールがあるのは中・大型犬エリアのみで、小型犬エリアにプールはない（飼い主確認）。コーギーは中型犬区分での利用が前提。混合ワクチン・狂犬病予防接種証明が必要"
    },
    "parking": [
      {
        "name": "施設駐車場",
        "fee": "無料",
        "note": "約70台",
        "hours": "営業時間内"
      }
    ],
    "restaurants": [],
    "surface": {
      "shade": "未確認",
      "ground": "高品質人工芝＋コンクリート（夏でも熱くなりにくいとされる）"
    },
    "notes": "1,000㎡超のドッグラン。ビジター入場料は平日大人1,000円＋犬500〜1,500円・土日祝大人1,500円＋犬1,000〜2,000円（第三者情報・確認日2026-08-03）。フードコート・カフェARMANDO併設",
    "official": {
      "url": "https://www.chiropero.com/",
      "label": "CHIRO&PERO公式"
    },
    "hours": {
      "open": "8:00〜20:00",
      "closed": "水曜定休",
      "note": "夏季は6:00〜22:00（第三者情報・要公式確認）"
    }
  },
  {
    "id": "tamagawa-shinsui-park",
    "name": "多摩川親水公園（府中）",
    "category": "river",
    "area": "東京都府中市",
    "lat": 35.6529,
    "lng": 139.5047,
    "elevation_m": 39,
    "driveMin": 35,
    "water": {
      "allowed": true,
      "depth": "ミニチュア多摩川の浅い人工水路（全長約250m）",
      "note": "犬の水遊びに関する明文規定なし（確認日2026-08-03）。飼い主のおすすめスポット。夏は子どもの水遊びで賑わうため混雑時間帯は配慮を"
    },
    "parking": [
      {
        "name": "近隣コインパーキング（小柳町5-7-1）",
        "fee": "60分200円",
        "note": "約20台・24時間最大1,000円（18時〜9時は60分100円）。公園専用駐車場はなし",
        "hours": "24時間"
      }
    ],
    "restaurants": [
      {"ref": "r152", "note": "車約10分・府中駅前。土日祝は14時から営業"}
    ],
    "surface": {
      "shade": "ほぼなし",
      "ground": "整備された親水護岸"
    },
    "notes": "源流から東京湾までの多摩川をミニチュア再現した人工水路の公園。園内にトイレ・売店・自販機なし（トイレは隣の小柳公園）。日陰がほぼないため夏は日よけ・飲み水必携。西武多摩川線競艇場前駅から徒歩約10分",
    "official": {
      "url": "https://www.kankou-fuchu.com/?p=we-page-entry&spot=40336",
      "label": "府中観光協会"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": null
    }
  },
  {
    "id": "miyagase-kohan",
    "name": "宮ヶ瀬湖畔園地",
    "category": "lake",
    "area": "神奈川県清川村",
    "lat": 35.5246,
    "lng": 139.2256,
    "elevation_m": 289,
    "driveMin": 60,
    "water": {
      "allowed": true,
      "depth": "夏季の「じゃぶじゃぶ池」（浅い小川）で水遊び可",
      "note": "園地はペット同伴OK・リード着用（犬連れレポート多数）。夏はじゃぶじゃぶ池の小川で犬も水遊びできる（第三者情報・確認日2026-08-03）。宮ヶ瀬湖本体は遊泳禁止"
    },
    "parking": [
      {
        "name": "水の郷駐車場ほか",
        "fee": "平日無料",
        "note": "土日祝・GW等は普通車最大500円。水の郷駐車場が商店街・カフェに最寄り",
        "hours": "駐車場により異なる"
      }
    ],
    "restaurants": [
      {
        "ref": "r003",
        "note": "水の郷商店街エリア"
      },
      {
        "ref": "r004",
        "note": "水の郷商店街エリア"
      },
      {
        "ref": "r137",
        "note": "水の郷交流館。テラス犬OK＋無料ドッグラン併設"
      },
      {
        "ref": "r138",
        "note": "中庭ペットOK。周囲の店の料理を持ち寄れる"
      }
    ],
    "surface": {
      "shade": "半々",
      "ground": "広大な芝生（けやき広場）と園路"
    },
    "notes": "標高約290mの湖畔リゾート。広い芝生と商店街で1日過ごせる飼い主おすすめスポット。水の郷大つり橋があるが渡らなくても園地は楽しめる（吊り橋が苦手な子も安心）",
    "official": {
      "url": "https://www.miyagase.or.jp/",
      "label": "ぐるり宮ヶ瀬湖（宮ヶ瀬ダム周辺振興財団）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "商店街の店舗はおおむね11:00〜16:00前後"
    }
  },
  {
    "id": "akiya-tateishi",
    "name": "秋谷・立石海岸",
    "category": "sea",
    "area": "神奈川県横須賀市",
    "lat": 35.2387,
    "lng": 139.6001,
    "elevation_m": 2,
    "driveMin": 55,
    "water": {
      "allowed": true,
      "depth": "砂浜＋磯場（遠泳は危険とされる・監視員なし）",
      "note": "ペット可・リード着用で犬の海辺さんぽに人気（観光情報・確認日2026-08-03）。犬の入水に関する明文はなし。海水浴場非開設のため夏季のペット規制もなし"
    },
    "parking": [
      {
        "name": "県営立石駐車場",
        "fee": "無料",
        "note": "通年利用可・海岸隣接（飼い主確認）。夕景の時間帯は混みやすい",
        "hours": "終日"
      }
    ],
    "restaurants": [
      {
        "ref": "r139",
        "note": "立石バス停徒歩1分の古民家バーガー店。看板犬のラブラドール・シェリーちゃんがいる"
      }
    ],
    "surface": {
      "shade": "少ない",
      "ground": "砂浜と岩礁"
    },
    "notes": "高さ12mの奇岩「立石」と富士山のシルエットで知られる夕景の名所。かながわの景勝50選。飼い主おすすめスポット",
    "official": {
      "url": "https://www.cocoyoko.net/spot/akiya-beach.html",
      "label": "横須賀市観光情報（ここはヨコスカ）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": null
    }
  }
];

/* 犬連れOK飲食店（正規化データ） */
const RESTAURANTS = {
  "r002": {
    "id": "r002",
    "name": "オレンジツリー",
    "area": "神奈川県愛甲郡愛川町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5387,
    "lng": 139.217,
    "hours": {
      "open": "10:00〜17:00",
      "closed": "月曜定休",
      "note": "ランチ10:00〜15:00。所在地は相模原市緑区鳥屋（宮ヶ瀬湖北岸）"
    }
  },
  "r003": {
    "id": "r003",
    "name": "和ごころカフェ",
    "area": "神奈川県愛甲郡愛川町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5235,
    "lng": 139.224,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "不定休",
      "note": "宮ヶ瀬水の郷商店街内。ランチのみ・要事前確認"
    }
  },
  "r004": {
    "id": "r004",
    "name": "丸太小屋レストラン びんずる",
    "area": "神奈川県愛甲郡愛川町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5234,
    "lng": 139.2241,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水・木曜定休",
      "note": "L.O.16:00。宮ヶ瀬水の郷商店街"
    }
  },
  "r005": {
    "id": "r005",
    "name": "服部牧場（カサリンガのジェラート）",
    "area": "神奈川県愛甲郡愛川町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.548,
    "lng": 139.2582,
    "hours": {
      "open": "11:00〜17:00",
      "closed": null,
      "note": "アイス工房（3〜10月）。冬期は〜16:00・金曜定休。牧場は入場無料"
    }
  },
  "r006": {
    "id": "r006",
    "name": "kent crew",
    "area": "神奈川県秦野市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.3531,
    "lng": 139.1561,
    "hours": {
      "open": "9:00〜18:00",
      "closed": "月曜定休",
      "note": "松田町神山"
    }
  },
  "r007": {
    "id": "r007",
    "name": "森のカフェ",
    "area": "神奈川県秦野市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3818,
    "lng": 139.2201,
    "hours": {
      "open": "10:00〜16:00",
      "closed": "水・木曜定休",
      "note": "ランチプレートは11:00〜"
    }
  },
  "r008": {
    "id": "r008",
    "name": "白笹うどん 多奈加亭",
    "area": "神奈川県秦野市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3638,
    "lng": 139.2173,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "不定休",
      "note": "L.O.14:30・正月三が日休"
    }
  },
  "r009": {
    "id": "r009",
    "name": "I'm home",
    "area": "東京都青梅市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7808,
    "lng": 139.2285,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水曜定休",
      "note": "第3火曜も休み"
    }
  },
  "r010": {
    "id": "r010",
    "name": "DOG CAFE CANIS",
    "area": "東京都青梅市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.8075,
    "lng": 139.3049,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "不定休",
      "note": "L.O.15:00・休業日はInstagram告知"
    }
  },
  "r011": {
    "id": "r011",
    "name": "ome smash burger 杉屋",
    "area": "東京都青梅市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.7845,
    "lng": 139.2533,
    "hours": {
      "open": "11:30〜18:00",
      "closed": "火・水曜定休",
      "note": "L.O.17:30・売り切れ次第終了"
    }
  },
  "r012": {
    "id": "r012",
    "name": "オギノパン 本社工場直売店",
    "area": "神奈川県相模原市緑区",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5538,
    "lng": 139.2618,
    "hours": {
      "open": "9:30〜17:30",
      "closed": null,
      "note": "4〜8月の土日祝は18:00まで・元日のみ休"
    }
  },
  "r013": {
    "id": "r013",
    "name": "つくい城の里",
    "area": "神奈川県相模原市緑区",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5796,
    "lng": 139.2734,
    "hours": {
      "open": "10:00〜16:00",
      "closed": null,
      "note": "カフェ44APARTMENTの時間。土日祝9:00〜18:00・煮込み炎家とドッグテラスは11:00〜16:00（公式・確認日2026-08-03）・駐車場約10台で近隣パーキングなし（現地確認2026-08-02）"
    }
  },
  "r014": {
    "id": "r014",
    "name": "猟師工房ドライブイン",
    "area": "千葉県君津市",
    "policy": "店内OK",
    "leadOK": null,
    "lat": 35.1974,
    "lng": 140.069,
    "hours": {
      "open": "10:00〜17:00",
      "closed": "水曜定休",
      "note": "ジビエビュッフェは11:00〜15:00"
    }
  },
  "r015": {
    "id": "r015",
    "name": "箱根唐揚げ Karatto",
    "area": "神奈川県箱根町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.2017,
    "lng": 139.0314,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木曜定休",
      "note": "L.O.15:30・完売次第閉店・所在地は元箱根（芦ノ湖畔）"
    }
  },
  "r016": {
    "id": "r016",
    "name": "DogHub箱根",
    "area": "神奈川県箱根町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.2651,
    "lng": 139.0126,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水・木曜定休",
      "note": "所在地は仙石原"
    }
  },
  "r017": {
    "id": "r017",
    "name": "NARAYA CAFE（宮ノ下）",
    "area": "神奈川県箱根町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2423,
    "lng": 139.0629,
    "hours": {
      "open": "10:30〜18:00",
      "closed": "水曜・第4木曜定休",
      "note": "12〜2月は〜17:00"
    }
  },
  "r018": {
    "id": "r018",
    "name": "CAFE MOJAVE",
    "area": "東京都あきる野市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7279,
    "lng": 139.2854,
    "hours": {
      "open": "11:30〜15:30",
      "closed": "木曜・第1第3水曜定休",
      "note": "L.O.14:30・夜は17:30〜21:00"
    }
  },
  "r019": {
    "id": "r019",
    "name": "米沢牛ステーキハウス un",
    "area": "東京都あきる野市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7225,
    "lng": 139.3134,
    "hours": {
      "open": "11:00〜14:00",
      "closed": "水曜定休",
      "note": "ディナー17:30〜22:00"
    }
  },
  "r020": {
    "id": "r020",
    "name": "黒茶屋",
    "area": "東京都あきる野市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.7255,
    "lng": 139.2112,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "不定休",
      "note": "夜は予約制・営業カレンダー要確認"
    }
  },
  "r021": {
    "id": "r021",
    "name": "阿里山Cafe",
    "area": "埼玉県日高市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8828,
    "lng": 139.3088,
    "hours": {
      "open": "11:30〜18:00",
      "closed": "火・水曜定休",
      "note": "L.O.17:30"
    }
  },
  "r022": {
    "id": "r022",
    "name": "CAWAZ base",
    "area": "埼玉県日高市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.888,
    "lng": 139.3131,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "木・金曜定休",
      "note": "年末年始休業あり"
    }
  },
  "r023": {
    "id": "r023",
    "name": "カフェ＆ベーカリー 日月堂",
    "area": "埼玉県日高市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8822,
    "lng": 139.2981,
    "hours": {
      "open": "11:30〜16:30",
      "closed": "火・水曜定休",
      "note": "土日祝は〜17:00"
    }
  },
  "r024": {
    "id": "r024",
    "name": "炭鳥筏 IKADA",
    "area": "東京都青梅市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.8049,
    "lng": 139.1751,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "金曜定休（祝日は営業）",
      "note": "売切れ次第終了"
    }
  },
  "r025": {
    "id": "r025",
    "name": "MITAKE Deck Cafe Bitte",
    "area": "東京都青梅市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8039,
    "lng": 139.1767,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "火・水・木曜定休",
      "note": "金曜のみ13:00〜19:00。雨天時休業あり"
    }
  },
  "r026": {
    "id": "r026",
    "name": "澤乃井園（清流ガーデン）",
    "area": "東京都青梅市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8041,
    "lng": 139.1937,
    "hours": {
      "open": "10:00〜17:00",
      "closed": "月曜定休（祝日は翌日）",
      "note": "軽食L.O.16:00"
    }
  },
  "r027": {
    "id": "r027",
    "name": "Riverside Cafe awa",
    "area": "東京都青梅市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8074,
    "lng": 139.1745,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "月・火曜定休",
      "note": "L.O.15:00・売切れ次第早仕舞いあり"
    }
  },
  "r028": {
    "id": "r028",
    "name": "ジビエールカフェ",
    "area": "埼玉県飯能市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.8633,
    "lng": 139.2353,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木・金曜定休",
      "note": "季節により変動あり"
    }
  },
  "r029": {
    "id": "r029",
    "name": "CARVAAN BREWERY & RESTAURANT 飯能本店",
    "area": "埼玉県飯能市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8537,
    "lng": 139.3103,
    "hours": {
      "open": "11:30〜16:30",
      "closed": "水曜定休",
      "note": "ディナー17:00〜21:00（月・火はランチのみ）"
    }
  },
  "r030": {
    "id": "r030",
    "name": "COUNTRY CAFE ターニップ",
    "area": "埼玉県飯能市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.8839,
    "lng": 139.1836,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "水・木曜定休",
      "note": "夜17:00〜20:00も営業"
    }
  },
  "r031": {
    "id": "r031",
    "name": "haz",
    "area": "神奈川県山北町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.3608,
    "lng": 139.081,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "月〜水曜定休",
      "note": "営業は木〜日。土曜のみ〜17:00"
    }
  },
  "r032": {
    "id": "r032",
    "name": "cafe だいず",
    "area": "神奈川県山北町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.3628,
    "lng": 139.0886,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "水・木曜定休",
      "note": "築100年の古民家カフェ"
    }
  },
  "r034": {
    "id": "r034",
    "name": "Cafe Lirio",
    "area": "静岡県三島市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1068,
    "lng": 138.9025,
    "hours": {
      "open": "9:00〜17:00",
      "closed": null,
      "note": "年中無休・閉店時刻は季節変動あり"
    }
  },
  "r035": {
    "id": "r035",
    "name": "マカロニ市場 三島店",
    "area": "静岡県三島市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.0967,
    "lng": 138.9242,
    "hours": {
      "open": "11:00〜22:00",
      "closed": null,
      "note": "L.O.21:30・ベーカリーは〜21:00"
    }
  },
  "r037": {
    "id": "r037",
    "name": "ビブラビブレ",
    "area": "静岡県伊豆の国市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1046,
    "lng": 138.9668,
    "hours": {
      "open": "11:00〜14:00",
      "closed": "月・火・水曜定休",
      "note": "土日は〜14:30。所在地は函南町"
    }
  },
  "r039": {
    "id": "r039",
    "name": "カフェ&バル 掌",
    "area": "静岡県伊豆の国市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.03,
    "lng": 138.9395,
    "hours": {
      "open": "10:30〜17:00",
      "closed": "日・月曜定休",
      "note": "L.O.16:00・夜は8名以上の完全予約制"
    }
  },
  "r040": {
    "id": "r040",
    "name": "エルズパーク長瀞 カフェ&バル",
    "area": "埼玉県秩父郡長瀞町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.0903,
    "lng": 139.1043,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "不定休",
      "note": "L.O.15:30・宿泊者以外も日帰り利用可"
    }
  },
  "r042": {
    "id": "r042",
    "name": "丹一",
    "area": "埼玉県秩父郡長瀞町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.0948,
    "lng": 139.1147,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木曜定休",
      "note": "あゆめし売切れ次第終了の場合あり"
    }
  },
  "r043": {
    "id": "r043",
    "name": "そば処 むらた",
    "area": "埼玉県秩父郡長瀞町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.0947,
    "lng": 139.1104,
    "hours": {
      "open": "10:30〜17:00",
      "closed": "不定休",
      "note": "そばが無くなり次第閉店・長瀞駅近く"
    }
  },
  "r044": {
    "id": "r044",
    "name": "MAVERICK（中伊豆ワイナリー内）",
    "area": "静岡県伊豆市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.9846,
    "lng": 138.9994,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "土日祝のみ営業（平日定休）",
      "note": "L.O.15:00・中伊豆ワイナリー敷地内"
    }
  },
  "r045": {
    "id": "r045",
    "name": "黒玉テラス&Dog",
    "area": "静岡県伊豆市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.908,
    "lng": 138.9235,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "火・水曜定休",
      "note": ""
    }
  },
  "r046": {
    "id": "r046",
    "name": "いぬかふぇ まいら（鹿沼市街）",
    "area": "栃木県鹿沼市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.5705,
    "lng": 139.7245,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "火曜・第1第3月曜定休",
      "note": "祝日は営業"
    }
  },
  "r047": {
    "id": "r047",
    "name": "Lake Wood Resort",
    "area": "栃木県鹿沼市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.6065,
    "lng": 139.6676,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "月曜・第1火曜定休",
      "note": "現金のみ"
    }
  },
  "r048": {
    "id": "r048",
    "name": "リッチフィールド",
    "area": "栃木県鹿沼市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.6031,
    "lng": 139.7324,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "水曜定休",
      "note": "祝日は営業し翌日休"
    }
  },
  "r049": {
    "id": "r049",
    "name": "ファーマーズヒル",
    "area": "静岡県伊豆市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.8665,
    "lng": 138.9207
  },
  "r050": {
    "id": "r050",
    "name": "ほたるの庭",
    "area": "静岡県伊豆市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.9465,
    "lng": 138.9336,
    "hours": {
      "open": "9:30〜18:00",
      "closed": "火曜定休",
      "note": "土日祝は8:30〜"
    }
  },
  "r051": {
    "id": "r051",
    "name": "GRILL&BAR The Campfire MINAKAMI",
    "area": "群馬県みなかみ町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.7661,
    "lng": 138.9697,
    "hours": {
      "open": "11:30〜14:30",
      "closed": "月・火曜定休",
      "note": "ディナー17:30〜21:30・BAR〜23:00"
    }
  },
  "r052": {
    "id": "r052",
    "name": "大トロ牛乳",
    "area": "群馬県みなかみ町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.7541,
    "lng": 138.9724,
    "hours": {
      "open": "10:00〜17:30",
      "closed": "火曜定休",
      "note": "土日祝は〜18:00・売切れ次第終了"
    }
  },
  "r053": {
    "id": "r053",
    "name": "育風堂精肉店（はもん みなかみ）",
    "area": "群馬県みなかみ町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7882,
    "lng": 138.9773,
    "hours": {
      "open": "11:00〜14:00",
      "closed": "水曜定休",
      "note": "レストランは土日祝〜17:00・ショップは10:00〜18:00"
    }
  },
  "r054": {
    "id": "r054",
    "name": "DDC minakami",
    "area": "群馬県みなかみ町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7661,
    "lng": 138.9697,
    "hours": {
      "open": "10:00〜17:00",
      "closed": "水・木曜定休",
      "note": "4〜11月の時間。冬季は週末のみ営業"
    }
  },
  "r055": {
    "id": "r055",
    "name": "那須高原 清流の里",
    "area": "栃木県那須塩原市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 37.0646,
    "lng": 139.9935,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "木曜定休",
      "note": "釣り堀は9:00〜15:00。木曜祝日は営業"
    }
  },
  "r058": {
    "id": "r058",
    "name": "レストア（走水）",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2556,
    "lng": 139.7424,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "月曜定休",
      "note": "月曜祝日は営業・ランチL.O.14:30"
    }
  },
  "r059": {
    "id": "r059",
    "name": "かねよ食堂",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2639,
    "lng": 139.7272,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "月曜定休",
      "note": "金土日祝は〜22:00"
    }
  },
  "r060": {
    "id": "r060",
    "name": "Guna cafe' base",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2637,
    "lng": 139.7308,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "不定休",
      "note": "営業は木〜日中心・土日は8:00〜。Instagram要確認"
    }
  },
  "r061": {
    "id": "r061",
    "name": "エルマール（浦賀）",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2432,
    "lng": 139.7211,
    "hours": {
      "open": "11:30〜17:00",
      "closed": "月・火曜定休",
      "note": "浦賀の渡し隣"
    }
  },
  "r062": {
    "id": "r062",
    "name": "DOG DEPT GARDEN CAFE 木更津",
    "area": "千葉県富津市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.4305,
    "lng": 139.9276,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "木曜定休",
      "note": "土日祝は〜18:00・L.O.は閉店1時間前"
    }
  },
  "r063": {
    "id": "r063",
    "name": "AnL cafe",
    "area": "神奈川県三浦市・横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1489,
    "lng": 139.6283,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水・木曜定休",
      "note": "臨時休業あり（Instagramで要確認）"
    }
  },
  "r064": {
    "id": "r064",
    "name": "三崎港 海の幸",
    "area": "神奈川県三浦市・横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.14,
    "lng": 139.6172,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "不定休",
      "note": "犬連れは2階席（予約制）・木曜休みが多い"
    }
  },
  "r065": {
    "id": "r065",
    "name": "ソレイユの丘 内レストラン",
    "area": "神奈川県三浦市・横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1963,
    "lng": 139.6122,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "火曜定休",
      "note": "園内レストランVENTO LEONE・L.O.17:00・園自体は9:00〜18:00"
    }
  },
  "r066": {
    "id": "r066",
    "name": "BEACHEND CAFE（三浦海岸）",
    "area": "神奈川県三浦市・横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1736,
    "lng": 139.6549,
    "hours": {
      "open": "9:00〜20:30",
      "closed": "火曜定休",
      "note": "土日祝は8時開店・ランチ11:00〜15:00"
    }
  },
  "r067": {
    "id": "r067",
    "name": "カメハメハ大王の渚",
    "area": "神奈川県三浦市・横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1589,
    "lng": 139.6157,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "木・金曜定休",
      "note": "日曜は10時〜。冬期は土日のみの場合あり"
    }
  },
  "r068": {
    "id": "r068",
    "name": "OISO CONNECT",
    "area": "神奈川県大磯町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.306,
    "lng": 139.3159,
    "hours": {
      "open": "9:00〜18:00",
      "closed": "不定休",
      "note": "2階カフェL.O.17:00・1階物販は水曜定休"
    }
  },
  "r069": {
    "id": "r069",
    "name": "道の駅 保田小学校",
    "area": "千葉県鋸南町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1436,
    "lng": 139.8439,
    "hours": {
      "open": "9:00〜17:00",
      "closed": null,
      "note": "年中無休・テナントごとに営業時間が異なる"
    }
  },
  "r070": {
    "id": "r070",
    "name": "Pizza GONZO（金谷）",
    "area": "千葉県鋸南町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1666,
    "lng": 139.8243,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "平日のみ営業",
      "note": "営業日の変動が多い・最新はGoogleマップで確認"
    }
  },
  "r071": {
    "id": "r071",
    "name": "WAKAFE（湯河原駅近く）",
    "area": "神奈川県湯河原町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.144,
    "lng": 139.1011,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木曜定休",
      "note": "L.O.15:30・湯河原駅徒歩4分"
    }
  },
  "r072": {
    "id": "r072",
    "name": "ラ・テラス岩本屋（万葉公園入口）",
    "area": "神奈川県湯河原町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1469,
    "lng": 139.0754,
    "hours": {
      "open": "10:00〜17:00",
      "closed": "火・金曜定休",
      "note": "不定期の長期休業あり"
    }
  },
  "r073": {
    "id": "r073",
    "name": "豆杏cafe",
    "area": "神奈川県湯河原町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1373,
    "lng": 139.0666,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "不定休",
      "note": "金土日中心の営業・席数6・要予約・犬1頭500円"
    }
  },
  "r074": {
    "id": "r074",
    "name": "福浦漁港 みなと食堂",
    "area": "神奈川県湯河原町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1508,
    "lng": 139.1323,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "水曜定休",
      "note": "売り切れ次第終了・要電話確認"
    }
  },
  "r075": {
    "id": "r075",
    "name": "和食うおたつ",
    "area": "神奈川県湯河原町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1408,
    "lng": 139.0901,
    "hours": {
      "open": "11:30〜14:00",
      "closed": "火・水曜定休",
      "note": "夜17:00〜19:30は金土日のみ"
    }
  },
  "r076": {
    "id": "r076",
    "name": "しあわせ中華そば食堂 にこり",
    "area": "神奈川県湯河原町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1457,
    "lng": 139.1082,
    "hours": {
      "open": "10:00〜20:00",
      "closed": "火・水曜定休",
      "note": "⚠️リニューアルのため一時休業中（再開日未定）・公式Xで要確認"
    }
  },
  "r077": {
    "id": "r077",
    "name": "エリアスガーデン",
    "area": "千葉県一宮町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3353,
    "lng": 140.39,
    "hours": {
      "open": "11:00〜21:00",
      "closed": "水曜定休",
      "note": "土日祝11時〜/平日17:30〜と時期変動が大きく要事前確認"
    }
  },
  "r079": {
    "id": "r079",
    "name": "CAFEビゼン",
    "area": "千葉県いすみ市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.2782,
    "lng": 140.394,
    "hours": {
      "open": "8:30〜17:00",
      "closed": "不定休",
      "note": "金土日祝は〜21:00・事前連絡推奨"
    }
  },
  "r080": {
    "id": "r080",
    "name": "海の駅九十九里",
    "area": "千葉県九十九里町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5375,
    "lng": 140.4544,
    "hours": {
      "open": "9:00〜18:00",
      "closed": null,
      "note": "フードコートは10:00〜17:00・11〜2月は〜17:00"
    }
  },
  "r081": {
    "id": "r081",
    "name": "九十九里ハーブガーデン ラ・パニエ",
    "area": "千葉県九十九里町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5457,
    "lng": 140.4437,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "火曜定休（祝日は営業）",
      "note": "食事は11時〜"
    }
  },
  "r082": {
    "id": "r082",
    "name": "海鮮料理 大漁亭",
    "area": "千葉県九十九里町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5161,
    "lng": 140.4392,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "木曜・第1第3金曜定休",
      "note": "土日祝は〜20:00・夏期（7/18〜8/31）は無休"
    }
  },
  "r083": {
    "id": "r083",
    "name": "CARO FORESTA 館山DIANA",
    "area": "千葉県館山市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.9741,
    "lng": 139.8054,
    "hours": {
      "open": "11:30〜14:00",
      "closed": null,
      "note": "ディナー18:00〜21:00は要予約・無休"
    }
  },
  "r084": {
    "id": "r084",
    "name": "ドッグ&ベジレストラン トゥルシー（館山市内）",
    "area": "千葉県館山市",
    "policy": "テラスのみ",
    "leadOK": false,
    "lat": 35.0066,
    "lng": 139.9316,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "不定休",
      "note": "火・水曜休みが多い・予約推奨"
    }
  },
  "r085": {
    "id": "r085",
    "name": "カフェえどもんず",
    "area": "千葉県館山市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1677,
    "lng": 139.821,
    "hours": {
      "open": "12:00〜18:00",
      "closed": "月〜木定休",
      "note": "金土日祝のみ営業。実所在地は富津市金谷（浜金谷駅徒歩2分）"
    }
  },
  "r086": {
    "id": "r086",
    "name": "館山なぎさ食堂",
    "area": "千葉県館山市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.9882,
    "lng": 139.8533,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "不定休",
      "note": "L.O.16:30・渚の駅たてやま2F"
    }
  },
  "r087": {
    "id": "r087",
    "name": "カフェデルマ",
    "area": "千葉県館山市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.9962,
    "lng": 139.8602,
    "hours": {
      "open": "11:30〜17:00",
      "closed": "火〜土曜定休（日・月のみ営業）",
      "note": "夏季休業あり・営業日は公式SNSで要確認"
    }
  },
  "r088": {
    "id": "r088",
    "name": "ASOBEACH -愛犬と過ごす海の家-",
    "area": "千葉県山武市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5534,
    "lng": 140.467,
    "hours": {
      "open": "9:00〜20:00",
      "closed": null,
      "note": "夏季限定営業（7月上旬〜8/31）・要予約"
    }
  },
  "r089": {
    "id": "r089",
    "name": "浜茶屋 網元",
    "area": "千葉県山武市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5161,
    "lng": 140.4392,
    "hours": {
      "open": "10:30〜16:00",
      "closed": "水曜定休（祝日は営業）",
      "note": "最終入店14:30"
    }
  },
  "r090": {
    "id": "r090",
    "name": "Two Tails' cafe（下田プリンスホテル内）",
    "area": "静岡県下田市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.6952,
    "lng": 138.9736,
    "hours": {
      "open": "10:00〜17:30",
      "closed": null,
      "note": "L.O.17:00・予約不可"
    }
  },
  "r091": {
    "id": "r091",
    "name": "フラム ジャック",
    "area": "静岡県下田市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.6714,
    "lng": 138.9442,
    "hours": {
      "open": "11:30〜19:30",
      "closed": "不定休",
      "note": "現金のみ"
    }
  },
  "r092": {
    "id": "r092",
    "name": "ギャラリー&カフェ 草画房",
    "area": "静岡県下田市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.6714,
    "lng": 138.9436,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "土日祝のみ営業",
      "note": "不定休あり・要電話確認"
    }
  },
  "r093": {
    "id": "r093",
    "name": "下田バーガー Ra-maru（車約10分）",
    "area": "静岡県下田市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.6748,
    "lng": 138.9509,
    "hours": {
      "open": "10:00〜17:00",
      "closed": null,
      "note": "L.O.16:30"
    }
  },
  "r094": {
    "id": "r094",
    "name": "青木サザエ店（白浜・車約7分）",
    "area": "静岡県下田市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.6355,
    "lng": 138.8914,
    "hours": {
      "open": "8:30〜17:30",
      "closed": null,
      "note": "実所在地は南伊豆町（弓ヶ浜前）"
    }
  },
  "r095": {
    "id": "r095",
    "name": "South Cafe",
    "area": "静岡県下田市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.6663,
    "lng": 138.9115,
    "hours": {
      "open": "11:30〜20:00",
      "closed": "木曜定休",
      "note": "L.O.19:00"
    }
  },
  "r096": {
    "id": "r096",
    "name": "Fermenco",
    "area": "静岡県下田市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 34.6586,
    "lng": 138.9216,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "火曜定休",
      "note": "夜17:00〜20:30も営業・夏季は変動あり"
    }
  },
  "r097": {
    "id": "r097",
    "name": "SUGEEZ lil' frites（平野）",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.427,
    "lng": 138.9032,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "水曜定休",
      "note": "季節により変動あり"
    }
  },
  "r098": {
    "id": "r098",
    "name": "PICA山中湖 Hammock Cafe",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.4069,
    "lng": 138.8746,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "水・木曜定休（夏季繁忙期は営業）",
      "note": "雨天クローズ・冬季休業あり"
    }
  },
  "r099": {
    "id": "r099",
    "name": "煮込みシチューの店 Casserole",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.4194,
    "lng": 138.9077,
    "hours": {
      "open": "11:30〜14:30",
      "closed": "月曜定休",
      "note": "夜18:00〜20:00も営業"
    }
  },
  "r100": {
    "id": "r100",
    "name": "NICO CAFE",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.4055,
    "lng": 138.8807,
    "hours": {
      "open": "12:00〜14:30",
      "closed": null,
      "note": "完全予約制・夜17:30〜22:00も営業"
    }
  },
  "r101": {
    "id": "r101",
    "name": "水明荘 売店・軽食カフェ",
    "area": "山梨県市川三郷町",
    "policy": "テラスのみ",
    "leadOK": true
  },
  "r102": {
    "id": "r102",
    "name": "湖畔cafe NATIVE GARDEN+",
    "area": "山梨県市川三郷町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5298,
    "lng": 138.5151,
    "hours": {
      "open": "9:00〜17:00",
      "closed": "火・水曜定休（7〜9月は無休）",
      "note": "営業日カレンダー要確認"
    }
  },
  "r103": {
    "id": "r103",
    "name": "ながお亭",
    "area": "群馬県高崎市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 36.4718,
    "lng": 138.8604
  },
  "r104": {
    "id": "r104",
    "name": "Cafe 水月",
    "area": "群馬県高崎市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.4704,
    "lng": 138.8605,
    "hours": {
      "open": "9:00〜17:00",
      "closed": "不定休",
      "note": "L.O.16:30・榛名観光ボート併設"
    }
  },
  "r105": {
    "id": "r105",
    "name": "鹿の子",
    "area": "栃木県日光市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7401,
    "lng": 139.497,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "不定休",
      "note": "終了時刻は季節変動あり"
    }
  },
  "r106": {
    "id": "r106",
    "name": "TOKI珈琲店",
    "area": "栃木県日光市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7395,
    "lng": 139.4969,
    "hours": {
      "open": "7:30〜15:30",
      "closed": "火・水曜定休",
      "note": "モーニング7:30〜10:30・Instagramで告知"
    }
  },
  "r107": {
    "id": "r107",
    "name": "欧州浪漫館 シェ・ホシノ",
    "area": "栃木県日光市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7399,
    "lng": 139.4945,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "木曜定休",
      "note": "夜18:00〜20:00も営業・冬季は不定休"
    }
  },
  "r108": {
    "id": "r108",
    "name": "レストラン メープル",
    "area": "栃木県日光市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.7283,
    "lng": 139.4933,
    "hours": {
      "open": "9:00〜17:00",
      "closed": null,
      "note": "4〜11月は無休。冬季10:00〜16:00・不定休"
    }
  },
  "r109": {
    "id": "r109",
    "name": "農家レストラン みのりの里",
    "area": "群馬県片品村",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.769,
    "lng": 139.2326,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "月・火曜定休",
      "note": "営業は4月上旬〜11月下旬・冬期休業"
    }
  },
  "r110": {
    "id": "r110",
    "name": "Leko Cafe",
    "area": "神奈川県横浜市都筑区",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5463,
    "lng": 139.5824,
    "hours": {
      "open": "10:00〜16:00",
      "closed": null,
      "note": "年中無休・駐車場7台"
    }
  },
  "r111": {
    "id": "r111",
    "name": "Cafe OREO",
    "area": "神奈川県横浜市都筑区",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5453,
    "lng": 139.5693,
    "hours": {
      "open": "11:00〜18:00",
      "closed": "火曜定休",
      "note": "第1・第3月曜も休み"
    }
  },
  "r112": {
    "id": "r112",
    "name": "chou2clair",
    "area": "神奈川県横浜市都筑区",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5453,
    "lng": 139.5693,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "月・火曜定休",
      "note": "土日祝は〜17:00・臨時休業あり"
    }
  },
  "r113": {
    "id": "r113",
    "name": "FRESCO",
    "area": "神奈川県横浜市都筑区",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5375,
    "lng": 139.5902,
    "hours": {
      "open": "11:30〜15:30",
      "closed": "火曜定休",
      "note": "ディナー17:30〜22:00・仲町台駅徒歩3分"
    }
  },
  "r115": {
    "id": "r115",
    "name": "ドッグカフェ BUBU'S PAW",
    "area": "千葉県松戸市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7629,
    "lng": 139.9283,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "月・水曜定休",
      "note": "祝日は営業し翌日振替"
    }
  },
  "r116": {
    "id": "r116",
    "name": "マカロニ市場 松戸店",
    "area": "千葉県松戸市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7805,
    "lng": 139.9159,
    "hours": {
      "open": "11:00〜22:00",
      "closed": null,
      "note": "L.O.21:30・無休"
    }
  },
  "r117": {
    "id": "r117",
    "name": "しろいぬカフェ",
    "area": "千葉県松戸市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7962,
    "lng": 139.9757,
    "hours": {
      "open": "10:00〜19:00",
      "closed": null,
      "note": "年中無休・駐車場100台"
    }
  },
  "r118": {
    "id": "r118",
    "name": "ドッグテラス アミエル&カフェ（三浦海岸）",
    "area": "神奈川県横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1547,
    "lng": 139.6317,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水・木曜定休",
      "note": "実際の所在地は油壺エリア（諸磯）"
    }
  },
  "r119": {
    "id": "r119",
    "name": "Dessert&Cafe BlueMoon",
    "area": "神奈川県横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1938,
    "lng": 139.6645,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "月曜・第2火曜定休",
      "note": "津久井浜駅徒歩8分・R134沿い"
    }
  },
  "r120": {
    "id": "r120",
    "name": "ドッグカフェわんこじゃん三浦海岸",
    "area": "神奈川県横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1508,
    "lng": 139.6681,
    "hours": {
      "open": "10:30〜17:00",
      "closed": "水曜定休",
      "note": "土日は〜19:00"
    }
  },
  "r121": {
    "id": "r121",
    "name": "Bayside Cafe",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1891,
    "lng": 139.6578,
    "hours": {
      "open": "10:00〜19:00",
      "closed": null,
      "note": "カフェ&コワーキング「BAYSIDE SHARE」内"
    }
  },
  "r124": {
    "id": "r124",
    "name": "BIOTOPIA Café Saint-Jacques",
    "area": "神奈川県松田町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3373,
    "lng": 139.159,
    "hours": {
      "open": "9:30〜17:00",
      "closed": null,
      "note": "ランチ11:30〜14:00・年末年始休"
    }
  },
  "r126": {
    "id": "r126",
    "name": "和カフェ 夢宇",
    "area": "埼玉県川越市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.9196,
    "lng": 139.4864,
    "hours": {
      "open": "11:00〜16:30",
      "closed": "月・火曜定休",
      "note": "L.O.16:00・祝日は営業"
    }
  },
  "r127": {
    "id": "r127",
    "name": "コエド ボナペティ",
    "area": "埼玉県川越市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.925,
    "lng": 139.4798,
    "hours": {
      "open": "11:00〜15:00",
      "closed": null,
      "note": "金土日祝はディナー17:30〜21:00も営業"
    }
  },
  "r128": {
    "id": "r128",
    "name": "施設内レストラン（ワンズガーデン等）",
    "area": "千葉県八街市",
    "policy": "店内OK",
    "leadOK": true
  },
  "r129": {
    "id": "r129",
    "name": "クチーナ・トキオネーゼ・コジマ",
    "area": "千葉県八街市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.7189,
    "lng": 140.3128,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "日曜定休",
      "note": "ディナー17:30〜21:30もあり"
    }
  },
  "r130": {
    "id": "r130",
    "name": "プレールカフェ",
    "area": "千葉県八街市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.7066,
    "lng": 140.2978,
    "hours": {
      "open": "11:30〜17:00",
      "closed": "月・火曜定休",
      "note": "売り切れ次第終了・時期により金土日のみの場合あり"
    }
  },
  "r132": {
    "id": "r132",
    "name": "Dogs Garden WILDPARK",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.4395,
    "lng": 138.8556,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "火・水曜定休",
      "note": "ドッグラン2面併設・大型犬歓迎"
    }
  },
  "r133": {
    "id": "r133",
    "name": "ほうとう さんさい",
    "area": "山梨県山中湖村",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.4232,
    "lng": 138.8492,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "火曜定休",
      "note": "夏季と年末年始は無休・冬は短縮"
    }
  },
  "r134": {
    "id": "r134",
    "name": "和食だワン",
    "area": "静岡県伊東市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.8783,
    "lng": 139.112,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "水曜定休",
      "note": "ディナー17:30〜21:00（日曜夜休）"
    }
  },
  "r135": {
    "id": "r135",
    "name": "福茶's curry",
    "area": "静岡県伊東市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.8853,
    "lng": 139.0967,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "火・水曜定休",
      "note": "L.O.15:30・不定休あり"
    }
  },
  "r136": {
    "id": "r136",
    "name": "Cafe CANDY",
    "area": "静岡県伊東市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.8876,
    "lng": 139.127,
    "hours": {
      "open": "11:00〜17:00",
      "closed": "水・木曜定休",
      "note": "L.O.16:00・祝日は営業"
    }
  },
  "r057": {
    "id": "r057",
    "name": "アクアマーレ（横須賀美術館内）",
    "area": "神奈川県横須賀市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2598,
    "lng": 139.7383,
    "hours": {
      "open": "11:00〜21:30",
      "closed": "月曜定休",
      "note": "ランチ〜15:00/ディナー16:00〜。GW・お盆は月曜も営業"
    }
  },
  "r137": {
    "id": "r137",
    "name": "cafe WILD CHICKEN",
    "area": "神奈川県清川村",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5266,
    "lng": 139.2255,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "月・木曜定休",
      "note": "祝日は営業（翌火曜振替・金曜は営業）。丹沢滋黒軍鶏の直営カフェ・無料ドッグラン併設"
    }
  },
  "r138": {
    "id": "r138",
    "name": "絆（朴葉焼き）",
    "area": "神奈川県清川村",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5241,
    "lng": 139.2236,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "不定休",
      "note": "朴葉焼き定食5種。ペットOKの中庭を囲む店群のひとつで、他店の料理も持ち寄り可"
    }
  },
  "r139": {
    "id": "r139",
    "name": "AKIYA blue green",
    "area": "神奈川県横須賀市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.2401,
    "lng": 139.5994,
    "hours": {
      "open": "11:00〜21:00",
      "closed": "基本金・土・日のみ営業",
      "note": "営業日変動あり・Instagram（@bluegreen_134）要確認。熟成肉100%バーガーの古民家カフェ。犬は店内OK（飼い主確認）"
    }
  },
  "r140": {
    "id": "r140",
    "name": "喫茶ZiZi",
    "area": "千葉県君津市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3437,
    "lng": 139.8591,
    "hours": {
      "open": "10:00〜18:00",
      "closed": "木曜定休",
      "note": "7〜9月は平日11:00〜19:00・土日祝10:00〜20:00。庭スタイル（1人500円ドリンクバー付き・庭内ノーリード可）。夏限定の犬用プールあり→水遊びスポットとしても掲載中"
    }
  },
  "r141": {
    "id": "r141",
    "name": "有魚亭",
    "area": "神奈川県三浦市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.1406,
    "lng": 139.6189,
    "hours": {
      "open": "11:30〜18:30",
      "closed": "火曜定休（祝日は翌日）",
      "note": "店内全席OK・大型犬可（椅子はカフェマット使用）。裏にドッグラン・マグロほぐし身のサービスあり・無料駐車場"
    }
  },
  "r142": {
    "id": "r142",
    "name": "BAYSIDE CAFE（三浦海岸）",
    "area": "神奈川県三浦市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.1883,
    "lng": 139.6573,
    "hours": {
      "open": "10:00〜20:00",
      "closed": null,
      "note": "年中無休。カフェ＆コワーキング併設のオープンデッキ。店内可とする情報もあり（情報が分かれるため要確認・確認日2026-08-03）"
    }
  },
  "r143": {
    "id": "r143",
    "name": "しらすと伊勢海老の忠兵衛",
    "area": "神奈川県藤沢市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.3086,
    "lng": 139.4858,
    "hours": {
      "open": "平日11:00〜17:00",
      "closed": "無休（年末除く）",
      "note": "土日祝は〜21:00。公式表記は小型犬のみ店内可（首輪・リード必須）——中型犬は要事前確認（飼い主は訪問実績あり）。片瀬江ノ島駅徒歩2分"
    }
  },
  "r144": {
    "id": "r144",
    "name": "龍宮堂（ジェラート）",
    "area": "神奈川県小田原市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.2474,
    "lng": 139.1608,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木曜定休",
      "note": "〜18:00の情報もあり（季節変動か・要確認）。かまぼこ通りの手作りジェラート店。犬用ジェラートあり・看板犬トイプードルのメロウちゃん・駐車場なし"
    }
  },
  "r145": {
    "id": "r145",
    "name": "堂ヶ島食堂",
    "area": "静岡県西伊豆町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 34.7818,
    "lng": 138.7685,
    "hours": {
      "open": "11:00〜16:00",
      "closed": "木曜定休（不定休あり）",
      "note": "L.O.15:30。1階に犬同伴専用スペース（半個室・予約不可・混雑時は待ちあり）"
    }
  },
  "r146": {
    "id": "r146",
    "name": "いなろ食堂",
    "area": "静岡県沼津市",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.0823,
    "lng": 138.8577,
    "hours": {
      "open": "11:00〜15:00",
      "closed": "水曜定休",
      "note": "土日はネタ切れ次第終了（営業時間は情報揺れあり・要確認）。犬は1階＋テラスのみ・大型犬可。沼津港の裏路地"
    }
  },
  "r147": {
    "id": "r147",
    "name": "キャンティ・コモ（山中湖）",
    "area": "山梨県山中湖村",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.4173,
    "lng": 138.8562,
    "hours": {
      "open": "11:30〜23:00",
      "closed": null,
      "note": "年中無休・土日祝11:00開店。犬OKはテラス約40席のみで、悪天時と冬季（11月下旬〜GW頃）はテラス閉鎖＝犬連れは春〜秋限定"
    }
  },
  "r148": {
    "id": "r148",
    "name": "甲州ほうとう完熟屋 河口湖店",
    "area": "山梨県富士河口湖町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.5233,
    "lng": 138.7698,
    "hours": {
      "open": "11:00〜20:00",
      "closed": null,
      "note": "通し営業・年中無休（公式）。テラスは富士山が見える開放型・大型犬可・リード必須"
    }
  },
  "r149": {
    "id": "r149",
    "name": "浅間茶屋 富士吉田本店",
    "area": "山梨県富士吉田市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.4704,
    "lng": 138.7934,
    "hours": {
      "open": "11:00〜16:30",
      "closed": "水曜定休",
      "note": "L.O.16:00。犬OKは専用ドッグテラス席のみだが冷暖房完備の全天候インナーテラス（屋根・壁あり）で真夏も快適・超大型犬可。北口本宮冨士浅間神社そば"
    }
  },
  "r150": {
    "id": "r150",
    "name": "マシマシ高菜先生食堂 河口湖店",
    "area": "山梨県富士河口湖町",
    "policy": "店内OK",
    "leadOK": null,
    "lat": 35.4926,
    "lng": 138.7679,
    "hours": {
      "open": "平日10:30〜15:30",
      "closed": "不定休",
      "note": "土日祝10:30〜17:00・営業日は公式SNSで告知。二郎系吉田のうどん専門店。ペット可だが同伴形態の公式明記なし（飼い主は訪問実績あり・確認日2026-08-03）"
    }
  },
  "r151": {
    "id": "r151",
    "name": "手打そば きり山",
    "area": "東京都青梅市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.804,
    "lng": 139.1767,
    "hours": {
      "open": "11:00〜19:00",
      "closed": "水曜・第3火曜定休",
      "note": "12〜2月の平日は〜17:00。渓谷を見下ろすテラスあり・犬OKは青梅市観光協会明記（店内可否は未確認）。御嶽駅徒歩8分"
    }
  },
  "r152": {
    "id": "r152",
    "name": "府中餃子バル あわ屋",
    "area": "東京都府中市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.6706,
    "lng": 139.4773,
    "hours": {
      "open": "平日17:00〜23:30",
      "closed": "不定休",
      "note": "土日祝は14:00〜。テラスは冬季ビニールカーテン＋暖房の半屋内型。犬用メニュー（味付けなし肉）あり。府中駅徒歩5分"
    }
  },
  "r153": {
    "id": "r153",
    "name": "Pizzeria 高田牧舎",
    "area": "東京都新宿区",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.7079,
    "lng": 139.7203,
    "hours": {
      "open": "11:30〜14:45",
      "closed": "不定休",
      "note": "ディナー17:30〜21:45。犬は一部席のみ・要予約。犬用メニュー・バースデーケーキ（要予約）あり。1905年創業・早稲田大学南門前"
    }
  },
  "r154": {
    "id": "r154",
    "name": "ビラパワ",
    "area": "埼玉県皆野町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 36.0845,
    "lng": 139.1025,
    "hours": {
      "open": "10:50〜15:00",
      "closed": "土日のみ営業",
      "note": "旧蚕室の古民家を改装した薪窯ピザ店。上長瀞駅徒歩約18分"
    }
  },
  "r155": {
    "id": "r155",
    "name": "農園レストラン TAKO・HISTORIA 871",
    "area": "千葉県多古町",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.7882,
    "lng": 140.4518,
    "hours": {
      "open": "11:30〜15:00",
      "closed": "月曜定休（祝日は翌火曜）",
      "note": "ディナー17:00〜22:00。パラソル日除けの開放型テラス・大型犬可。自家農園野菜＋薪窯ピザ。成田空港から車約10分"
    }
  },
  "r156": {
    "id": "r156",
    "name": "GAKU NO TOBOE",
    "area": "神奈川県藤沢市",
    "policy": "テラスのみ",
    "leadOK": true,
    "lat": 35.3853,
    "lng": 139.4659,
    "hours": {
      "open": "水木10:00〜15:00",
      "closed": "月・火曜定休",
      "note": "金土12:00〜20:00・日祝10:00〜17:00（変動あり・公式カレンダー確認）。屋根・壁・冷暖房完備のインナーテラスで全天候OK。アルゼンチン料理（エンパナーダ）・駐車場3台"
    }
  },
  "r157": {
    "id": "r157",
    "name": "海鮮ほうとう専門店 ほうとう研究所",
    "area": "山梨県富士河口湖町",
    "policy": "店内OK",
    "leadOK": true,
    "lat": 35.5193,
    "lng": 138.7723,
    "hours": {
      "open": "11:00〜21:00",
      "closed": null,
      "note": "年中無休・L.O.20:00。犬OK棟「with DOGS」あり（冷暖房完備の室内席＋テラス席）。犬用ほうとう（無塩・鶏ささみ）と駐車場奥にドッグランも"
    }
  }
};

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
  },
  {
    "name": "東扇島東公園（かわさきの浜）",
    "area": "神奈川県川崎市川崎区",
    "reason": "人工海浜へのペット連れ込み禁止（川崎市公式明文・確認日2026-08-03）。園内ドッグラン「わんわん広場」は事前登録制で利用可",
    "type": "入水禁止"
  },
  {
    "name": "海の公園",
    "area": "神奈川県横浜市金沢区",
    "reason": "海水浴場開設期間中（7月中旬〜8月末）は砂浜へのペット立入禁止（公式明文）。期間外の砂浜散歩は可・園内に無料ドッグラン「犬の遊び場」あり",
    "type": "夏季NG"
  },
  {
    "name": "伊豆ぐらんぱる公園",
    "area": "静岡県伊東市",
    "reason": "犬の入園は公式OK（リード1m以内）だが、夏季水遊びゾーン「ウォーターランドぷるぷる」はペット入場禁止（公式明文・確認日2026-08-03）",
    "type": "水遊びNG"
  },
  {
    "name": "龍宮窟・田牛",
    "area": "静岡県下田市",
    "reason": "龍宮窟内は遊泳禁止（公式）。犬連れ観光は第三者情報で可とされるが、駐車場が約10台のみ（夏季1,500円）で水遊びスポットとしては不向き",
    "type": "水遊び不向き"
  },
  {
    "name": "御浜海水浴場（戸田）",
    "area": "静岡県沼津市",
    "reason": "犬の同伴可否の情報が公式・第三者とも見当たらない（確認日2026-08-03）。掲載前に沼津市観光戦略課（055-934-4746）への確認が必要",
    "type": "可否不明"
  },
  {
    "name": "酒匂海岸",
    "area": "神奈川県小田原市",
    "reason": "外洋に面したサーフで波が立ちやすく、犬の水遊びには不向き（海水浴場ではない）。入水可否の公式明文もなし",
    "type": "水遊び不向き"
  },
  {
    "name": "塔のへつり",
    "area": "福島県下郷町",
    "reason": "渓谷の淵（大川）で浅瀬の水遊び場ではない。犬・ペットに関する公式明文もなし（確認日2026-08-03）。観光名所としては吊り橋を渡るルート",
    "type": "水遊び不向き"
  },
  {
    "name": "昇仙峡",
    "area": "山梨県甲府市",
    "reason": "犬連れ散策は第三者情報で可とされ公営無料駐車場もあるが、水辺に降りられる場所の裏付けが取れず（確認日2026-08-03）。渓谷さんぽ先としては候補",
    "type": "水遊び根拠なし"
  },
  {
    "name": "陽だまりドッグラン",
    "area": "静岡県静岡市清水区",
    "reason": "全面天然芝のドッグランでプール等の水遊び設備の情報なし（確認日2026-08-03・要電話確認）",
    "type": "プールなし"
  }
];

/* 夜さんぽスポット（🌙モード用・2026年8月調査） */
const NIGHT_SPOTS = [
  {
    "id": "futako-rise",
    "name": "二子玉川ライズ リボンストリート",
    "category": "mall",
    "area": "東京都世田谷区",
    "lat": 35.6127,
    "lng": 139.6266,
    "elevation_m": 12,
    "driveMin": 20,
    "night": {
      "lighting": "多い",
      "vibe": "駅〜テラスマーケット〜二子玉川公園へ続く屋外通路は夜も照明が続き川風が抜ける。犬連れ率が非常に高い街",
      "note": "屋外部はリード歩行OK・館内はカート/キャリー。河川敷は無照明区間があるため夜はライズ側の明るい園路までに"
    },
    "parking": [
      {
        "name": "二子玉川ライズP4駐車場",
        "fee": "30分300円（平日初回30分無料）",
        "hours": "24時間入出庫可",
        "note": "夜間もっとも確実"
      },
      {
        "name": "二子玉川ライズP3駐車場",
        "fee": "30分300円",
        "hours": "7:00〜25:30",
        "note": "400台と大きい・最終出庫25:30"
      }
    ],
    "restaurants": [
      {
        "name": "マヨルカ 二子玉川",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "9:00〜22:00",
          "closed": null,
          "note": "L.O.21:30"
        },
        "note": "テラスマーケット2F・テラスに暖房/扇風設備"
      },
      {
        "name": "アジアンビストロDai 二子玉川店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": "不定休",
          "note": ""
        },
        "note": "大型犬OK"
      },
      {
        "name": "bills 二子玉川",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "8:30〜21:00",
          "closed": null,
          "note": ""
        },
        "note": "20時台までなら利用可"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装デッキ・石畳＋河川敷園路"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "屋外通路は終日通行可・店舗は〜22/23時"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Futako-Tamagawa%20Rise%20Shopping%20Center%20terrace%20market%202018.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.rise.sc/",
      "label": "二子玉川ライズ公式"
    },
    "notes": "川崎から最短の夜スポット。「夜テラス飯＋川風さんぽ」の最有力。無照明の河川敷区間には入らないこと"
  },
  {
    "id": "akarenga-marine-walk",
    "name": "赤レンガ倉庫〜MARINE & WALK YOKOHAMA",
    "category": "mall",
    "area": "横浜市中区新港",
    "lat": 35.4536,
    "lng": 139.6449,
    "elevation_m": 3,
    "driveMin": 25,
    "night": {
      "lighting": "多い",
      "vibe": "赤レンガのライトアップと海沿いプロムナード。夜遅くまで観光客が多く犬連れ散歩の定番",
      "note": "MARINE&WALKは屋外全域リード散歩OK（公式）。リードホルダー付ベンチ・ペット用水飲み場あり。店舗は22時まで"
    },
    "parking": [
      {
        "name": "タイムズMARINE&WALK（コインP）",
        "fee": "10分330円・夜間最大1,400円（19時〜翌8時）",
        "hours": "6:00〜24:00（最終出庫24:00厳守）",
        "note": "24時をまたぐなら山下公園駐車場へ"
      },
      {
        "name": "山下公園駐車場",
        "fee": "30分260円〜",
        "hours": "24時間入出庫可",
        "note": "深夜まで歩くならこちらが安全"
      }
    ],
    "restaurants": [
      {
        "name": "焼肉うしすけ／コリアンうしすけ（MARINE&WALK 2F）",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "L.O.21:00"
        },
        "note": "徒歩0分。全席犬同伴可・犬用メニューあり"
      },
      {
        "name": "ブッチャー・リパブリック 横浜赤レンガ",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "ペット席は要事前確認"
        },
        "note": "徒歩3分・シカゴピザ＆ビア。夜景テラス"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装（ウッドデッキ・石畳）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "屋外プロムナードは終夜通行可・店舗は22時まで"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Yokohama%20Red%20Brick%20Warehouse%202012.JPG?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://marineandwalk.jp/",
      "label": "MARINE&WALK公式"
    },
    "notes": "「散歩＋夕食」を1か所で完結できる夜さんぽ最強コース。山下公園まで海沿いを往復するのも良い"
  },
  {
    "id": "rinko-park",
    "name": "臨港パーク（みなとみらい）",
    "category": "park",
    "area": "横浜市西区みなとみらい",
    "lat": 35.4599,
    "lng": 139.6371,
    "elevation_m": 2,
    "driveMin": 25,
    "night": {
      "lighting": "普通",
      "vibe": "海沿い芝生公園。夜もランナーと犬の散歩客が行き交い、ベイブリッジと港の夜景が正面",
      "note": "24時間開放・無料。芝生広場の内側は暗めなので海沿い園路中心に"
    },
    "parking": [
      {
        "name": "みなとみらい公共駐車場（パシフィコ横浜）",
        "fee": "平日最大1,600円・土日祝最大2,100円",
        "hours": "24時間営業",
        "note": "出庫24時間可で夜さんぽ向き"
      },
      {
        "name": "臨港パーク駐車場",
        "fee": "30分250円",
        "hours": "入庫8:00〜21:00",
        "note": "⚠️閉門が早いため夜は公共駐車場推奨"
      }
    ],
    "restaurants": [
      {
        "name": "KUA`AINA 横浜ベイクォーター店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": ""
        },
        "note": "車約7分・ハワイアンバーガー"
      },
      {
        "name": "焼肉うしすけ MARINE&WALK店",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "L.O.21:00"
        },
        "note": "車約5分・全席犬同伴可"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装＋広い芝生"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "24時間開放・海沿い園路に照明"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Rinko%20Park%20Yokohama.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.pacifico.co.jp/",
      "label": "パシフィコ横浜"
    },
    "notes": "山下公園より人が少なめで、落ち着いて歩きたい夜向き。芝生で涼みながら夜景を眺められる"
  },
  {
    "id": "odaiba-kaihin-park",
    "name": "お台場海浜公園",
    "category": "park",
    "area": "東京都港区台場",
    "lat": 35.6297,
    "lng": 139.7745,
    "elevation_m": 3,
    "driveMin": 25,
    "night": {
      "lighting": "多い",
      "vibe": "レインボーブリッジ・東京タワーの夜景が正面。デックス前プロムナードは照明が明るく夜も観光客が多い",
      "note": "終日開放・リード必須。砂浜沿いの散歩OK。海風で夏夜も涼しい"
    },
    "parking": [
      {
        "name": "お台場海浜公園北口駐車場",
        "fee": "1時間400円・24時間最大2,000円",
        "hours": "24時間入出庫可",
        "note": "244台"
      },
      {
        "name": "お台場海浜公園中央駐車場",
        "fee": "1時間400円〜",
        "hours": "24時間入出庫可",
        "note": "ビーチ中央に近い"
      }
    ],
    "restaurants": [
      {
        "name": "肉菜工房うしすけ デックス東京ビーチ店",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "平日は15〜17時休憩あり"
        },
        "note": "徒歩3分・焼肉。全席ペットOK・犬用メニューあり"
      },
      {
        "name": "BISTROうしすけ（デックス東京ビーチ）",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "テラス10席あり"
        },
        "note": "徒歩3分・ビストロ。夜景テラス"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装プロムナード＋砂浜"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "終日開放。照明はデックス前が最も明るい"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Odaiba%20Marine%20Park%20at%20night%2020070523.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.tptc.co.jp/park/01_02",
      "label": "海上公園なび"
    },
    "notes": "川崎から湾岸線で意外と近い。夜景のスケールは随一。花火・イベント日は混雑注意"
  },
  {
    "id": "yamashita-park",
    "name": "山下公園",
    "category": "park",
    "area": "横浜市中区",
    "lat": 35.4443,
    "lng": 139.6493,
    "elevation_m": 3,
    "driveMin": 30,
    "night": {
      "lighting": "多い",
      "vibe": "海沿い約750mのプロムナード。夜も観光客や散歩客が多く犬連れが自然。氷川丸・ベイブリッジのライトアップ",
      "note": "24時間開放・リード必須。園路照明ありだが芝生の内側はやや暗め。夏は海風が抜けて涼しい"
    },
    "parking": [
      {
        "name": "山下公園駐車場",
        "fee": "平日30分260円・土日祝30分300円（平日24時間最大2,080円）",
        "hours": "24時間入出庫可",
        "note": "公園地下で最も至近"
      }
    ],
    "restaurants": [
      {
        "name": "THE WHARF HOUSE 山下公園",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "18:00〜22:00",
          "closed": "不定休",
          "note": "カフェは9:00〜18:00・BBQは4〜10月"
        },
        "note": "公園内・徒歩0分。ペットOKテラスでBBQ可"
      },
      {
        "name": "焼肉うしすけ MARINE&WALK店",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": "L.O.21:00"
        },
        "note": "車約7分・焼肉。全席犬同伴可・犬用メニューあり"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装＋芝生"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園は24時間開放・照明あり"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/View%20of%20Port%20of%20Yokohama%20from%20Yamashita%20Park%20at%20night.JPG?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.city.yokohama.lg.jp/kurashi/machizukuri-kankyo/midori-koen/koen/daihyo/kouen007.html",
      "label": "横浜市公式"
    },
    "notes": "夜さんぽの王道。中華街側から入ると人通りが途切れない。氷川丸前は海風が最も涼しい"
  },
  {
    "id": "toyosu-gururi-park",
    "name": "豊洲ぐるり公園",
    "category": "park",
    "area": "東京都江東区豊洲",
    "lat": 35.6455,
    "lng": 139.7858,
    "elevation_m": 3,
    "driveMin": 30,
    "night": {
      "lighting": "普通",
      "vibe": "豊洲ふ頭を一周する海沿い園路。夜もランナー・釣り人・犬の散歩客が絶えない。レインボーブリッジ・東京タワーの夜景",
      "note": "24時間開放。園内の「豊洲ぐるりドッグラン」も会員登録制で基本24時間・夜間照明あり（登録はアプリWan!Pass等）"
    },
    "parking": [
      {
        "name": "豊洲ぐるり公園駐車場",
        "fee": "1時間400円（最大料金なし）",
        "hours": "24時間入出庫可",
        "note": "38台。長時間は周辺コインP併用が安い"
      },
      {
        "name": "ららぽーと豊洲駐車場",
        "fee": "買物金額に応じ無料あり",
        "hours": "夜間出庫は要確認",
        "note": "食事利用時に便利"
      }
    ],
    "restaurants": [
      {
        "name": "Les deux Bleue ららぽーと豊洲店",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "L.O.22:00"
        },
        "note": "徒歩圏・ドッグカフェ＆洋食。店内・海側テラスとも犬OK・犬用メニュー充実"
      },
      {
        "name": "ビストロ石川亭（豊洲）",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "17:00〜22:00",
          "closed": null,
          "note": "小型犬のみ店内可・コーギーはテラス"
        },
        "note": "車5分・フレンチビストロ"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装園路＋芝生"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "公園・ドッグランとも24時間利用可（ドッグランは要会員登録）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Toyosu%20Gururi%20Park.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://toyosugururi.jp/",
      "label": "豊洲ぐるりパーク公式"
    },
    "notes": "「24時間使えるドッグラン＋夜景さんぽ」が揃う稀有なスポット。夜間はドッグランが空いていて貸切状態のことも"
  },
  {
    "id": "shin-yokohama-dogrun",
    "name": "新横浜公園ドッグラン（サマーナイト営業）",
    "category": "dogrun",
    "area": "横浜市港北区",
    "lat": 35.5107,
    "lng": 139.6055,
    "elevation_m": 6,
    "driveMin": 30,
    "night": {
      "lighting": "普通",
      "vibe": "日産スタジアム隣の大型ドッグラン。夏季は夕方〜夜営業に切り替わり涼しい時間に走らせられる",
      "note": "サマーシーズン（7/1〜9/30）は15:00〜21:00営業・受付20:00まで。開催は水・木・土・日（祝日は開催）。要利用登録（年1,200円）＋1回500円・ワクチン証明持参"
    },
    "parking": [
      {
        "name": "新横浜公園第2駐車場",
        "fee": "2時間400円・以降30分100円",
        "hours": "7:00〜22:00",
        "note": "⚠️22時閉門・出庫不可に注意。ランに最も近い"
      },
      {
        "name": "タイムズ日産スタジアム（コインP）",
        "fee": "20分100円・深夜60分100円",
        "hours": "24時間入出庫可",
        "note": "22時を過ぎる可能性がある日はこちら"
      }
    ],
    "restaurants": [
      {
        "name": "ノンダクレール（新横浜駅徒歩4分）",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "17:00〜23:00",
          "closed": "不定休",
          "note": "要事前確認"
        },
        "note": "車10分・ビストロ/タパス"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "土・芝"
    },
    "hours": {
      "open": "15:00〜21:00",
      "closed": "月・火・金（祝日を除く）",
      "note": "7/1〜9/30のサマーシーズンのみ夜営業。10〜6月は9:30〜17:30"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20International%20Stadium%20Yokohama.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.nissan-stadium.jp/shinyoko-park/dogrun.php",
      "label": "新横浜公園公式"
    },
    "notes": "川崎から下道でも行きやすい。夏限定の夜ドッグランとして貴重。初回は営業時間内に登録手続きが必要"
  },
  {
    "id": "komazawa-park",
    "name": "駒沢オリンピック公園",
    "category": "park",
    "area": "東京都世田谷区",
    "lat": 35.6262,
    "lng": 139.6617,
    "elevation_m": 36,
    "driveMin": 30,
    "night": {
      "lighting": "多い",
      "vibe": "夜もランナー・犬連れが多く、外周ジョグコース沿いは街灯が続き歩きやすい",
      "note": "常時開園。ドッグラン（約1,200㎡・中大型/小型エリア分離）は24時間利用可で外灯あり。都立ドッグラン共通の事前Web登録制"
    },
    "parking": [
      {
        "name": "駒沢オリンピック公園第一・第二駐車場",
        "fee": "1時間400円・12時間最大1,600円",
        "hours": "24時間入出庫可",
        "note": "第二駐車場がドッグラン隣接"
      }
    ],
    "restaurants": [
      {
        "name": "MUNYA",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "18:00〜24:00",
          "closed": "不定休",
          "note": "土日は12時〜"
        },
        "note": "大型犬も店内OK。夜遅くまで使える貴重な1軒"
      },
      {
        "name": "駒沢食堂 george",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "L.O.22:00"
        },
        "note": "公園至近の和食堂・大型犬OK"
      },
      {
        "name": "アジアンビストロDai 駒沢店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "平日は15〜17時休憩"
        },
        "note": "大型犬OK"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装ジョグコース＋ドッグランは土系"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "常時開園・ドッグランも24時間（要Web登録）"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Komazawa%20Olympic%20Park%2010.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.tokyo-park.or.jp/park/komazawa-olympic/",
      "label": "都立公園公式"
    },
    "notes": "夜間利用実績が最も豊富な都内の定番。ドッグラン24時間＋駐車場24時間"
  },
  {
    "id": "grandberry-park",
    "name": "南町田グランベリーパーク",
    "category": "mall",
    "area": "東京都町田市",
    "lat": 35.5095,
    "lng": 139.47,
    "elevation_m": 78,
    "driveMin": 40,
    "night": {
      "lighting": "多い",
      "vibe": "屋外型モールで通路照明・店舗の灯りが夜まで続く。犬連れ比率が非常に高く「犬の街」的な雰囲気",
      "note": "物販は20時頃閉店だが飲食は22時頃まで営業し、屋外通路（パセオ）は明るく歩ける。1F共用部はリードOK（2FはカートORバッグ）"
    },
    "parking": [
      {
        "name": "グランベリーパーク駐車場（約2,000台）",
        "fee": "30分250円・平日2時間無料/土日祝1時間無料＋買物割引",
        "hours": "8:00〜24:00（最終出庫24:00）",
        "note": "犬連れは駐車場Cのエレベーターがリードのまま利用可"
      }
    ],
    "restaurants": [
      {
        "name": "WIRED KITCHEN",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "10:00〜22:00",
          "closed": null,
          "note": "フードL.O.21:00"
        },
        "note": "店内に愛犬同伴専用エリアあり・ドッグメニューあり"
      },
      {
        "name": "BEER&CAFE つるま食堂（鶴間公園内）",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜21:00",
          "closed": "月曜定休（祝日は翌日）",
          "note": "火〜木は〜20:00"
        },
        "note": "犬用おやつメニューあり"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装（屋外通路・ウッドデッキ）"
    },
    "hours": {
      "open": "10:00〜22:00",
      "closed": null,
      "note": "飲食は22時まで。ペットトイレ・足洗い場は10:00-20:00"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Minami-machida%20Grandberry%20Park%20Station%202020%20-%2001.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://gbp.minamimachida-grandberrypark.com/",
      "label": "グランベリーパーク公式"
    },
    "notes": "川崎から246経由で最短級の内陸候補。標高約80mで海沿いよりやや涼しい。夕食を絡めた夜さんぽに最適"
  },
  {
    "id": "roka-dogrun",
    "name": "蘆花恒春園 都立ドッグラン",
    "category": "dogrun",
    "area": "東京都世田谷区",
    "lat": 35.66,
    "lng": 139.611,
    "elevation_m": 42,
    "driveMin": 40,
    "night": {
      "lighting": "普通",
      "vibe": "武蔵野の面影が残る広いラン（約1,230㎡）。夜は利用者少なめで静か",
      "note": "利用は5:00〜22:00（11-5月は6時開場）。夜間照明は控えめなので日没直後〜21時台が現実的。要都立共通Web登録"
    },
    "parking": [
      {
        "name": "蘆花恒春園駐車場（42台）",
        "fee": "1時間400円・12時間最大1,600円",
        "hours": "24時間入出庫可",
        "note": "ランまで徒歩数分"
      }
    ],
    "restaurants": [
      {
        "name": "アジアンビストロDai 駒沢店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": ""
        },
        "note": "車約15分。周辺は夜の犬OK店が乏しく帰路の駒沢方面で"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "土・ウッドチップ"
    },
    "hours": {
      "open": "5:00〜22:00",
      "closed": null,
      "note": "22時完全撤収。火・木はボール遊びOK"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Roka-koshunen-dec1.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.tokyo-park.or.jp/park/rokakoshun-en/",
      "label": "都立公園公式"
    },
    "notes": "「24時間」ではなく22時までの点に注意。夜間照明が控えめなので反射リード等の装備推奨"
  },
  {
    "id": "yoyogi-park",
    "name": "代々木公園（外周＆園内さんぽ）",
    "category": "park",
    "area": "東京都渋谷区",
    "lat": 35.6712,
    "lng": 139.6949,
    "elevation_m": 32,
    "driveMin": 40,
    "night": {
      "lighting": "普通",
      "vibe": "常時開園で夜も入園可。外周は街灯とビルの明かりで歩きやすい",
      "note": "園内深部は消灯後暗いので夜は外周園路・ケヤキ並木側が現実的。ドッグランは24時間利用可（要都立共通Web登録）"
    },
    "parking": [
      {
        "name": "代々木公園駐車場",
        "fee": "1時間600円・12時間最大2,400円",
        "hours": "24時間入出庫可",
        "note": "夜は公園直結が安心"
      }
    ],
    "restaurants": [
      {
        "name": "nephew（富ヶ谷）",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "19:00〜24:00",
          "closed": "火曜夜休",
          "note": "昼は8:00〜17:00"
        },
        "note": "1階のみ犬OK・大型犬可。夜はバー営業"
      },
      {
        "name": "mimet（奥渋）",
        "policy": "店内OK",
        "leadOK": true,
        "hours": {
          "open": "17:00〜22:30",
          "closed": "水曜定休",
          "note": ""
        },
        "note": "大型犬OKのフレンチビストロ"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装園路＋土の広場"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "夜は外周ルート推奨"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Yoyogi%20Park%20exit.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.tokyo-park.or.jp/park/yoyogi/",
      "label": "都立公園公式"
    },
    "notes": "夜間閉鎖されない数少ない都心大規模公園。店内OKの夜営業店が徒歩圏に揃う"
  },
  {
    "id": "marunouchi-nakadori",
    "name": "皇居外苑〜丸の内仲通り",
    "category": "street",
    "area": "東京都千代田区",
    "lat": 35.679,
    "lng": 139.7623,
    "elevation_m": 3,
    "driveMin": 40,
    "night": {
      "lighting": "多い",
      "vibe": "石畳の仲通りは街路灯＋ショーウィンドウで終夜明るく、犬連れ散歩の定番。皇居外苑側は開けて風が通る",
      "note": "皇居外苑はリード着用・マナー順守で犬同伴可（終日開放）。和田倉噴水公園のライトアップは日没〜20:45"
    },
    "parking": [
      {
        "name": "周辺コインパーキング（大手町・有楽町側）",
        "fee": "夜間最大1,700円程度の設定あり",
        "hours": "24時間",
        "note": "夜間は最大料金の安い路外コインPが有利・現地看板要確認"
      },
      {
        "name": "新丸の内ビルディング駐車場",
        "fee": "1日最大2,750円",
        "hours": "9:00〜23:00",
        "note": "⚠️最終出庫23:00厳守"
      }
    ],
    "restaurants": [
      {
        "name": "GARB Tokyo（丸の内仲通り）",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "日祝は〜22:00"
        },
        "note": "仲通りに面したオープンテラスで犬OK"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "石畳・舗装歩道"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "店の明かりがある19〜22時台が快適"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/JP-Tokyo-Marunouchi-Nakadori(Street)-Night.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.env.go.jp/garden/kokyogaien/",
      "label": "環境省 皇居外苑"
    },
    "notes": "ビル風が抜けて夏夜は体感涼しめ。北の丸公園側は夜暗いので仲通り側中心で"
  },
  {
    "id": "ebina-vinawalk",
    "name": "ビナウォーク（海老名駅東口）",
    "category": "mall",
    "area": "神奈川県海老名市",
    "lat": 35.4518,
    "lng": 139.3921,
    "elevation_m": 18,
    "driveMin": 50,
    "night": {
      "lighting": "多い",
      "vibe": "駅前の屋外回廊型モール。通路・中央公園まわりは夜も照明と人通りが多く、犬連れイベントも開催される犬歓迎エリア",
      "note": "屋外通路はリード着用（短く持つ）で同伴可と公式明記。飲食棟は22時以降まで営業"
    },
    "parking": [
      {
        "name": "ビナウォーク第1〜第3駐車場",
        "fee": "60分600円・買物で無料サービスあり",
        "hours": "24時間営業（出庫24時間可）",
        "note": "第2駐車場（942台）が大型で使いやすい"
      }
    ],
    "restaurants": [
      {
        "name": "ラ・パウザ ビナウォーク海老名店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "テラス席のみ犬同伴可"
        },
        "note": "イタリアン。夜ごはん向き"
      },
      {
        "name": "スターバックス ビナウォーク海老名店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "7:00〜22:00",
          "closed": null,
          "note": ""
        },
        "note": "中央公園に面したテラス"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装（回廊・広場）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "物販21時・飲食22時以降まで。駐車場出庫24時間可"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/VINA%20WALK%20Ebina.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.odakyu-sc.com/vinawalk/",
      "label": "ビナウォーク公式"
    },
    "notes": "東名で約50分の内陸候補。マーキング・つなぎ留め禁止等のマナー規定あり。店内同伴可否は各店入口ステッカーで確認"
  },
  {
    "id": "enoshima-bentenbashi",
    "name": "江の島弁天橋〜島内参道",
    "category": "street",
    "area": "神奈川県藤沢市",
    "lat": 35.3063,
    "lng": 139.4813,
    "elevation_m": 3,
    "driveMin": 55,
    "night": {
      "lighting": "多い",
      "vibe": "夏は「江の島灯籠」（例年7月中旬〜8月末）で参道〜島内が18:00-20:30ライトアップ。夜も観光客が多く犬連れ散歩が自然",
      "note": "参道の店は20時前後に閉店が多い。橋上は海風が抜けて涼しい"
    },
    "parking": [
      {
        "name": "江の島なぎさ駐車場",
        "fee": "7-8月: 2時間820円〜・当日最大2,060円",
        "hours": "6:00〜21:00",
        "note": "⚠️21時完全閉場・最終出庫に注意"
      },
      {
        "name": "三井のリパーク片瀬3丁目（コインP）",
        "fee": "夜間最大（18時〜翌8時）550円",
        "hours": "24時間",
        "note": "21時以降まで滞在するならこちら。徒歩8分前後"
      }
    ],
    "restaurants": [
      {"ref": "r143", "note": "片瀬江ノ島駅徒歩2分。公式は小型犬店内可・中型は要確認"},
      {
        "name": "GARB 江ノ島",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜23:00",
          "closed": null,
          "note": "年中無休・ディナー17時〜"
        },
        "note": "片瀬海岸東浜。テラス・屋上ペットOK、江の島の夜景を見ながら食事可"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装（橋・石畳参道）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "灯籠ライトアップは20:30まで。公営駐車場利用なら20:45目安で切り上げ"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Enoshima%20Night%20View%20panorama.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.fujisawa-kanko.jp/",
      "label": "藤沢市観光公式"
    },
    "notes": "夜間の入水・波打ち際の遊泳はNG前提。弁天橋は歩車分離で安心。エスカー奥は階段が多いので参道往復が無難"
  },
  {
    "id": "shonan-tsite",
    "name": "湘南T-SITE（辻堂）",
    "category": "mall",
    "area": "神奈川県藤沢市",
    "lat": 35.3345,
    "lng": 139.4638,
    "elevation_m": 10,
    "driveMin": 55,
    "night": {
      "lighting": "多い",
      "vibe": "3棟の蔦屋書店とプロムナードが22時（3号館21時）まで営業。敷地内は犬連れ歓迎でリードフック常設",
      "note": "屋外プロムナードはリードで散歩可。館内はケージ/カートイン（1・2号館間でドッグカート無料貸出）"
    },
    "parking": [
      {
        "name": "湘南T-SITE駐車場（第1・第2）",
        "fee": "最初の1時間無料・買物で最大4時間無料",
        "hours": "8:00〜22:00",
        "note": "⚠️22時以降は出入庫不可"
      }
    ],
    "restaurants": [
      {
        "name": "スターバックス 湘南T-SITE店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "8:00〜22:00",
          "closed": null,
          "note": ""
        },
        "note": "夜のテラスが涼しく犬連れ定番"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装（プロムナード・ウッドデッキ）"
    },
    "hours": {
      "open": "8:00〜22:00",
      "closed": null,
      "note": "駐車場が22時までのため21:45目安で切り上げ"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Shonan%20t%20site%2001.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://store.tsite.jp/shonan/news/t-site/31307-2054440119.html",
      "label": "湘南T-SITE公式（犬連れ案内）"
    },
    "notes": "フラット舗装で猛暑夜でも歩きやすい。排尿時は水で流すマナー必須（公式明記）。江の島とハシゴしやすい"
  },
  {
    "id": "shichirigahama",
    "name": "七里ヶ浜 海岸プロムナード",
    "category": "street",
    "area": "神奈川県鎌倉市",
    "lat": 35.3053,
    "lng": 139.5153,
    "elevation_m": 4,
    "driveMin": 60,
    "night": {
      "lighting": "普通",
      "vibe": "R134沿い・飲食店の明かり＋江の島の夜景。bills前〜駐車場沿いは夜も人の出入りがある",
      "note": "海側遊歩道は街灯が疎らな区間もあるため、駐車場〜billsの明るい範囲を往復するのが安心"
    },
    "parking": [
      {
        "name": "七里ヶ浜海岸駐車場",
        "fee": "日中60分1,000円／夜間（23時〜5時）60分200円",
        "hours": "24時間営業",
        "note": "海岸至近で24時間出庫可。夜さんぽの拠点に最適"
      }
    ],
    "restaurants": [
      {
        "name": "bills 七里ヶ浜",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "7:00〜21:00",
          "closed": null,
          "note": "月曜は〜17:00・フードL.O.20:00"
        },
        "note": "テラス席のみ犬OK（1組1匹）・予約推奨"
      },
      {
        "name": "Pacific DRIVE-IN",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "8:00〜20:00",
          "closed": "不定休",
          "note": "閉店早め・要最新確認"
        },
        "note": "駐車場隣接のハワイアンドライブイン"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "舗装歩道＋砂浜（夜間の入水はNG）"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "駐車場24時間営業なので22時頃までゆっくり歩ける"
    },
    "photo": {
      "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Shichirigahama%20beach%20and%20Enoshima%202022-05.jpg?width=640",
      "credit": "Wikimedia Commons"
    },
    "official": {
      "url": "https://www.trip-kamakura.com/",
      "label": "鎌倉観光公式"
    },
    "notes": "海風が通り真夏夜でも比較的涼しい。R134の横断は信号で"
  },
  {
    "id": "green-springs",
    "name": "GREEN SPRINGS（立川）",
    "category": "mall",
    "area": "東京都立川市",
    "lat": 35.7053,
    "lng": 139.409,
    "elevation_m": 85,
    "driveMin": 60,
    "night": {
      "lighting": "多い",
      "vibe": "水盤とカスケードのある2Fデッキ広場が夜間ライトアップされ、水辺効果で体感涼しい",
      "note": "ほぼ全屋外エリアがリード歩行OK（公式ペットページあり）。屋外広場は常時開放・ペット用トイレ設置"
    },
    "parking": [
      {
        "name": "GREEN SPRINGS駐車場",
        "fee": "日中30分200円・夜間（22時〜8時）60分100円・24時間最大1,400円",
        "hours": "24時間入出庫可",
        "note": "夜間割安・店舗利用割引あり"
      }
    ],
    "restaurants": [
      {
        "name": "リザラン GREEN SPRINGS立川店",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": "不定休",
          "note": "ランチ〜16:30・ディナー17時〜"
        },
        "note": "スペイン料理。ペット専用メニューあり"
      },
      {
        "name": "アジアンビストロDai 立川",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜22:00",
          "closed": null,
          "note": ""
        },
        "note": "広いテラス・パラソル完備"
      },
      {
        "name": "100本のスプーン 立川",
        "policy": "テラスのみ",
        "leadOK": true,
        "hours": {
          "open": "11:00〜21:00",
          "closed": null,
          "note": ""
        },
        "note": "20時台まで"
      }
    ],
    "surface": {
      "shade": "夜間は不問",
      "ground": "ウッドデッキ・舗装広場"
    },
    "hours": {
      "open": "終日",
      "closed": null,
      "note": "屋外エリア常時開放・飲食は〜21/22時"
    },
    "official": {
      "url": "https://greensprings.jp/pet/",
      "label": "GREEN SPRINGSペット案内"
    },
    "notes": "多摩エリアの夜テラス最強格。犬OKテラス店が10店超。昭和記念公園は夜間閉園なので注意"
  }
];

/* 夜さんぽで掲載を見送った場所 */
const NIGHT_EXCLUDED = [
  {
    "name": "城南島海浜公園（つばさドッグラン）",
    "area": "東京都大田区",
    "reason": "駐車場が7:30〜21:00で夜間閉鎖され、ドッグラン・砂浜も夜間利用不可",
    "type": "夜間閉鎖"
  },
  {
    "name": "グランベリーパーク",
    "area": "東京都町田市",
    "reason": "屋外はリード同伴OKだが店舗が20時前後に閉店し、以降は人通りが少なく夜さんぽ基準を満たさない",
    "type": "夜間閉鎖"
  },
  {
    "name": "ららぽーと海老名",
    "area": "神奈川県海老名市",
    "reason": "ペットはカート/キャリー必須で、リード歩行の散歩は不可",
    "type": "犬NG"
  },
  {
    "name": "テラスモール湘南（辻堂）",
    "area": "神奈川県藤沢市",
    "reason": "館内はペット同伴買物不可。屋外通路はあるが飲食を絡めた夜さんぽが成立しにくい・21時閉館",
    "type": "犬NG"
  },
  {
    "name": "湘南夢わくわく公園ドッグラン",
    "area": "神奈川県茅ヶ崎市",
    "reason": "利用は7:00〜19:00で日没以降ほぼ使えない。要登録",
    "type": "夜間閉鎖"
  },
  {
    "name": "県立湘南海岸公園（鵠沼）の夜間砂浜",
    "area": "神奈川県藤沢市",
    "reason": "終日開放だが海の家消灯後は街灯が少なく夜間照明の確認が取れず。夜は江の島側プロムナード推奨",
    "type": "照明不足"
  },
  {
    "name": "グランツリー武蔵小杉 屋上庭園",
    "area": "川崎市中原区",
    "reason": "屋上庭園は17〜18時で閉鎖され日没後は使えない",
    "type": "夜間閉鎖"
  },
  {
    "name": "イオンレイクタウン",
    "area": "埼玉県越谷市",
    "reason": "館内の犬連れ歩行は禁止（ペテモ直通ルートのみ）。モール内散歩は不可・21時閉店",
    "type": "犬NG"
  },
  {
    "name": "多摩川河川敷の無照明区間（兵庫島公園周辺など）",
    "area": "世田谷区〜川崎市",
    "reason": "街灯のない区間が長く夜間はリスクが高い。夜は二子玉川ライズ側の照明園路のみ推奨",
    "type": "照明不足"
  },
  {
    "name": "皇居 北の丸公園（夜間）",
    "area": "東京都千代田区",
    "reason": "犬同伴可だが樹林が深く夜間照明が乏しい。夜は皇居外苑・仲通り側を推奨",
    "type": "照明不足"
  }
];
