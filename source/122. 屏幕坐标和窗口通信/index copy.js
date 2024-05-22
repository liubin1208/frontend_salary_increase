const card = document.querySelector('.card');
function barHeight() {
  return window.outerHeight - window.innerHeight;
}
function getClientPoint(screenX, screenY) {
  const clientX = screenX - window.screenX;
  const clientY = screenY - window.screenY - barHeight();
  return [clientX, clientY];
}

function getScreenPoint(clientX, clientY) {
  const screenX = clientX + window.screenX;
  const screenY = clientY + window.screenY + barHeight();
  return [screenX, screenY];
}

card.onmousedown = (e) => {
  let x = e.pageX - card.offsetLeft;
  let y = e.pageY - card.offsetTop;
  window.onmousemove = (e) => {
    const cx = e.pageX - x;
    const cy = e.pageY - y;
    card.style.left = cx + 'px';
    card.style.top = cy + 'px';
    // 通知其他窗口
    channel.postMessage(getScreenPoint(cx, cy));
  };
  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};

function init() {
  const url = new URL(location.href);
  const type = url.searchParams.get('type') || 'Q';
  card.src = `./${type}.png`;
  console.log(url);
  if (location.search.includes('hidden')) {
    card.style.left = '-1000px';
  }
}

init();

const channel = new BroadcastChannel('card');

channel.onmessage = (e) => {
  const [cx, cy] = getClientPoint(...e.data);
  card.style.left = cx + 'px';
  card.style.top = cy + 'px';
};
