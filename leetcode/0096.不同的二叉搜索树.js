/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    // j 可以理解为：在总共有i个节点的情况下，左子树有多少个节点
    for (let j = 0; j < i; j++) {
      // 不断累加左子树乘以右子树的情况
      dp[i] += dp[j] * dp[i - 1 - j];
    }
  }

  return dp[n];
};
