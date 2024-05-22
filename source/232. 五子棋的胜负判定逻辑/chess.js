function isValid(board, point, color) {
  const rows = board.length;
  const cols = board[0].length;
  const [x, y] = point;
  return x >= 0 && x < cols && y >= 0 && y < rows && board[y][x] === color;
}

function createIsWin(p1Movement, p2Movement) {
  return function (board, point, color) {
    let count = 1;
    let p1 = p1Movement(point);
    let p2 = p2Movement(point);
    while (1) {
      let p1IsValid = false;
      let p2IsValid = false;
      if (isValid(board, p1, color)) {
        count++;
        p1IsValid = true;
        p1 = p1Movement(p1);
      }
      if (isValid(board, p2, color)) {
        count++;
        p2IsValid = true;
        p2 = p2Movement(p2);
      }
      if (count >= 5) {
        return true;
      }
      if (!p1IsValid && !p2IsValid) {
        return false;
      }
    }
  };
}

const isWinHorizontal = createIsWin(
  ([x, y]) => [x + 1, y],
  ([x, y]) => [x - 1, y]
);
const isWinVertical = createIsWin(
  ([x, y]) => [x, y + 1],
  ([x, y]) => [x, y - 1]
);
const isWinSlash = createIsWin(
  ([x, y]) => [x + 1, y + 1],
  ([x, y]) => [x - 1, y - 1]
);
const isWinBackSlash = createIsWin(
  ([x, y]) => [x + 1, y - 1],
  ([x, y]) => [x - 1, y + 1]
);

function isWin(board, point, color) {
  return (
    isWinHorizontal(board, point, color) ||
    isWinVertical(board, point, color) ||
    isWinSlash(board, point, color) ||
    isWinBackSlash(board, point, color)
  );
}
