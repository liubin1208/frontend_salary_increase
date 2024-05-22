const inp = document.querySelector('input');

inp.onchange = function () {
  const file = inp.files[0];
  const reader = new FileReader();
  reader.onload = (e) => {
    preview.src = e.target.result;
  };
  reader.readAsDataURL(file);
};
