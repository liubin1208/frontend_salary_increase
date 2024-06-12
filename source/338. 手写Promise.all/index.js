Promise.myAll = function (proms) {
  let res, rej;
  const p = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  let i = 0;
  const result = [];
  for (const prom of proms) {
    const index = i;
    i++;
    Promise.resolve(prom).then((data) => {
      // 1. 将完成的数据加入到最终结果
      result[index] = data;
      // 2. 判断是否全部完成
      i--;
      if (i === 0) {
        res(result);
      }
    }, rej);
  }
  if (i === 0) {
    res([]);
  }
  return p;
};

Promise.myAll([1, 2, 3, 4]).then(
  (datas) => {
    console.log(datas);
  },
  (err) => {
    console.log(err);
  }
);
