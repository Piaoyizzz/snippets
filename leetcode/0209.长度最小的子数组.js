/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  // 滑动区间
  let start = 0;
  let end = 0;
  let sum = 0;
  let res = Infinity;
  const len = nums.length;

  while (end < len) {
    sum += nums[end];
    while (sum >= target) {
      res = Math.min(res, end - start + 1);
      sum -= nums[start];
      start++;
    }

    end++;
  }

  return res === Infinity ? 0 : res;
};
