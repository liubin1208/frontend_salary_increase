async function fetchCount(id) {
  function delay(duration = 1000) {
    return new Promise((resolve) => {
      setTimeout(resolve, duration);
    });
  }
  await delay(300);
  return id;
}

let count = 0; // 统计设备的月销量

async function addCount(id) {
  const res = await fetchCount(id);
  count += res;
}

addCount(1);
addCount(2);

setTimeout(() => {
  console.log(count);
}, 1000);
