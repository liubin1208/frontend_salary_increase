const vdo = document.querySelector('video');
const ob = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      vdo.play();
    } else {
      vdo.pause();
    }
  },
  {
    threshold: 0.8,
  }
);
ob.observe(vdo);
