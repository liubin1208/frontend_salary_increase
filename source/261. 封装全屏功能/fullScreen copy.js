function getPropertyName(names, target) {
  return names.find((name) => name in target);
}
const enterFullScreenName = getPropertyName(
  [
    'requestFullscreen',
    'mozRequestFullScreen',
    'webkitRequestFullscreen',
    'msRequestFullscreen',
  ],
  document.documentElement
);
// 进入全屏
export function enter(ele) {
  enterFullScreenName && ele[enterFullScreenName]();
}

const exitFullScreenName = getPropertyName(
  [
    'exitFullScreen',
    'mozCancelFullScreen',
    'webkitExitFullscreen',
    'msExitFullscreen',
  ],
  document
);
export function exit() {
  exitFullScreenName && document[exitFullScreenName]();
}

const fullEleName = getPropertyName(
  [
    'fullscreenElement',
    'mozFullScreenElement',
    'msFullScreenElement',
    'webkitFullscreenElement',
  ],
  document
);
export function fullEle() {
  return document[fullEleName] || null;
}

export function isFull() {
  return !!fullEle();
}

export function toggle(ele) {
  isFull() ? exit() : enter(ele);
}
