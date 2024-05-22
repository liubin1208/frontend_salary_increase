const map = new WeakMap();
const ob = new ResizeObserver((entries) => {
  for (const entry of entries) {
    // 这个元素对应的回调函数？
    const handler = map.get(entry.target);
    if (handler) {
      const box = entry.borderBoxSize[0];
      handler({
        width: box.inlineSize,
        height: box.blockSize,
      });
    }
  }
});

export default {
  mounted(el, binding) {
    // 监视尺寸变化
    ob.observe(el);
    map.set(el, binding.value);
  },
  unmounted(el) {
    // 取消监听
    ob.unobserve(el);
  },
};
