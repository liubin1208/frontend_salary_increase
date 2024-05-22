/**
 * 求斐波拉契数列数列的第n位
 */
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }
  let p1 = 1,
    p2 = 1,
    r;
  for (let i = 2; i < n; i++) {
    r = p1 + p2;
    p1 = p2;
    p2 = r;
  }
  return r;
}

console.log(fibonacci(6));
