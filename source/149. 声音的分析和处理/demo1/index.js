const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

// 初始化canvas的尺寸
function initCvs() {
  const size = 500;
  cvs.width = size * devicePixelRatio;
  cvs.height = size * devicePixelRatio;
  cvs.style.width = cvs.style.height = size + 'px';
}
initCvs();
function draw(datas, maxValue) {
  const r = cvs.width / 4 + 20 * devicePixelRatio;
  const center = cvs.width / 2;
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  const hslStep = 360 / (datas.length - 1);
  const maxLen = cvs.width / 2 - r;
  const minLen = 2 * devicePixelRatio;
  for (let i = 0; i < datas.length; i++) {
    ctx.beginPath();
    const len = Math.max((datas[i] / maxValue) * maxLen, minLen);
    const rotate = hslStep * i;
    ctx.strokeStyle = `hsl(${rotate}deg, 65%, 65%)`;
    ctx.lineWidth = minLen;
    const rad = (rotate * Math.PI) / 180;
    const beginX = center + Math.cos(rad) * r;
    const beginY = center + Math.sin(rad) * r;
    const endX = center + Math.cos(rad) * (r + len);
    const endY = center + Math.sin(rad) * (r + len);
    ctx.moveTo(beginX, beginY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}

draw(new Array(256).fill(0), 255);

let isInit = false;
let analyser, buffer;
navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
  if (isInit) {
    return;
  }
  const audioCtx = new AudioContext();
  // 创建一个音频分析器节点
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  buffer = new Uint8Array(analyser.frequencyBinCount);

  const source = audioCtx.createMediaStreamSource(stream);
  source.connect(analyser);

  // analyser.connect(audioCtx.destination);
  isInit = true;
});

function update() {
  requestAnimationFrame(update);
  if (!isInit) {
    return;
  }
  analyser.getByteFrequencyData(buffer);
  const offset = Math.floor((buffer.length * 2) / 3);
  const datas = new Array(offset * 2);
  for (let i = 0; i < offset; i++) {
    datas[i] = datas[datas.length - i - 1] = buffer[i];
  }
  draw(datas, 255);
}

update();
