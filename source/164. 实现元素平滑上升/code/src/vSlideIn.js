const DISTANCE = 150;
const DURATION = 500;
const map = new WeakMap();
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // 该元素和视口相交
      // 播放该元素的动画
      const animation = map.get(entry.target);
      if (animation) {
        animation.play();
        ob.unobserve(entry.target);
      }
    }
  }
});
function isBelowViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top - DISTANCE > window.innerHeight;
}

export default {
  mounted(el) {
    if (!isBelowViewport(el)) {
      return;
    }
    const animation = el.animate(
      [
        {
          transform: `translateY(${DISTANCE}px)`,
          opacity: 0.5,
        },
        {
          transform: 'translateY(0)',
          opacity: 1,
        },
      ],
      {
        duration: DURATION,
        easing: 'ease-in-out',
        fill: 'forwards',
      }
    );
    animation.pause();
    ob.observe(el);
    map.set(el, animation);
  },
  unmounted(el) {
    ob.unobserve(el);
  },
};
