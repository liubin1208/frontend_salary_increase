const tur = document.querySelector('feTurbulence');

const tl = gsap.timeline({
  paused: true,
  onUpdate: () => {
    tur.setAttribute('baseFrequency', `0 ${val.freq}`);
  },
});

const val = {
  freq: 0.00001,
};
tl.to(val, {
  freq: 0.4,
  duration: 0.1,
}); // 0.00001 ---> 0.4

tl.to(val, {
  freq: 0.00001,
  duration: 0.1,
}); // 0.4 ---> 0.00001
const img = document.querySelector('img');
if (img.complete) {
  tl.play();
} else {
  img.addEventListener('load', () => {
    tl.play();
  });
}
