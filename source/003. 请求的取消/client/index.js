const suggest = document.querySelector('.suggest');
const input = document.querySelector('.search-container input');

function createSuggest(list) {
  suggest.innerHTML = list.map((it) => `<span>${it}</span>`).join('');
  if (list.length > 0) {
    suggest.classList.add('active');
  } else {
    suggest.classList.remove('active');
  }
}
let controller = null;
input.oninput = async () => {
  // 取消上一次的请求
  controller && controller.abort();
  controller = new AbortController();
  try {
    const list = await fetch(
      'http://localhost:9527/api/search?key=' + input.value,
      {
        signal: controller.signal,
      }
    ).then((resp) => resp.json());
    createSuggest(list);
  } catch {
    console.log('abort');
  }
};
