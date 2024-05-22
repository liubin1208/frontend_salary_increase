function animation(duration, from, to, onProgress) {
  const speed = (to - from) / duration;
  const startTime = Date.now();
  let value = from;
  function _run() {
    // 让value发生变化
    const now = Date.now();
    const time = now - startTime;
    if (time >= duration) {
      value = to;
      onProgress && onProgress(value);
      return;
    }
    value = from + speed * time;
    onProgress && onProgress(value);
    // 注册下一次的变化
    requestAnimationFrame(_run);
  }
  _run();
}
