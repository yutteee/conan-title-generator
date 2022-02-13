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

        beforeElement.innerHTML = beforeList[beforeNo].before;
        beforeRubyElement.innerHTML = beforeList[beforeNo].beforeRuby;
        afterElement.innerHTML = afterList[afterNo].after;
        afterRubyElement.innerHTML = afterList[afterNo].afterRuby;
    })

    document.getElementById('shareTwitter').addEventListener('click', () => {
        let beforeTitle = document.getElementById('before').innerHTML;
        let afterTitle = document.getElementById('after').innerHTML;
        let afterTitleRuby = document.getElementById('afterRuby').innerHTML;

        let tweetContent = ("劇場版名探偵コナン " + beforeTitle + "の" + afterTitle)
        let url = "file:///Users/nakamurayusaku/Desktop/%E3%82%B3%E3%83%8A%E3%83%B3%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%E3%82%B7%E3%82%99%E3%82%A7%E3%83%8D%E3%83%AC%E3%83%BC%E3%82%BF%E3%83%BC/index.html"

        window.open().location.href = ("https://twitter.com/share?url=" + url + "&text=" + tweetContent + "&count=none&lang=ja");
    })
}
