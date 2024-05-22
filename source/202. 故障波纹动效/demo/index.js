const tur = document.querySelector('feTurbulence');
const img = document.querySelector('img');
const tl = new gsap.timeline({
  paused: true,
  onUpdate() {
    tur.setAttribute('baseFrequency', `0 ${val.freq}`);
  },
});
const val = {
  freq: 0.00001,
};
tl.to(val, {
  freq: 0.4,
  duration: 0.1,
});
tl.to(val, {
  freq: 0.00001,
  duration: 0.1,
});
if (img.complete) {
  tl.play();
} else {
  img.onload = () => {
    tl.play();
  };
}
