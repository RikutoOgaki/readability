// マウスストーカー実装 ここから

// マウスストーカー用class取得
const mouse = document.querySelector(".mouseStalker");

document.addEventListener('mousemove', (e) => {
    mouse.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
})

// マウスストーカー実装 ここまで