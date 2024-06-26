// マウスストーカー実装 ここから

// マウスストーカー用class取得
const mouse = document.querySelector(".mouseStalker");

// mousuStalkerの処理呼びたし
// document.addEventListener('mousemove', mousuStalker);

// mousuStalkerの処理関数
// function mousuStalker(e) {
//     mouse.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
// }

// 疑問点
// functionで関数を作って実装してしっかりと機能ごとに分けるか、コードの短さを重視して実装するか

document.addEventListener('mousemove', (e) => {
    mouse.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
})

// マウスストーカー実装 ここまで