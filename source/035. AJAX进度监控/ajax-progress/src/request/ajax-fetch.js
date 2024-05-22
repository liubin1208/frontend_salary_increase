export function request(options = {}) {
  const { url, method = 'GET', onProgress, data = null } = options;
  return new Promise(async (resolve) => {
    const resp = await fetch(url, {
      method,
      body: data,
    });
    const total = +resp.headers.get('content-length');
    const decoder = new TextDecoder();
    let body = '';
    const reader = resp.body.getReader();
    let loaded = 0;
    while (1) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      loaded += value.length;
      body += decoder.decode(value);
      onProgress &&
        onProgress({
          loaded,
          total,
        });
    }
    resolve(body);
  });
}
