const h1 = document.querySelector('h1');
const button = document.querySelector('button');
const inp = document.querySelector('input');

h1.textContent = Math.random().toString(36).substring(2, 15);

button.addEventListener('animationend', () => {
  button.classList.remove('success');
});

button.addEventListener('click', () => {
  copyText(h1.textContent);
  button.classList.add('success');
});
