const overlap = document.querySelector('.overlap');
overlap.innerHTML = overlap.textContent
  .split('')
  .map((c, i, arr) => `<span style="z-index: ${arr.length - i}">${c}</span>`)
  .join('');
