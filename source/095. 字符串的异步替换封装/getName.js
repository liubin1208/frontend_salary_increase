/**
 * 获取 [min, max] 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export default function (id) {
  return delay(getRandom(300, 2000)).then(() => {
    return `name${id}`;
  });
}
