/**
 * 将传入的函数放到微队列中执行
 * @param {Function} func
 */
function runMicrotask(func) {
  if (typeof Promise === 'function') {
    Promise.resolve().then(func);
    return;
  }
  if (typeof MutationObserver === 'function') {
    var ob = new MutationObserver(func);
    var node = document.createTextNode('');
    ob.observe(node, { characterData: true });
    node.data = 1;
    return;
  }
  if (process && typeof process.nextTick === 'function') {
    process.nextTick(func);
    return;
  }
  if (typeof setImmediate === 'function') {
    setImmediate(func);
    return;
  }
  setTimeout(func);
}
