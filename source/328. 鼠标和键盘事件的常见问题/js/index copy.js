class MIDIAudio {
  constructor(src) {
    this.audio = new Audio(src);
    this.tailTimerId = null;
    this.tailVolumeChangeDuration = 10;
    this.tailVolumeChangeStep = 0.02;
  }

  stop() {
    clearInterval(this.tailTimerId);
    this.tailTimerId = null;
    this.audio.pause();
  }

  play() {
    this.stop();
    this.audio.currentTime = 0; // 把播放进度归零
    this.audio.volume = 1; // 音量最大
    this.audio.play();
  }

  tail() {
    if (this.tailTimerId) {
      return;
    }
    this.tailTimerId = setInterval(() => {
      const volume = this.audio.volume - this.tailVolumeChangeStep;
      if (volume <= 0) {
        this.stop();
      } else {
        this.audio.volume = volume;
      }
    }, this.tailVolumeChangeDuration);
  }
}

function createResource() {
  const entries = Object.entries(MIDISound).map(([k, v]) => [
    k,
    new MIDIAudio(v),
  ]);
  return Object.fromEntries(entries);
}

const res = createResource();

const container = document.querySelector('.container');

// 初始化：创建 UI 界面
function init() {
  container.innerHTML = Object.keys(res)
    .map(
      (key) => `
        <div data-code="${key}" class="key${key.length === 3 ? ' sharp' : ''}">
          <span>${key.length === 3 ? '' : key}</span>
        </div>
    `
    )
    .join('');
}
init();

function play(code) {
  const audio = res[code];
  if (!audio) {
    return;
  }
  audio.play();
  const dom = document.querySelector(`.container .key[data-code=${code}]`);
  if (dom) {
    dom.classList.add('active');
  }
}

function stop(code) {
  const audio = res[code];
  if (!audio) {
    return;
  }
  audio.tail();
  const dom = document.querySelector(`.container .key[data-code=${code}]`);
  if (dom) {
    dom.classList.remove('active');
  }
}

// 交互事件
function mouseHandler(isDown, dom) {
  if (!dom.classList.contains('key')) {
    dom = dom.parentElement;
    if (!dom.classList.contains('key')) {
      return;
    }
  }
  const key = dom.dataset.code;
  isDown ? play(key) : stop(key);
}
container.onmousedown = function (e) {
  mouseHandler(true, e.target);
};
container.onmouseup = function (e) {
  mouseHandler(false, e.target);
};

const keyMap = {
  1: 'C4',
  2: 'D4',
  3: 'E4',
  4: 'F4',
  5: 'G4',
  6: 'A4',
  7: 'B4',
  '!': 'C5',
  '@': 'D5',
  '#': 'E5',
  $: 'F5',
  '%': 'G5',
  '^': 'A5',
  '&': 'B5',
};
window.onkeydown = function (e) {
  const code = keyMap[e.key];
  if (code) {
    play(code);
  }
};
window.onkeyup = function (e) {
  const code = keyMap[e.key];
  if (code) {
    stop(code);
  }
};
