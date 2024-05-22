const ob = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        ob.unobserve(img);
      }
    }
  },
  {
    threshold: 0,
  }
);

const imgs = document.querySelectorAll('img[data-src]');
imgs.forEach((img) => {
  ob.observe(img);
});
