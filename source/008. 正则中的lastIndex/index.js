const reg = /^1\d{10}$/g;

const msg = document.querySelector('.form-msg');
const input = document.querySelector('.form-input input');

input.oninput = function () {
  reg.lastIndex = 0;
  if (reg.test(this.value)) {
    msg.style.display = 'none';
  } else {
    msg.style.display = 'block';
  }
};
