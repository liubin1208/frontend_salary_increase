function package(bagWeight, value, weight) {
  let line = [];
  // 搞定第一行
  for (let i = 0; i <= bagWeight; i++) {
    line[i] = i >= weight[0] ? value[0] : 0;
  }
  // 搞定剩余行
  for (let i = 1; i < value.length; i++) {
    const next = [];
    for (let j = 0; j <= bagWeight; j++) {
      if (j < weight[i]) {
        next[j] = line[j];
      } else {
        next[j] = Math.max(value[i] + line[j - weight[i]], line[j]);
      }
    }
    line = next;
  }
  return line[bagWeight];
}

const result = package(6, [5, 10, 3, 6, 3], [2, 5, 1, 4, 3]);
console.log(result); // expect: 13
