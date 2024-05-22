const tabs = document.querySelectorAll('.tab-item');

for (const tab of tabs) {
  tab.onclick = function () {
    const active = document.querySelector('.tab-item.active');
    if (active) {
      active.classList.remove('active');
    }
    this.classList.add('active');
  };
}
