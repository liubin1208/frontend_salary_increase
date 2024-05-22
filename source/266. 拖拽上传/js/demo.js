const $ = document.querySelector.bind(document);
const doms = {
  img: $('.preview'),
  container: $('.upload'),
  select: $('.upload-select'),
  selectFile: $('.upload-select input'),
  progress: $('.upload-progress'),
  cancelBtn: $('.upload-progress button'),
  delBtn: $('.upload-result button'),
};

function showArea(areaName) {
  doms.container.className = `upload ${areaName}`;
}

function setProgress(value) {
  doms.progress.style.setProperty('--percent', value);
}

let cancelUpload = null;
function cancel() {
  cancelUpload && cancelUpload();
  showArea('select');
  doms.selectFile.value = null;
}
function upload(file, onProgress, onFinish) {
  // 模拟网络传输
  let p = 0;
  onProgress(p);
  const timerId = setInterval(() => {
    p++;
    onProgress(p);
    if (p === 100) {
      onFinish('服务器的响应结果');
      clearInterval(timerId);
    }
  }, 50);
  return function () {
    // 取消
    clearInterval(timerId);
  };
}

function validateFile(file) {
  const sizeLimit = 1 * 1024 * 1024;
  const legalExts = ['.jpg', '.jpeg', '.bmp', '.webp', '.gif', '.png'];
  if (file.size > sizeLimit) {
    alert('文件尺寸过大');
    return false;
  }
  const name = file.name.toLowerCase();
  if (!legalExts.some((ext) => name.endsWith(ext))) {
    alert('文件类型不正确');
    return false;
  }
  return true;
}

doms.cancelBtn.onclick = doms.delBtn.onclick = cancel;

doms.select.onclick = function () {
  doms.selectFile.click();
};

doms.selectFile.onchange = changeHandler;

function changeHandler() {
  if (doms.selectFile.files.length === 0) {
    return;
  }
  const file = doms.selectFile.files[0];
  if (!validateFile(file)) {
    return;
  }
  // 切换界面
  showArea('progress');
  // 显示预览图
  const reader = new FileReader();
  reader.onload = (e) => {
    doms.img.src = e.target.result;
  };
  reader.readAsDataURL(file);
  // 上传
  cancelUpload = upload(
    file,
    function (val) {
      // 进度变换了
      setProgress(val);
    },
    function (resp) {
      showArea('result');
    }
  );
}

doms.select.ondragenter = (e) => {
  e.preventDefault();
  e.target.classList.add('draging');
};
doms.select.ondragover = (e) => {
  e.preventDefault();
};
doms.select.ondragleave = (e) => {
  e.target.classList.remove('draging');
};
doms.select.ondrop = (e) => {
  e.preventDefault();
  if (!e.dataTransfer.types.includes('Files')) {
    alert('仅支持文件上传');
    return;
  }
  const files = e.dataTransfer.files;
  if (files.length !== 1) {
    alert('仅支持单文件上传');
    return;
  }
  doms.selectFile.files = files;
  changeHandler();
  e.target.classList.remove('draging');
};
