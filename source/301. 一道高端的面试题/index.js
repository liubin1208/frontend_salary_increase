// 下面代码输出的结果是什么
const obj = {
  a: 0,
};
obj['1'] = 0;
obj[++obj.a] = obj.a++;
const values = Object.values(obj);
obj[values[1]] = obj.a;
console.log(obj);
