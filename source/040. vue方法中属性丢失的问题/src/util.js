export function debounce(func, duration = 1000) {
  let timerId;
  function _executor(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.call(this, ...args);
    }, duration);
  }
  _executor.cancel = () => {
    clearTimeout(timerId);
  };
  return _executor;
}
