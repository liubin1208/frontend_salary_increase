/**
 * 数组去重
 * 两个属性相同的对象也认为是重复的
 * @param {Array} arr
 * @return {Array}
 */
function uniqueArray(arr) {
  const result = [];
  outer: for (const item of arr) {
    for (const r of result) {
      if (equals(item, r)) {
        continue outer;
      }
    }
    result.push(item);
  }
  return result;
}

function isPrimitive(val) {
  return val === null || (typeof val !== 'object' && typeof val !== 'function');
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
  for (const [key, val] of entries1) {
    if (!equals(val, value2[key])) {
      return false;
    }
  }
  return true;
}

const arr = [
  { a: 1, b: undefined },
  { a: 1, c: undefined },
];
console.log(uniqueArray(arr));
