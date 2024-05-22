const arr = [
  { a: 1, b: 2 },
  { a: 1, b: 2 },
  { a: 1, b: 2, c: { a: 1, b: 2 } },
  { b: 2, a: 1, c: { b: 2, a: 1 } },
];
const isObject = (val) => typeof val === 'object' && val !== null;
// 对象数组去重，只要对象的所有属性值相同，则表示相同对象
const newArr = [...arr];
for (let i = 0; i < newArr.length; i++) {
  for (let j = i + 1; j < newArr.length; j++) {
    if (equals(newArr[i], newArr[j])) {
      newArr.splice(j, 1);
      j--;
    }
  }
}

function equals(val1, val2) {
  if (!isObject(val1) || !isObject(val2)) return Object.is(val1, val2);
  if (val1 === val2) return true;
  const val1Keys = Object.keys(val1);
  const val2Keys = Object.keys(val2);
  if (val1Keys.length !== val2Keys.length) return false;
  for (const key of val1Keys) {
    if (!val2Keys.includes(key)) {
      return false;
    }
    const res = equals(val1[key], val2[key]);
    if (!res) return false;
  }
  return true;
}
console.log(newArr);
