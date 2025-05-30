/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  // 将问题简化成撞碎一半所剩下多少

  const sum = stones.reduce((acc, cur) => acc + cur);
  const dpLen = sum >> 1;
  const dp = new Array(dpLen + 1).fill(0); // 之所以要多一位，是因为需要从dp[0]开始

  for (let i = 0; i < stones.length; i++) {
    for (let j = dpLen; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - dp[dpLen] - dp[dpLen];
};
