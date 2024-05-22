window.addEventListener('click', (e) => {
  const pointer = document.createElement('div');
  pointer.classList.add('pointer');
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
  document.body.appendChild(pointer);
  pointer.addEventListener('animationend', () => {
    pointer.remove();
  });
});

const ball = document.querySelector('.ball');

function init() {
  const x = window.innerWidth / 2;
  const y = window.innerHeight / 2;
  ball.style.transform = `translate(${x}px, ${y}px)`;
}
init();

window.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  move(x, y);
});

function move(x, y) {
  const rect = ball.getBoundingClientRect();
  const ballX = rect.x + rect.width / 2;
  const ballY = rect.y + rect.height / 2;
  ball.getAnimations().forEach((animation) => {
    animation.cancel();
  });
  const rad = Math.atan2(y - ballY, x - ballX);
  const deg = (rad * 180) / Math.PI;
  ball.animate(
    [
      {
        transform: `translate(${ballX}px, ${ballY}px) rotate(${deg}deg)`,
      },
      {
        transform: `translate(${ballX}px, ${ballY}px) rotate(${deg}deg) scaleX(1.5)`,
        offset: 0.6,
      },
      {
        transform: `translate(${x}px, ${y}px) rotate(${deg}deg) scaleX(1.5)`,
        offset: 0.8,
      },
      {
        transform: `translate(${x}px, ${y}px) rotate(${deg}deg)`,
      },
    ],
    {
      duration: 1000,
      fill: 'forwards',
    }
  );
}
