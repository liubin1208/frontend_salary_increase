const items = document.querySelectorAll('.carousel-item');
let index = 3; // 当前显示的图片索引

function layout() {
  const offsetStep = 100; // 每两张图片之间的偏移量
  const scaleStep = 0.6; // 每两张图片之间的缩放比例差
  const opacityStep = 0.5; // 每两张图片之间的透明度差
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const dis = Math.abs(i - index);
    const sign = Math.sign(i - index);
    // transform
    // translateX
    let xOffset = (i - index) * offsetStep;
    if (i !== index) {
      xOffset = xOffset + 100 * sign;
    }
    // scale
    const scale = scaleStep ** dis;
    // rotateY
    const rotateY = 45 * -sign;
    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;
    // opacity
    const opacity = opacityStep ** dis;
    item.style.opacity = opacity;
    // z-index
    const zIndex = items.length - dis;
    item.style.zIndex = zIndex;
  }
}
layout();
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

prev.onclick = function () {
  index--;
  if (index < 0) {
    index = 0;
  }
  layout();
};

next.onclick = function () {
  index++;
  if (index > items.length - 1) {
    index = items.length - 1;
  }
  layout();
};

items.forEach((item, i) => {
  item.onclick = function () {
    index = i;
    layout();
  };
});
