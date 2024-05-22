const imgs = document.querySelectorAll('.container img');
const pointer = document.querySelector('.pointer');

imgs.forEach((img) => {
  img.onmouseenter = function () {
    pointer.style.setProperty('--x', `${this.offsetLeft}px`);
    pointer.style.setProperty('--y', `${this.offsetTop}px`);
    pointer.style.setProperty('--s', `${this.offsetWidth}px`);
  };
});
