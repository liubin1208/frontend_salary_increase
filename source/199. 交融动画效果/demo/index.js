const n = 6; // 一次性生成的泡泡数量
const bubbles = document.querySelector('.bubbles');
bubbles.addEventListener('animationend', function (e) {
  e.target.remove();
});
function createBubbles() {
  const vw = document.documentElement.clientWidth;
  for (let i = 0; i < n; i++) {
    const bubble = document.createElement('div');
    /* 
      --x: 100px;
      --s: 50px;
      --d: 2s;
      --delay: 1s;
    */
    const s = Math.random() * 100 + 50;
    const x = Math.random() * (vw - s);
    const d = Math.random() * 2 + 1;
    bubble.style.setProperty('--x', `${x}px`);
    bubble.style.setProperty('--s', `${s}px`);
    bubble.style.setProperty('--d', `${d}s`);
    bubble.className = 'bubble';
    bubbles.appendChild(bubble);
  }
}

createBubbles();

setInterval(createBubbles, 500);
