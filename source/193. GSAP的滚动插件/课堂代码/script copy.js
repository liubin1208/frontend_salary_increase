const img = document.querySelector('img');
gsap.registerPlugin(ScrollTrigger);
gsap.fromTo(
  img,
  {
    x: 0,
  },
  {
    x: function (_, target) {
      return document.documentElement.clientWidth - target.offsetWidth;
    },
    rotation: function (_, target) {
      const r = target.offsetWidth / 2;
      const long = 2 * Math.PI * r;
      return (
        ((document.documentElement.clientWidth - target.offsetWidth) / long) *
        360
      );
    },
    duration: 3,
    ease: 'none',
    scrollTrigger: {
      trigger: img,
      scrub: true,
      start: 'center center',
      pin: true,
    },
  }
);
