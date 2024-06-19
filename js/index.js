// マウスストーカー用class取得
const mouse = document.querySelector(".mouseStalker");

// mousuStalkerの処理呼びたし
document.addEventListener('mousemove', mousuStalker);

// mousuStalkerの処理関数
function mousuStalker(e) {
    mouse.style.top = e.clientY - 25 + 'px';
    mouse.style.left = e.clientX - 25 + 'px';
}