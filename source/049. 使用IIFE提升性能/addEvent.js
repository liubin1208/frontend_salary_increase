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
  if (window.addEventListener) {
    return function (ele, eventName, handler) {
      ele.addEventListener(eventName, handler);
    };
  } else if (window.attachEvent) {
    return function (ele, eventName, handler) {
      ele.attachEvent('on' + eventName, handler);
    };
  } else {
    return function (ele, eventName, handler) {
      ele['on' + eventName] = handler;
    };
  }
})();

addEvent();
