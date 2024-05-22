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

doms.select.onclick = function () {
  doms.selectFile.click();
};
let cancelUpload = null;
function cancel() {
  cancelUpload && cancelUpload();
  showArea('select');
  doms.selectFile.value = null;
}
doms.selectFile.onchange = function () {
  if (this.files.length === 0) {
    return;
  }
  const file = this.files[0];
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
  cancelUpload = uploadBinary(
    file,
    function (val) {
      // 进度变换了
      setProgress(val);
    },
    function (resp) {
      showArea('result');
    }
  );
};

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
