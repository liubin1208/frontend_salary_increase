function runMicroTask(fn) {
  // node环境
  // Process.nextTick(fn)
  if (
    typeof process !== 'undefined' &&
    typeof process.nextTick === 'function'
  ) {
    return process.nextTick(fn);
  } else if (typeof MutationObserver === 'function') {
    // 浏览器环境
    // MutationObserver
    const ob = new MutationObserver(fn);
    const textNode = document.createTextNode('1');
    ob.observe(textNode, {
      characterData: true,
    });
    textNode.data = '2';
  }
  setTimeout(fn, 0);
}

function isPromiseLike(value) {
  return value && typeof value.then === 'function';
}
