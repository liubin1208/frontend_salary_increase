function highlight(id) {
  document
    .querySelectorAll('a.highlight')
    .forEach((a) => a.classList.remove('highlight'));
  if (id instanceof HTMLElement) {
    id.classList.add('highlight');
    return;
  }
  if (id.startsWith('#')) {
    id = id.substring(1);
  }
  document.querySelector(`a[href="#${id}"]`).classList.add('highlight');
}
const titles = [];
const links = document.querySelectorAll('.toc a[href^="#"]');
for (const link of links) {
  link.addEventListener('click', (e) => {
    highlight(link);
  });
  const url = new URL(link.href);
  const dom = document.querySelector(url.hash);
  if (dom) {
    titles.push(dom);
  }
}

function debounce(fn, delay) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

const scrollHandler = debounce(() => {
  const rects = titles.map((title) => title.getBoundingClientRect());
  const topRange = 300;
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i]; // 标题的dom
    const rect = rects[i]; // 标题的位置信息
    console.log(rect.top);
    if (rect.top >= 0 && rect.top <= topRange) {
      highlight(title.id);
      break;
    } else if (
      rect.top < 0 &&
      rects[i + 1] &&
      rects[i + 1].top > document.documentElement.clientHeight
    ) {
      highlight(title.id);
      break;
    }
  }
}, 100);

window.addEventListener('scroll', scrollHandler);
