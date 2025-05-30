/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  n = n
    .toString()
    .split("")
    .map((item) => +item);

  let flag = Infinity;

  for (let i = n.length - 1; i > 0; i--) {
    // 检测到上一位比下一位大
    if (n[i - 1] > n[i]) {
      flag = i;
      n[i - 1] = n[i - 1] - 1;
      n[i] = 9;
    }
  }

  for (let i = flag; i < n.length; i++) {
    n[i] = 9;
  }

  return +n.join("");
};
