function f(n) {
  if (n <= 2) {
    return n;
  }
  let last1 = 2,
    last2 = 1;
  for (let i = 3; i <= n; i++) {
    last1 = last1 + (last2 = last1);
  }
  return last1;
}
