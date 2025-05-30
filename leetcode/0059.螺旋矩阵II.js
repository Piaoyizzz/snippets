/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let startX = 0;
  let startY = 0;
  let offset = 1;
  let count = 1;
  let loop = n >> 1;
  const mid = n >> 1;
  const res = new Array(n).fill(0).map(() => new Array(n).fill(0));

  while (loop--) {
    let col = startX;
    let row = startY;

    for (; col < n - offset; col++) {
      res[row][col] = count++;
    }

    for (; row < n - offset; row++) {
      res[row][col] = count++;
    }

    for (; col > startY; col--) {
      res[row][col] = count++;
    }

    for (; row > startX; row--) {
      res[row][col] = count++;
    }

    startX++;
    startY++;
    offset++;
  }

  if (n % 2 !== 0) {
    res[mid][mid] = n * n;
  }

  return res;
};
