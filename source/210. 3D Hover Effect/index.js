const card = document.querySelector('.card');
const yRange = [-10, 10];
const xRange = [-10, 10];
function getRoateDeg(range, value, length) {
  return (value / length) * (range[1] - range[0]) + range[0];
}
card.onmousemove = (e) => {
  const { offsetX, offsetY } = e;
  const { offsetWidth, offsetHeight } = card;
  const ry = -getRoateDeg(yRange, offsetX, offsetWidth);
  const rx = getRoateDeg(xRange, offsetY, offsetHeight);
  card.style.setProperty('--rx', `${rx}deg`);
  card.style.setProperty('--ry', `${ry}deg`);
};

card.onmouseleave = () => {
  card.style.setProperty('--rx', 0);
  card.style.setProperty('--ry', 0);
};
