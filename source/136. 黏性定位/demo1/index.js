const tabsContainer = document.querySelector('.et-hero-tabs-container');
const bar = document.querySelector('.et-hero-tab-slider');
function getPanelIndex() {
  const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const index = Math.round(scrollTop / vh);
  return index - 1;
}
let curIndex = -1;
function setBar() {
  const index = getPanelIndex();
  if (curIndex === index) {
    return;
  }
  if (index === -1) {
    bar.style.left = 0;
    bar.style.width = 0;
    curIndex = index;
    return;
  }

  curIndex = index;
  const tab = tabsContainer.children[index];
  const w = tab.clientWidth;
  const l = tab.offsetLeft;
  bar.style.left = l + 'px';
  bar.style.width = w + 'px';
}

setBar();

window.addEventListener('scroll', setBar);
