const channel = new BroadcastChannel('demo');

export function sendMsg(type, content) {
  channel.postMessage({
    type,
    content,
  });
}

export function listenMsg(callback) {
  const handler = (e) => {
    callback && callback(e.data);
  };
  channel.addEventListener('message', handler);
  return () => {
    channel.removeEventListener('message', handler);
  };
  // callback(msgINfo)
}
