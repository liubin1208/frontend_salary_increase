/**
 * 数组去重
 * 两个属性相同的对象也认为是重复的
 * @param {Array} arr
 * @return {Array}
 */
function uniqueArray(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item1 = arr[i];
    let isFind = false;
    for (let j = 0; j < result.length; j++) {
      const item2 = result[j];
      if (equals(item1, item2)) {
        isFind = true;
        break;
      }
    }
    if (!isFind) {
      result.push(item1);
    }
  }
  return result;
}
function isPrimitive(value) {
  return value === null || !['object', 'function'].includes(typeof value);
}
function equals(value1, value2) {
  if (isPrimitive(value1) || isPrimitive(value2)) {
    return Object.is(value1, value2);
  }
  const entries1 = Object.entries(value1);
  const entries2 = Object.entries(value2);
  if (entries1.length !== entries2.length) {
    return false;
  }
  for (const [key, value] of entries1) {
    if (!equals(value, value2[key])) {
      return false;
    }
  }
  return true;
}

// console.log(equals({ a: 1, b: 2, c: 3 }, { b: 2, a: 1 }));

const arr = [
  { a: 1, b: undefined },
  { a: 1, c: undefined },
];
console.log(uniqueArray(arr));
