function debounce(fn, delay = 1000) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const d_layout = debounce(layout, 500);

window.onresize = d_layout;
