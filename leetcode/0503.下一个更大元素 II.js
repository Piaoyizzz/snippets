/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  const len = nums.length;
  const stack = [];
  const res = new Array(len).fill(-1);

  for (let i = 0; i < len * 2; i++) {
    while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
      const top = stack.pop();
      res[top] = nums[i % len];
    }
    stack.push(i % len);
  }

  return res;
};
