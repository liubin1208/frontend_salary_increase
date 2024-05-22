function upload(file, onProgress, onFinish) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const resp = JSON.parse(xhr.responseText);
    onFinish(resp);
  };
  xhr.upload.onprogress = (e) => {
    const percent = Math.floor((e.loaded / e.total) * 100);
    onProgress(percent);
  };
  xhr.open('POST', 'http://test.com:9527/upload/single');
  const form = new FormData();
  form.append('avatar', file);
  xhr.send(form);
  return function () {
    xhr.abort();
  };
}

function uploadBase64(file, onProgress, onFinish) {
  onProgress(0);
  const ext = '.' + file.name.split('.').pop();
  const reader = new FileReader();
  let xhr;
  reader.onload = (e) => {
    const base64 = e.target.result.split(',').pop();
    xhr = new XMLHttpRequest();
    xhr.onload = function () {
      const resp = JSON.parse(xhr.responseText);
      onFinish(resp);
    };
    xhr.upload.onprogress = (e) => {
      const percent = Math.floor((e.loaded / e.total) * 100);
      onProgress(percent);
    };
    xhr.open('POST', 'http://test.com:9527/upload/base64');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.send(
      JSON.stringify({
        ext,
        avatar: base64,
      })
    );
  };
  reader.readAsDataURL(file);

  return function () {
    xhr && xhr.abort();
  };
}

function uploadBinary(file, onProgress, onFinish) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const resp = JSON.parse(xhr.responseText);
    onFinish(resp);
  };
  xhr.upload.onprogress = (e) => {
    const percent = Math.floor((e.loaded / e.total) * 100);
    onProgress(percent);
  };
  xhr.open('POST', 'http://test.com:9527/upload/single');
  xhr.setRequestHeader('Content-Type', 'application/octet-stream');
  xhr.setRequestHeader('x-ext', '.' + file.name.split('.').pop());
  xhr.send(file);
  return function () {
    xhr.abort();
  };
}
