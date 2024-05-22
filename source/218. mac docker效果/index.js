import { createCurve } from './curve.js';

const docker = document.querySelector('.docker');
const items = document.querySelector('.menu').children;
const range = 300;
const maxScale = 1.8;
docker.onmousemove = function (e) {
  const curve = createCurve(range, e.clientX, 1, maxScale);

  layout(curve);
};
function layout(curve) {
  for (const item of items) {
    const rect = item.getBoundingClientRect();
    const x = rect.x + rect.width / 2;
    const scale = curve(x);
    item.style.setProperty('--i', scale);
  }
}
docker.onmouseleave = function () {
  layout(() => 1);
};
