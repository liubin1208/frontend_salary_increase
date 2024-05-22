import { getVideos } from './api.js';
import { debounce } from './utils.js';
// 初始化数据
const currentIndex = 100; // 当前播放的视频下标
const SIZE = 9; // 每页视频的数量
const container = document.querySelector('.container');
const indicator = document.querySelector('.indicator');
const visibleIndex = new Set(); // 可见元素的下标集合
const loadedPages = new Set(); // 已加载过的页码

// 创建观察器，用于观察元素是否进入视口
const ob = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    const index = +entry.target.dataset.index;
    if (entry.isIntersecting) {
      visibleIndex.add(index);
    } else {
      visibleIndex.delete(index);
    }
  }
  loadPagesDebounce();
  setIndicatorVisible();
});

/**
 * 获取可见元素的最小下标和最大下标
 */
function getRange() {
  if (visibleIndex.size === 0) return [0, 0];
  const min = Math.min(...visibleIndex);
  const max = Math.max(...visibleIndex);
  return [min, max];
}

/**
 * 创建指定页数所包含的元素
 * @param {Number} page 指定的页数
 */
function createElements(page) {
  const childrenLen = container.children.length;
  const count = page * SIZE;
  for (let i = childrenLen; i < count; i++) {
    const item = document.createElement('div');
    item.className = 'item';
    item.dataset.index = i;
    if (i === currentIndex) {
      item.classList.add('playing');
    }
    container.appendChild(item);
    ob.observe(item);
  }
}
createElements(1); //初始创建第一页

function loadPages() {
  // 得到当前能看到的元素索引范围
  const [minIndex, maxIndex] = getRange();
  const pages = new Set();
  for (let i = minIndex; i <= maxIndex; i++) {
    pages.add(Math.ceil((i + 1) / SIZE));
  }
  for (const page of pages) {
    if (loadedPages.has(page)) continue;
    loadedPages.add(page);
    getVideos(page, SIZE).then((res) => {
      const startIndex = (page - 1) * SIZE;
      for (let i = 0; i < res.length; i++) {
        const item = container.children[i + startIndex];
        item.innerHTML = `
        <img src="${res[i].cover}" >
        `;
      }
    });
  }
}
const loadPagesDebounce = debounce(loadPages, 300);

loadPages();

/**
 * 设置指示器是否可见
 */
function setIndicatorVisible() {
  const [minIndex, maxIndex] = getRange();
  indicator.style.display =
    currentIndex >= minIndex && currentIndex <= maxIndex ? 'none' : 'block';
}

indicator.onclick = () => {
  const page = Math.floor(currentIndex / SIZE) + 1;
  createElements(page);
  container.children[currentIndex].scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
  indicator.style.display = 'none';
};
