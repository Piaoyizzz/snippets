/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;

  // 采取三指针方法（必须要求数组是有序的）
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len; i++) {
    // 定义三指针
    let l = i + 1;
    let r = len - 1;
    let iNum = nums[i];

    // 如果第一个数直接大于0，则表明无合适结果直接返回
    if (iNum > 0) return res;

    // 去重复操作
    if (iNum === nums[i - 1]) continue;

    while (l < r) {
      let lNum = nums[l];
      let rNum = nums[r];
      let threeSum = nums[i] + nums[l] + nums[r];

      if (threeSum < 0) {
        l++;
      } else if (threeSum > 0) {
        r--;
      } else {
        // 找到正确答案
        res.push([iNum, lNum, rNum]);

        // 去重处理
        while (lNum === nums[l + 1]) {
          l++;
        }
        while (rNum === nums[r - 1]) {
          r--;
        }
        l++;
        r--;
      }
    }
  }

  return res;
};
