{
    'use strict'

    const beforeList = [
        {
            before: "時計じかけ",
            beforeRuby: ""
        },
        {
            before: "14番目",
            beforeRuby: ""
        },
        {
            before: "世紀末",
            beforeRuby: ""
        },
        {
            before: "瞳の中",
            beforeRuby: ""
        },
        {
            before: "天国へ",
            beforeRuby: ""
        },
        {
            before: "ベイカー街",
            beforeRuby: "ベイカーストリート"
        },
        {
            before: "迷宮",
            beforeRuby: ""
        },
        {
            before: "銀翼",
            beforeRuby: ""
        },
        {
            before: "水平線上",
            beforeRuby: ""
        },
        {
            before: "探偵たち",
            beforeRuby: ""
        },
        {
            before: "紺碧",
            beforeRuby: ""
        },
        {
            before: "旋律",
            beforeRuby: ""
        },
        {
            before: "漆黒",
            beforeRuby: ""
        },
        {
            before: "天空",
            beforeRuby: ""
        },
        {
            before: "沈黙",
            beforeRuby: ""
        },
        {
            before: "11人目",
            beforeRuby: ""
        },
        {
            before: "絶海",
            beforeRuby: ""
        },
        {
            before: "異次元",
            beforeRuby: ""
        },
        {
            before: "業火",
            beforeRuby: ""
        },
        {
            before: "純黒",
            beforeRuby: ""
        },
        {
            before: "から紅",
            beforeRuby: ""
        },
        {
            before: "ゼロ",
            beforeRuby: ""
        },
        {
            before: "紺青",
            beforeRuby: ""
        },
        {
            before: "緋色",
            beforeRuby: ""
        },
        {
            before: "ハロウィン",
            beforeRuby: ""
        },
    ]

    const afterList = [
        {
            after: "摩天楼",
            afterRuby: ""
        },
        {
            after: "標的",
            afterRuby: ""
        },
        {
            after: "魔術師",
            afterRuby: ""
        },
        {
            after: "暗殺者",
            afterRuby: ""
        },
        {
            after: "カウントダウン",
            afterRuby: ""
        },
        {
            after: "亡霊",
            afterRuby: ""
        },
        {
            after: "十字路",
            afterRuby: "クロスロード"
        },
        {
            after: "奇術師",
            afterRuby: "マジシャン"
        },
        {
            after: "陰謀",
            afterRuby: "ストラテジー"
        },
        {
            after: "鎮魂歌",
            afterRuby: "レクイエム"
        },
        {
            after: "棺",
            afterRuby: "ジョリー・ロジャー"
        },
        {
            after: "楽譜",
            afterRuby: "フルスコア"
        },
        {
            after: "追跡者",
            afterRuby: "チェイサー"
        },
        {
            after: "難破船",
            afterRuby: "ロストシップ"
        },
        {
            after: "15分",
            afterRuby: "クォーター"
        },
        {
            after: "ストライカー",
            afterRuby: ""
        },
        {
            after: "探偵",
            afterRuby: "プライベート・アイ"
        },
        {
            after: "狙撃手",
            afterRuby: "スナイパー"
        },
        {
            after: "向日葵",
            afterRuby: ""
        },
        {
            after: "悪夢",
            afterRuby: "ナイトメア"
        },
        {
            after: "恋歌",
            afterRuby: "ラブレター"
        },
        {
            after: "執行人",
            afterRuby: ""
        },
        {
            after: "拳",
            afterRuby: "フィスト"
        },
        {
            after: "弾丸",
            afterRuby: ""
        },
        {
            after: "花嫁",
            afterRuby: ""
        },
    ]

    document.getElementById('button').addEventListener('click', () => {
        const beforeNo = Math.floor( Math.random() * beforeList.length);
        const afterNo = Math.floor( Math.random() * afterList.length);

        const beforeElement = document.getElementById('before');
        const beforeRubyElement = document.getElementById('beforeRuby');
        const afterElement = document.getElementById('after');
        const afterRubyElement = document.getElementById('afterRuby');

        beforeElement.textContent = beforeList[beforeNo].before;
        beforeRubyElement.textContent = beforeList[beforeNo].beforeRuby;
        afterElement.textContent = afterList[afterNo].after;
        afterRubyElement.textContent = afterList[afterNo].afterRuby;
    })

    document.getElementById('shareTwitter').addEventListener('click', () => {
        const beforeTitle = document.getElementById('before').textContent;
        const afterTitle = document.getElementById('after').textContent;

        const tweetContent = ("劇場版名探偵コナン " + beforeTitle + "の" + afterTitle)
        const url = "https://qiita.com/TK-C/items/c64ca54b634b0cae0059"

        window.location.href = ("https://twitter.com/share?url=" + url + "&text=" + tweetContent + "&count=none&lang=ja");
    })
}
