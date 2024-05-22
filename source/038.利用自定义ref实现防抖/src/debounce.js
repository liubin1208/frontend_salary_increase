export function debounce(func, delay = 1000) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}
