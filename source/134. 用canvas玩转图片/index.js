const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d', {
  willReadFrequently: true,
});
function init() {
  const img = new Image();
  img.onload = () => {
    cvs.width = img.width;
    cvs.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
  };
  img.src = './redhat.jpeg';
}

init();

cvs.addEventListener('click', (e) => {
  // 1. 获取点击位置的颜色
  const x = e.offsetX,
    y = e.offsetY;
  const imgData = ctx.getImageData(0, 0, cvs.width, cvs.height);
  const clickColor = getColor(x, y, imgData.data);
  // 2. 改变颜色
  const targetColor = [0, 0, 0, 255];
  changeColor(x, y, targetColor, imgData.data, clickColor);
  ctx.putImageData(imgData, 0, 0);
});

function changeColor(x, y, targetColor, imgData, clickColor) {
  if (x < 0 || x >= cvs.width || y < 0 || y >= cvs.height) {
    return;
  }
  const curColor = getColor(x, y, imgData);
  if (diff(clickColor, curColor) > 100) {
    return;
  }
  if (diff(curColor, targetColor) === 0) {
    return;
  }
  const index = point2Index(x, y);
  imgData.set(targetColor, index);
  changeColor(x + 1, y, targetColor, imgData, clickColor);
  changeColor(x - 1, y, targetColor, imgData, clickColor);
  changeColor(x, y + 1, targetColor, imgData, clickColor);
  changeColor(x, y - 1, targetColor, imgData, clickColor);
}

function diff(color1, color2) {
  return (
    Math.abs(color1[0] - color2[0]) +
    Math.abs(color1[1] - color2[1]) +
    Math.abs(color1[2] - color2[2]) +
    Math.abs(color1[3] - color2[3])
  );
}

function point2Index(x, y) {
  return (y * cvs.width + x) * 4;
}

function getColor(x, y, imgData) {
  const index = point2Index(x, y);
  return [
    imgData[index],
    imgData[index + 1],
    imgData[index + 2],
    imgData[index + 3],
  ];
}
