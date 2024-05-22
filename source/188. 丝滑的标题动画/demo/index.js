document.querySelectorAll('.title').forEach((title) => {
  title.innerHTML = title.textContent
    .split('')
    .map((c) => `<span class="letter">${c.trim() ? c : '&nbsp;'}</span>`)
    .join('');
});

const letters = document.querySelectorAll('.letter');
for (let i = 0; i < letters.length; i++) {
  letters[i].style.setProperty('--delay', `${i * 0.1}s`);
}
