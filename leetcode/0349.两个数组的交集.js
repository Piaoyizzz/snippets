/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const res = new Set();

  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      res.add(nums2[i]);
    }
  }

  return Array.from(res);
};
