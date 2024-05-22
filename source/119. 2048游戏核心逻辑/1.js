const matrix = [
  [0, 2, 2, 0],
  [0, 0, 2, 2],
  [2, 4, 4, 2],
  [2, 4, 4, 4],
];
Array.prototype.print = function () {
  console.log(this.join('\n'));
};
move(matrix, 'up');
matrix.print();
function move(matrix, direction) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  function _inRange(i, j) {
    return i >= 0 && i < rows && j >= 0 && j < cols;
  }

  const next = {
    up: (i, j) => [i + 1, j],
    down: (i, j) => [i - 1, j],
    left: (i, j) => [i, j + 1],
    right: (i, j) => [i, j - 1],
  };

  function _nextNonZeroValue(i, j) {
    if (!_inRange(i, j)) {
      return;
    }
    let [nextI, nextJ] = next[direction](i, j);
    while (_inRange(nextI, nextJ)) {
      if (matrix[nextI][nextJ] !== 0) {
        return [nextI, nextJ, matrix[nextI][nextJ]];
      }
      [nextI, nextJ] = next[direction](nextI, nextJ);
    }
  }

  // 处理一行或一列
  function _cal(i, j) {
    if (!_inRange(i, j)) {
      return;
    }
    const result = _nextNonZeroValue(i, j);
    if (!result) {
      return;
    }
    const [nextI, nextJ, nextValue] = result;
    if (matrix[i][j] === 0) {
      matrix[i][j] = nextValue;
      matrix[nextI][nextJ] = 0;
      _cal(i, j);
    } else if (matrix[i][j] === nextValue) {
      matrix[i][j] *= 2;
      matrix[nextI][nextJ] = 0;
    }
    [i, j] = next[direction](i, j);
    _cal(i, j);
  }

  if (direction === 'up') {
    for (let j = 0; j < cols; j++) {
      _cal(0, j);
    }
  } else if (direction === 'down') {
    for (let j = 0; j < cols; j++) {
      _cal(rows - 1, j);
    }
  } else if (direction === 'left') {
    for (let i = 0; i < rows; i++) {
      _cal(i, 0);
    }
  } else if (direction === 'right') {
    for (let i = 0; i < rows; i++) {
      _cal(i, cols - 1);
    }
  }
}
