const input = document.querySelector('input');
const indicator = document.querySelector('.indicator');
const output = document.querySelector('output');
input.addEventListener('input', (e) => {
  setValue(e.target.value);
});

function setValue(val) {
  output.value = val;
  indicator.setAttribute(
    'style',
    `
    --completion: ${val}%
  `
  );
}
