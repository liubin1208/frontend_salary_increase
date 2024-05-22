const btn = document.querySelector('button');
const box = document.querySelector('.box');
const label = document.querySelector('label');

btn.onclick = async () => {
  const dropper = new EyeDropper();
  try {
    const result = await dropper.open();
    box.style.backgroundColor = label.textContent = result.sRGBHex;
  } catch {
    console.log('user canceled');
  }
};
