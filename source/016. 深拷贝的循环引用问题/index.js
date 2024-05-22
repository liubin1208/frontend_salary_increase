const obj = {
  arr: [1, 2, 3],
  a: 4,
};
obj.sub = obj;
obj.arr.push(obj);

function deepClone(value) {
  const cache = new WeakMap();
  function _deepClone(value) {
    if (value === null || typeof value !== 'object') {
      return value;
    }
    if (cache.has(value)) {
      return cache.get(value);
    }
    const result = Array.isArray(value) ? [] : {};
    cache.set(value, result);
    for (let key in value) {
      if (value.hasOwnProperty(key)) {
        result[key] = _deepClone(value[key]);
      }
    }
    return result;
  }
  return _deepClone(value);
}
const newObj = deepClone(obj);
console.log(newObj.arr !== obj.arr);
console.log(newObj.sub !== obj.sub);
console.log(newObj.arr[3] !== obj);
console.log(newObj.arr[3] === newObj);
