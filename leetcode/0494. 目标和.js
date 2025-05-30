/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((a, b) => a + b);

  if (Math.abs(target) > sum) {
    return 0;
  }

  if ((target + sum) % 2) {
    return 0;
  }

  const positiveSum = (target + sum) / 2;
  const dp = new Array(positiveSum + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < nums.length; i++) {
    for (let j = positiveSum; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]];
    }
  }

  return dp[positiveSum];
};
