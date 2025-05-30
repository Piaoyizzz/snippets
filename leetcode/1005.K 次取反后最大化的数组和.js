/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  let sum = 0;
  // 按照绝对值从大到小排序
  nums = nums.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let i = 0; i < nums.length; i++) {
    if (k > 0 && nums[i] < 0) {
      nums[i] = -nums[i];
      k--;
    }
    sum += nums[i];
  }

  // 处理 k 有剩下的情况
  if (k % 2) {
    const end = nums[nums.length - 1];
    sum = sum - 2 * end;
  }

  return sum;
};
