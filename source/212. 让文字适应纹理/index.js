const txt = document.querySelector('.txt');
const svgText = document.querySelector('svg text');
const colorSelector = document.querySelector('input[type=color]');

txt.oninput = function () {
  svgText.textContent = this.value;
};

colorSelector.oninput = function () {
  svgText.style.fill = this.value;
};
