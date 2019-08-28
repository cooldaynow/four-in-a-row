const square = 4;
const checkWin = (x, arr) => {
  let winCoords;
  for (let col = 0, len = 4; col < len; col++) {
    for (let row = 0, len = 4; row < len; row++) {
      if (checkDiagonal(x, col, row, arr) || checkLanes(x, col, row, arr)) {
        if (checkDiagonal(x, col, row, arr)) {
          winCoords = checkDiagonal(x, col, row, arr);
        } else if (checkLanes(x, col, row, arr)) {
          winCoords = checkLanes(x, col, row, arr);
        }
        return winCoords;
      }
    }
  }
};
const checkDiagonal = (x, offsetX, offsetY, arr) => {
  let winCoordsLeft = [];
  let winCoordsRight = [];
  return (() => {
    let toRight = true;
    let toLeft = true;
    winCoordsLeft = [];
    winCoordsRight = [];
    for (let i = offsetX, len = square + offsetX; i < len; i++) {
      toRight = toRight && arr[i][i - offsetX + offsetY] === x;
      toLeft = toLeft && arr[arr.length - i - 1][i - offsetX + offsetY] === x;
      if (toRight) {
        winCoordsRight.push([i, i - offsetX + offsetY]);
      }
      if (toLeft) {
        winCoordsLeft.push([arr.length - i - 1, i - offsetX + offsetY]);
      }
    }
    if (toRight) {
      return winCoordsRight;
    }
    if (toLeft) {
      return winCoordsLeft;
    }
  })();
};
const checkLanes = (x, offsetX, offsetY, arr) => {
  let winCoords;
  for (let i = offsetX, len = square + offsetX; i < len; i++) {
    let rows = true;
    let cols = true;
    winCoords = [];

    for (let j = offsetY, len = square + offsetY; j < len; j++) {
      cols = cols && arr[i][j] === x;
      rows = rows && arr[j][i] === x;
      winCoords.push([i, j]);
    }
    if (cols || rows) {
      if (rows) {
        winCoords.map(el => el.reverse());
      }
      return winCoords;
    }
  }
};

export const testWinner = arr => {
  if (checkWin(1, arr)) {
    return checkWin(1, arr);
  }
  if (checkWin(2, arr)) {
    return checkWin(2, arr);
  }
};

export const testDraw = arr => {
  const fullColumns = arr.filter(col => col.length === 6);
  return fullColumns.length === 7;
};
