/**
 * 发出http请求，适配于浏览器和node环境
 */
function request(options) {
  if (typeof window !== 'undefined') {
    // 浏览器端的ajax
  } else {
    // node的http
  }
}

var request = (function () {
  if (typeof window !== 'undefined') {
    return function (options) {
      // 浏览器端的ajax
    };
  } else {
    return function (options) {
      // node的http
    };
  }
})();
