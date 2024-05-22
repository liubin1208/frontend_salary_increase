function delay(duration = 1000) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

function randomString(len) {
  return Math.random()
    .toString(36)
    .substring(2, len + 2);
}

/**
 * 获取 [min, max] 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export async function search(key) {
  await delay(100);
  const result = [];
  const len = getRandom(1, 5);
  for (let i = 0; i < len; i++) {
    const startLen = randomString(getRandom(0, 10));
    const endLen = randomString(getRandom(0, 10));
    const item = `${startLen}${key}${endLen}`;
    result.push({ value: item, label: item });
  }
  return result;
}
