/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  // 原则上需要转化为求第二个数组的单调栈，再通过哈希表去记录结果

  const stack = [];
  const map = new Map();

  for (let i = 0; i < nums2.length; i++) {
    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      const top = stack.pop();
      map.set(nums2[top], nums2[i]);
    }

    stack.push(i);
  }

  const res = [];
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map.get(nums1[i]) || -1;
  }

  return res;
};
