/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let mid = 0;
  let lelf = 0;
  let right = nums.length - 1;

  while (lelf <= right) {
    mid = lelf + ((right - lelf) >> 1);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      lelf = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};
