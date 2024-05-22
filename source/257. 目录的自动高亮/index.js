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

const links = document.querySelectorAll('.toc a[href^="#"]');
const titles = [];
for (const link of links) {
  link.addEventListener('click', () => {
    highlight(link);
  });
  const url = new URL(link.href);
  const dom = document.querySelector(url.hash);
  if (dom) {
    titles.push(dom);
  }
}

function debounce(fn, delay = 100) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const scrollHandler = debounce(() => {
  const rects = titles.map((title) => title.getBoundingClientRect());
  const range = 300;
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];
    const rect = rects[i];
    if (rect.top >= 0 && rect.top <= range) {
      highlight(title.id);
      break;
    }
    if (
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
