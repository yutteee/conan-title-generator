{
    'use strict'

    const formerList = [
        {
          "former": "時計じかけ"
        },
        {
          "former": "14番目"
        },
        {
          "former": "世紀末"
        },
        {
          "former": "瞳の中"
        },
        {
          "former": "天国へ"
        },
        {
          "former": "ベイカー街"
        },
        {
          "former": "迷宮"
        },
        {
          "former": "銀翼"
        },
        {
          "former": "水平線上"
        },
        {
          "former": "探偵たち"
        },
        {
          "former": "紺碧"
        },
        {
          "former": "旋律"
        },
        {
          "former": "漆黒"
        },
        {
          "former": "天空"
        },
        {
          "former": "沈黙"
        },
        {
          "former": "11人目"
        },
        {
          "former": "絶海"
        },
        {
          "former": "異次元"
        },
        {
          "former": "業火"
        },
        {
          "former": "純黒"
        },
        {
          "former": "から紅"
        },
        {
          "former": "ゼロ"
        },
        {
          "former": "紺青"
        },
        {
          "former": "緋色"
        },
        {
          "former": "ハロウィン"
        },
        {
          "former": "群青"
        },
        {
          "former": "七彩"
        },
        {
          "former": "破砕"
        },
        {
          "former": "新緑"
        },
        {
          "former": "正鵠"
        },
        {
          "former": "銀世界"
        },
        {
          "former": "瑠璃色"
        },
        {
          "former": "虹"
        },
        {
          "former": "紅蓮"
        },
        {
          "former": "断罪"
        },
        {
          "former": "晴天"
        },
        {
          "former": "刹那"
        },
        {
          "former": "惨劇"
        },
        {
          "former": "邂逅"
        },
        {
          "former": "怨敵"
        },
        {
          "former": "偽り"
        },
        {
          "former": "亡霊達"
        },
        {
          "former": "禁断"
        },
        {
          "former": "戦慄"
        },
        {
          "former": "薄紅"
        },
        {
          "former": "青"
        },
        {
          "former": "鋼"
        },
        {
          "former": "半世紀へ"
        },
        {
          "former": "亡國"
        },
        {
          "former": "隻眼"
        },
        {
          "former": "追憶"
        },
        {
          "former": "深淵"
        },
        {
          "former": "白昼"
        },
        {
          "former": "口先"
        },
        {
          "former": "冥府"
        },
        {
          "former": "星空"
        },
        {
          "former": "宵"
        },
        {
          "former": "暁"
        },
        {
          "former": "英雄"
        },
        {
          "former": "奈落"
        },
        {
          "former": "眠り"
        },
        {
          "former": "月"
        },
        {
          "former": "大地"
        },
        {
          "former": "黒布"
        },
        {
          "former": "不変"
        },
        {
          "former": "永劫"
        },
        {
          "former": "黄昏"
        },
        {
          "former": "絶世"
        },
        {
          "former": "最期"
        },
        {
          "former": "預言者"
        },
        {
          "former": "灼熱"
        }
      ]

    const latterList = [
        {
          "latter": "摩天楼"
        },
        {
          "latter": "標的"
        },
        {
          "latter": "魔術師"
        },
        {
          "latter": "暗殺者"
        },
        {
          "latter": "カウントダウン"
        },
        {
          "latter": "亡霊"
        },
        {
          "latter": "十字路",
          "latterRuby": "クロスロード"
        },
        {
          "latter": "奇術師",
          "latterRuby": "マジシャン"
        },
        {
          "latter": "陰謀",
          "latterRuby": "ストラテジー"
        },
        {
          "latter": "鎮魂歌",
          "latterRuby": "レクイエム"
        },
        {
          "latter": "棺",
          "latterRuby": "ジョリー・ロジャー"
        },
        {
          "latter": "楽譜",
          "latterRuby": "フルスコア"
        },
        {
          "latter": "追跡者",
          "latterRuby": "チェイサー"
        },
        {
          "latter": "難破船",
          "latterRuby": "ロスト・シップ"
        },
        {
          "latter": "15分",
          "latterRuby": "クォーター"
        },
        {
          "latter": "ストライカー"
        },
        {
          "latter": "探偵",
          "latterRuby": "プライベート・アイ"
        },
        {
          "latter": "狙撃手",
          "latterRuby": "スナイパー"
        },
        {
          "latter": "向日葵"
        },
        {
          "latter": "悪夢",
          "latterRuby": "ナイトメア"
        },
        {
          "latter": "恋歌",
          "latterRuby": "ラブレター"
        },
        {
          "latter": "執行人"
        },
        {
          "latter": "拳",
          "latterRuby": "フィスト"
        },
        {
          "latter": "弾丸"
        },
        {
          "latter": "花嫁"
        },
        {
          "latter": "夢物語",
          "latterRuby": "ファンタジー"
        },
        {
          "latter": "協奏曲",
          "latterRuby": "コンチェルト"
        },
        {
          "latter": "惨劇",
          "latterRuby": "トラジティー"
        },
        {
          "latter": "探求者",
          "latterRuby": "サッチャー"
        },
        {
          "latter": "引鉄",
          "latterRuby": "トリガー"
        },
        {
          "latter": "片時雨",
          "latterRuby": "かたしぐれ"
        },
        {
          "latter": "道標",
          "latterRuby": "みちしるべ"
        },
        {
          "latter": "明星",
          "latterRuby": "ヴェスパー"
        },
        {
          "latter": "蜃気楼",
          "latterRuby": "ミラージュ"
        },
        {
          "latter": "寝台特急",
          "latterRuby": "エクスプレス"
        },
        {
          "latter": "幻想",
          "latterRuby": "イリュージョン"
        },
        {
          "latter": "紋章",
          "latterRuby": "シンボル"
        },
        {
          "latter": "霹靂"
        },
        {
          "latter": "刺客",
          "latterRuby": "ラストオーダー"
        },
        {
          "latter": "残響",
          "latterRuby": "リフレイン"
        },
        {
          "latter": "戦騎姫",
          "latterRuby": "ジャンヌダルク"
        },
        {
          "latter": "道化師",
          "latterRuby": "ピエロ"
        },
        {
          "latter": "輪舞曲",
          "latterRuby": "ロンド"
        },
        {
          "latter": "炎恋歌",
          "latterRuby": "ラブソング"
        },
        {
          "latter": "生贄",
          "latterRuby": "サクリファイス"
        },
        {
          "latter": "王国",
          "latterRuby": "キングダム"
        },
        {
          "latter": "大聖堂",
          "latterRuby": "チャペル"
        },
        {
          "latter": "高速道路",
          "latterRuby": "ハイウェイ"
        },
        {
          "latter": "聖域",
          "latterRuby": "サンクチュアリ"
        },
        {
          "latter": "陰謀",
          "latterRuby": "プロット"
        },
        {
          "latter": "秋桜",
          "latterRuby": "コスモス"
        },
        {
          "latter": "エクソシスト"
        },
        {
          "latter": "錬金術師"
        },
        {
          "latter": "記憶",
          "latterRuby": "メモリー"
        },
        {
          "latter": "エントランス"
        },
        {
          "latter": "夜想曲",
          "latterRuby": "ノクターン"
        },
        {
          "latter": "手紙"
        },
        {
          "latter": "戦乙女",
          "latterRuby": "ワルキューレ"
        },
        {
          "latter": "要塞",
          "latterRuby": "プリズン"
        },
        {
          "latter": "狂詩曲",
          "latterRuby": "ラプソディ"
        },
        {
          "latter": "歪曲",
          "latterRuby": "ディストーション"
        },
        {
          "latter": "矛盾",
          "latterRuby": "パラドックス"
        },
        {
          "latter": "詠唱",
          "latterRuby": "アリア"
        },
        {
          "latter": "重奏",
          "latterRuby": "アンサンブル"
        },
        {
          "latter": "即興曲",
          "latterRuby": "アンプロンプチュ"
        },
        {
          "latter": "練習曲",
          "latterRuby": "エチュード"
        },
        {
          "latter": "哀歌",
          "latterRuby": "エレジー"
        },
        {
          "latter": "聖譚曲",
          "latterRuby": "オラトリア"
        },
        {
          "latter": "追走曲",
          "latterRuby": "カノン"
        },
        {
          "latter": "協奏曲",
          "latterRuby": "コンチェルト"
        },
        {
          "latter": "交響曲",
          "latterRuby": "シンフォニー"
        },
        {
          "latter": "夜曲",
          "latterRuby": "セレナーデ"
        },
        {
          "latter": "奏鳴曲",
          "latterRuby": "ソナタ"
        },
        {
          "latter": "舟歌",
          "latterRuby": "バルカローラ"
        },
        {
          "latter": "前奏曲",
          "latterRuby": "プレリュード"
        },
        {
          "latter": "遁走曲",
          "latterRuby": "フーガ"
        },
        {
          "latter": "円舞曲",
          "latterRuby": "ワルツ"
        },
        {
          "latter": "掟"
        },
        {
          "latter": "破面",
          "latterRuby": "アランカル"
        },
        {
          "latter": "懐古",
          "latterRuby": "ノスタルジー"
        },
        {
          "latter": "暗黒卿",
          "latterRuby": "ディストピア"
        },
        {
          "latter": "闘技場",
          "latterRuby": "コロシアム"
        },
        {
          "latter": "絡繰り人形"
        },
        {
          "latter": "真実",
          "latterRuby": "トゥルース"
        },
        {
          "latter": "理想郷",
          "latterRuby": "シャングリラ"
        }
      ]

    document.getElementById('button').addEventListener('click', () => {
        const formerNo = Math.floor( Math.random() * formerList.length);
        const latterNo = Math.floor( Math.random() * latterList.length);

        const formerElement = document.getElementById('former');
        const latterElement = document.getElementById('latter');
        const latterRubyElement = document.getElementById('latterRuby');

        formerElement.textContent = formerList[formerNo].former;
        latterElement.textContent = latterList[latterNo].latter;
        latterRubyElement.textContent = latterList[latterNo].latterRuby;
    })

    document.getElementById('shareTwitter').addEventListener('click', () => {
        const formerTitle = document.getElementById('former').textContent;
        const latterTitle = document.getElementById('latter').textContent;

        const tweetContent = ("劇場版名探偵コナン " + formerTitle + "の" + latterTitle)
        const url = "https://yutteee.tk/"

        window.location.href = ("https://twitter.com/share?url=" + url + "&text=" + tweetContent + "&count=none&lang=ja");
    })
}
