function vortex(n, m) {
  const nums = new Array(n).fill(0).map(() => new Array(m).fill(0));
  let i = 0; // 行号
  let j = 0; // 列号
  let count = 1;
  let stepI = 0; // 每次i增加的数字
  let stepJ = 1; // 每次j增加的数字
  function hasBlock() {
    return !nums[i] || nums[i][j] !== 0;
  }
  while (1) {
    nums[i][j] = count++;
    // 改变i和j
    i += stepI;
    j += stepJ;
    if (hasBlock()) {
      // 转弯
      i -= stepI;
      j -= stepJ;
      if (stepI === 0) {
        stepI = stepJ;
        stepJ = 0;
      } else {
        stepJ = -stepI;
        stepI = 0;
      }
      i += stepI;
      j += stepJ;
      if (hasBlock()) {
        break;
      }
    }
  }
  return nums;
}

console.log(vortex(5, 6));
