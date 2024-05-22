// 给fetch添加超时功能
function createFetchWithTimeout(timeout = 1000) {
  return function (url, options) {
    return new Promise((resolve, reject) => {
      const singalController = new AbortController();
      fetch(url, {
        ...options,
        signal: singalController.signal,
      }).then(resolve, reject);
      setTimeout(() => {
        reject(new Error('fetch timeout'));
        // 取消请求
        singalController.abort();
      }, timeout);
    });
  };
}
