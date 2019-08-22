export let winCoords = [];
const square = 4;
const checkWin = (x, arr) => {
  for (let col = 0, len = 4; col < len; col++) {
    for (let row = 0, len = 4; row < len; row++) {
      if (checkDiagonal(x, col, row, arr) || checkLanes(x, col, row, arr)) {
        //   console.log('checkDiagonal work');
        return true;
      }
    }
  }
};
const checkDiagonal = (x, offsetX, offsetY, arr) => {
  let toRight = true;
  let toLeft = true;
  winCoords = [];
  for (let i = offsetX, len = square + offsetX; i < len; i++) {
    toRight = toRight && arr[i][i - offsetX + offsetY] === x;
    toLeft = toLeft && arr[arr.length - i - 1][i - offsetX + offsetY] === x;
    if (toRight) {
      winCoords.push([i, i - offsetX + offsetY]);
    } else if (toLeft) {
      winCoords.push([arr.length - i - 1, i - offsetX + offsetY]);
    }
  }
  if (toRight || toLeft) {
    return true;
  }
  return false;
};
const checkLanes = (x, offsetX, offsetY, arr) => {
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
      if (cols) {
      } else if (rows) {
        winCoords.map(el => el.reverse());
      }
      //console.log('vertical || horizontal');
      return true;
    }
  }
  return false;
};

const testWinner = arr => {
  if (checkWin(true, arr) || checkWin(false, arr)) {
    return true;
  }
  return false;
};

export default testWinner;
