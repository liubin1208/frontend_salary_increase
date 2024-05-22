const container = document.querySelector('.container');
const rect = container.getBoundingClientRect();
const theta = Math.atan2(rect.height, rect.width);

container.addEventListener('mouseenter', (e) => {
  const x = e.offsetX - rect.width / 2;
  const y = rect.height / 2 - e.offsetY;
  const d = Math.atan2(y, x);
  if (d < theta && d >= -theta) {
    container.classList.add('right');
  } else if (d >= theta && d < Math.PI - theta) {
    container.classList.add('up');
  } else if (d >= Math.PI - theta || d < -(Math.PI - theta)) {
    container.classList.add('left');
  } else {
    container.classList.add('down');
  }
});

container.addEventListener('mouseleave', () => {
  container.className = 'container';
});
