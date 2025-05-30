/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let i = 0;
  let j = nums.length - 1;
  let k = nums.length - 1;
  const res = new Array(nums.length).fill(0);

  while (i <= j) {
    const left = nums[i] * nums[i];
    const right = nums[j] * nums[j];
    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }

  return res;
};
