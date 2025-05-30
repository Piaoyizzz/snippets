/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  let count = 1; // 因为数组的长度大于等于1，所以输出永远是从大于1开始
  let prevDiff = 0;
  let curDiff = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    curDiff = nums[i + 1] - nums[i];

    // 两种情况（等于的情况不用处理）
    if ((curDiff < 0 && prevDiff >= 0) || (curDiff > 0 && prevDiff <= 0)) {
      count++;
      prevDiff = curDiff;
    }
  }

  return count;
};
