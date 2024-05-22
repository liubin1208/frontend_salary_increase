const ob = new IntersectionObserver(
  (entries) => {
    const entry = entries[0];
    const vdo = entry.target;
    if (entry.isIntersecting) {
      vdo.play();
    } else {
      vdo.pause();
    }
  },
  {
    threshold: 0.8,
  }
);

ob.observe(document.querySelector('video'));
