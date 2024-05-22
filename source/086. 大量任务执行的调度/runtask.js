function _runTask(task, callback) {
  const start = Date.now();
  requestAnimationFrame(() => {
    if (Date.now() - start < 16.6) {
      task();
      callback();
    } else {
      _runTask(task, callback);
    }
  });
}

/**
 * 运行一个耗时任务
 * 如果要异步执行任务，请返回Promise
 * 要尽快完成任务，同时不要让页面产生卡顿
 * 尽量兼容更多的浏览器
 * @param {Function} task
 */
function runTask(task) {
  return new Promise((resolve) => {
    _runTask(task, resolve);
  });
}
