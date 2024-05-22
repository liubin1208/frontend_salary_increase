/**
 * 腾讯面试题
 * 两个超过整数存储范围的大正整数求和
 * @param {String} a
 * @param {String} b
 */
function sum(a, b) {
  const len = Math.max(a.length, b.length);
  a = a.padStart(len, '0');
  b = b.padStart(len, '0');
  let carry = 0;
  let result = '';
  for (let i = len - 1; i >= 0; i--) {
    const sum = +a[i] + +b[i] + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  if (carry) {
    result = carry + result;
  }

  return result;
}

console.log(sum('2342342352345234346564', '2345646456456'));
