const btn = document.querySelector('.btn');
btn.onclick = () => {
  const taskHandler = (_, i) => {
    const div = document.createElement('div');
    div.innerText = i;
    document.body.appendChild(div);
  };
  browserPerformChunk(100000, taskHandler);
};

function performChunk(datas, taskHandler, scheduler) {
  if (typeof datas === 'number') {
    datas = {
      length: datas,
    };
  }
  if (datas.length === 0) {
    return;
  }
  let i = 0;
  // 开启下一个分片的执行
  function _run() {
    if (i >= datas.length) {
      return;
    }
    // 一个渲染帧中，空闲时开启分片执行
    scheduler((goOn) => {
      while (goOn() && i < datas.length) {
        taskHandler(datas[i], i);
        i++;
      }
      // 此次分片完成
      _run();
    });
  }
  _run();
}

function browserPerformChunk(datas, taskHandler) {
  const scheduler = (task) => {
    requestIdleCallback((idle) => {
      task(() => idle.timeRemaining());
    });
  };
  performChunk(datas, taskHandler, scheduler);
}
