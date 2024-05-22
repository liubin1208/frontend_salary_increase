const users = [
  { name: '龙傲天', sex: '男', age: 18 },
  { name: '叶良辰', sex: '男', age: 20 },
  { name: '欧阳吹雪', sex: '女', age: 20 },
  { name: '日天', sex: '男', age: 19 },
  { name: '王尼玛', sex: '男', age: 20 },
  { name: '福尔康', sex: '男', age: 18 },
  { name: '霍水凝', sex: '女', age: 20 },
];

console.log(countBy(users, (u) => u.sex));
console.log(countBy(users, (u) => u.age));
console.log(countBy(users, (u) => u.name.length));
console.log(countBy(users, (u) => (u.age >= 18 ? '成年' : '未成年')));

function countBy(array, generateKey) {
  const result = {};
  for (const u of array) {
    const key = generateKey(u);
    if (result[key]) {
      result[key]++;
    } else {
      result[key] = 1;
    }
  }
  return result;
}
