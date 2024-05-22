const img = document.querySelector('img');
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  img,
  {
    x: 0,
    rotate: 0,
  },
  {
    x(_, target) {
      return document.documentElement.clientWidth - target.offsetWidth;
    },
    rotate: 360,
    duration: 3,
    ease: 'none',
    scrollTrigger: {
      trigger: img,
      scrub: true,
      pin: true,
      start: 'center center',
    },
  }
);
