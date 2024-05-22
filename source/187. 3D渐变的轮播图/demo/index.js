const items = document.querySelectorAll('.carousel-item');
let index = 3; // 当前显示的是第几张轮播图

function layout() {
  const xOffsetStep = 100; // 每个轮播图之间的间隔
  const count = items.length; // 轮播图的数量
  const scaleStep = 0.6; // 缩放的递减倍率
  const opacityStep = 0.5; // 透明度的递减倍率
  for (let i = 0; i < count; i++) {
    const item = items[i];
    const sign = Math.sign(i - index);
    // transform
    // translateX scale rotateY
    let xOffset = (i - index) * xOffsetStep;
    if (i !== index) {
      xOffset = xOffset + 100 * sign;
    }
    const scale = scaleStep ** Math.abs(i - index);
    const rotateY = i === index ? 0 : 45 * -sign;
    item.style.transform = `translateX(${xOffset}px) scale(${scale}) rotateY(${rotateY}deg)`;
    // opacity
    const opacity = opacityStep ** Math.abs(i - index);
    item.style.opacity = opacity;
    // zindex
    item.style.zIndex = count - Math.abs(index - i);
  }
}

layout();

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
prev.addEventListener('click', () => {
  index--;
  if (index < 0) {
    index = 0;
  }
  layout();
});
next.addEventListener('click', () => {
  index++;
  if (index > items.length - 1) {
    index = items.length - 1;
  }
  layout();
});
items.forEach((item, i) => {
  item.addEventListener('click', () => {
    index = i;
    layout();
  });
});
