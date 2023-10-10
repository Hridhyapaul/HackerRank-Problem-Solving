// ------------------First Solution------------------

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  let length = arr.length - 1;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][length - i];
  }
  return Math.abs(firstDiagonal - secondDiagonal);
}

// -----------------Second Solution--------------------

function diagonalDifference(arr) {
  let firstDiagonalSum = arr[0][0] + arr[1][1] + arr[2][2];
  let secondDiagonalSum = arr[0][2] + arr[1][1] + arr[2][0];
  let result = secondDiagonalSum - firstDiagonalSum;

  return result;
}

// -------------------Third Solution-----------------

function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;

  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - 1 - i];
  }
  let sum = Math.abs(firstDiagonal - secondDiagonal);
  return sum;
}
