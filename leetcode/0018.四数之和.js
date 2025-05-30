/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  const res = [];
  if (len < 4) return res;

  // 排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 3; i++) {
    // 去重处理
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // 将问题变成三个数之和
    for (let j = i + 1; j < len - 2; j++) {
      // 去重处理
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;

      let l = j + 1;
      let r = len - 1;

      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) {
          l++;
        } else if (sum > target) {
          r--;
        } else {
          res.push([nums[i], nums[j], nums[l], nums[r]]);

          while (l < r && nums[l] === nums[l + 1]) {
            l++;
          }

          while (l < r && nums[r] === nums[r - 1]) {
            r--;
          }

          l++;
          r--;
        }
      }
    }
  }

  return res;
};
