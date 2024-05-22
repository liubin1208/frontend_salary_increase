const overlap = document.querySelector('.overlap');
overlap.innerHTML = overlap.textContent
  .split('')
  .map((c, i, arr) => `<span style="--i: ${arr.length - i}">${c}</span>`)
  .join('');
