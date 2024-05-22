const inp = document.querySelector('input');
const container = document.querySelector('.container');
function cal() {
  container.style.setProperty('--progress', inp.value);
}
inp.oninput = cal;
cal();
