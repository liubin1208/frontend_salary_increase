const ps = document.querySelectorAll('.title');

ps.forEach((p) => {
  const result = p.textContent
    .split('')
    .map((letter) => `<span>${letter}</span>`)
    .join(``);
  p.innerHTML = result;
});

const spans = document.querySelectorAll('.title span');
for (let i = 0; i < spans.length; i++) {
  spans[i].style.setProperty('--d', i * 0.2 + 's');
}
