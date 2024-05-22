const express = require('express');
const app = express();
/**
 * 获取 [min, max] 范围内的随机整数
 * @return {Number}
 */
function getRandom(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}
app.get('/api/search', (req, res) => {
  const key = req.query.key;
  if (!key) {
    res.send([]);
  }
  const results = new Array(getRandom(3, 10));
  for (let i = 0; i < results.length; i++) {
    results[i] = key.repeat(i + 1);
  }
  setTimeout(() => {
    res.header('Access-Control-Allow-Origin', '*');
    res.send(results);
  }, getRandom(10, 2000));
});

app.listen(9527, () => {
  console.log('server started');
});
