/**
 * 注册时间
 * @param {HTMLElement} ele 元素
 * @param {string} eventName 事件名
 * @param {Function} handler 时间处理函数
 */
function addEvent(ele, eventName, handler) {
  if (ele.addEventListener) {
    ele.addEventListener(eventName, handler);
  } else if (ele.attachEvent) {
    ele.attachEvent('on' + eventName, handler);
  } else {
    ele['on' + eventName] = handler;
  }
}

var addEvent = (function () {
  if (ele.addEventListener) {
    return function (ele, eventName, handler) {
      ele.addEventListener(eventName, handler);
    };
  } else if (ele.attachEvent) {
    return function (ele, eventName, handler) {
      ele.attachEvent('on' + eventName, handler);
    };
  } else {
    return function (ele, eventName, handler) {
      ele['on' + eventName] = handler;
    };
  }
})();
