// 进入全屏
function enter(ele) {
  if (ele.requestFullscreen) {
    ele.requestFullscreen();
  } else if (ele.mozRequestFullScreen) {
    ele.mozRequestFullScreen();
  } else if (ele.webkitRequestFullscreen) {
    ele.webkitRequestFullscreen();
  } else if (ele.msRequestFullscreen) {
    ele.msRequestFullscreen();
  }
}
// 退出全屏
function exit() {
  if (document.exitFullScreen) {
    document.exitFullScreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (element.msExitFullscreen) {
    element.msExitFullscreen();
  }
}
// 当前处于全屏的元素
function fullEle() {
  return (
    document.fullscreenElement ||
    document.mozFullScreenElement ||
    document.msFullScreenElement ||
    document.webkitFullscreenElement ||
    null
  );
}
// 当前是否处于全屏状态
function isFull() {
  return !!fullEle();
}
