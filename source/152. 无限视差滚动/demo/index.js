const imgs = [
  './assets/1.jpeg',
  './assets/2.jpeg',
  './assets/3.jpeg',
  './assets/4.jpeg',
  './assets/5.jpeg',
];

const scrollContainer = document.querySelector('.scroll-container');
let currentIndex = 0;

function createItem(index) {
  const imgUrl = imgs[index];
  const item = document.createElement('div');
  item.classList.add('item');
  item.innerHTML = `<img src="${imgUrl}" />`;
  scrollContainer.appendChild(item);
  return item;
}

function getPrevIndex(i) {
  return i - 1 < 0 ? imgs.length - 1 : i - 1;
}
function getNextIndex(i) {
  return i + 1 > imgs.length - 1 ? 0 : i + 1;
}

function resetElements() {
  scrollContainer.innerHTML = '';
  const prevIndex = getPrevIndex(currentIndex);
  const nextIndex = getNextIndex(currentIndex);
  createItem(prevIndex).classList.add('prev');
  createItem(currentIndex).classList.add('cur');
  createItem(nextIndex).classList.add('next');
}

resetElements();
let isAnimation = false;
scrollContainer.addEventListener('wheel', (e) => {
  if (!e.deltaY || isAnimation) return;
  isAnimation = true;
  if (e.deltaY > 0) {
    scrollContainer.classList.add('scroll-down');
    currentIndex = getNextIndex(currentIndex);
  } else {
    scrollContainer.classList.add('scroll-up');
    currentIndex = getPrevIndex(currentIndex);
  }
});

scrollContainer.addEventListener('transitionend', () => {
  isAnimation = false;
  scrollContainer.classList.remove('scroll-down');
  scrollContainer.classList.remove('scroll-up');
  resetElements();
});
