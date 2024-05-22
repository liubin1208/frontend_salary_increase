/**
 * 判断是否是稀疏数组
 * @param {Array} arr
 */
function isSparseArray(arr) {
  if (!Array.isArray(arr)) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) {
      return true;
    }
  }
  return false;
}

const arr = [2, , , 51, 2, , ,];
console.log(isSparseArray(arr));
