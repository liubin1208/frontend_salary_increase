export function request(options = {}) {
  const { url, method = 'GET', onProgress, data = null } = options;
  return new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', () => {
      if (xhr.readyState === xhr.DONE) {
        resolve(xhr.responseText);
      }
    });
    // xhr.upload.addEventListener('progress', (e) => {
    //   console.log(e.loaded, e.total);
    // });
    xhr.addEventListener('progress', (e) => {
      console.log(e.loaded, e.total);
      onProgress &&
        onProgress({
          loaded: e.loaded,
          total: e.total,
        });
    });
    xhr.upload.addEventListener('progress', (e) => {});
    xhr.open(method, url);
    xhr.send(data);
  });
}
