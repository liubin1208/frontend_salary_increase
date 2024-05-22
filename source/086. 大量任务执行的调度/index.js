const btn = document.querySelector('.btn');
const label = document.querySelector('#waiting');

function delay() {
  const duration = 5;
  const start = Date.now();
  while (Date.now() - start < duration) {}
}

const n = 1000;
const tasks = new Array(n).fill(delay);

btn.onclick = async () => {
  label.textContent = '执行中...';

  const start = Date.now();
  await Promise.all(tasks.map((t) => runTask(t)));
  const end = Date.now();
  label.textContent = `执行完成，耗时：${end - start}毫秒`;
};
