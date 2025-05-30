/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  const dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  let numsOfZero = 0;
  let numsOfOne = 0;

  for (let str of strs) {
    numsOfZero = 0;
    numsOfOne = 0;

    // 遍历字符串
    for (let char of str) {
      if (char === "0") {
        numsOfZero++;
      } else {
        numsOfOne++;
      }
    }

    // 迭代滚动数组
    for (let i = m; i >= numsOfZero; i--) {
      for (let j = n; j >= numsOfOne; j--) {
        dp[i][j] = Math.max(dp[i][j], dp[i - numsOfZero][j - numsOfOne] + 1);
      }
    }
  }

  return dp[m][n];
};
