const people = [
  { name: 'Alice', age: 30, sex: 'female' },
  { name: 'Bob', age: 25, sex: 'male' },
  { name: 'Charlie', age: 30, sex: 'male' },
  { name: 'Diana', age: 25, sex: 'female' },
  { name: 'Eva', age: 25, sex: 'female' },
  { name: 'Frank', age: 25, sex: 'male' },
  {
    name: 'Grace',
    age: 20,
    sex: 'female',
    address: {
      province: '广东',
      city: '广州',
    },
  },
];

function groupBy(arr, generateKey) {
  if (typeof generateKey === 'string') {
    const propName = generateKey;
    generateKey = (item) => item[propName];
  }
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const key = generateKey(arr[i], i, arr);
    if (result[key]) {
      result[key].push(arr[i]);
    } else {
      result[key] = [arr[i]];
    }
  }
  return result;
}

// 按照性别分组
const result1 = groupBy(people, 'sex');
console.log(result1);
// 按照年龄分组
const result2 = groupBy(people, (p) => p.age);
console.log(result2);
// 按照性别-年龄分组
const result3 = groupBy(people, (p) => `${p.sex}-${p.age}`);
console.log(result3);
// 数字的奇偶分组
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result4 = groupBy(arr, (n) => (n % 2 === 0 ? '偶' : '奇'));
console.log(result4);
