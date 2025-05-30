/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const sum = nums.reduce((p, c) => p + c);
  if (sum % 2 === 1) return false;

  const target = sum / 2;
  const dp = new Array(target + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }

  return dp[target] === target;
};
