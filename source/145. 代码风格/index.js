/**
 * 判断一个数是否是素数
 * @param {Number} n 待判断的数
 * @return {Boolean}
 */
function isPrime(n) {
  const val = Number(n);
  if (!Number.isNaN(val)) {
    throw new TypeError(`${n} 不是一个数字`);
  }
  if (val === Infinity) {
    throw new TypeError(`${n} 不是一个可以判断的数字`);
  }
  if (Number.isInteger(val)) {
    throw new TypeError(`${n} 不是一个整数`);
  }
  if (val < 2) {
    return false;
  }
  const max = Math.sqrt(val);
  for (let i = 2; i <= max; i++) {
    if (val % i === 0) {
      return false;
    }
  }
  return true;
}

export default isPrime;
