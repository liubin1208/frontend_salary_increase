import { captureFrame } from './captureFrame.js';

const inp = document.querySelector('input[type=file]');

inp.onchange = (e) => {
  const file = e.target.files[0];
  for (let i = 0; i < 10; i++) {
    captureFrame(file, i * 1).then((result) => {
      previewImage(result.url);
    });
  }
};

function previewImage(url) {
  const img = document.createElement('img');
  img.src = url;
  document.body.appendChild(img);
}
