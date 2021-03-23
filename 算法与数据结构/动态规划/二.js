/**
 * 先从 0-1背包问题开始
 *
 * 有 n 件物品，物品体积用一个名为 w 的数组存起来，物品的价值用一个名为 value 的数组存起来；
 * 每件物品的体积用 w[i] 来表示，每件物品的价值用 value[i] 来表示。
 * 现在有一个容量为 c 的背包，问你如何选取物品放入背包，才能使得背包内的物品总价值最大？
 *
 * 注意：每种物品都只有1件
 */

/**
 * @param {*} n      物品的个数
 * @param {*} c      背包的容积上限
 * @param {*} w      物品的重量数组
 * @param {*} value  物品的价值数组
 */
function knapsack(n, c, w, value) {
  // dp是动态规划的状态保存数组（用滚动数组来替代二维数组的做法）
  const dp = new Array(c + 1).fill(0);

  // 最优解
  let res = -Infinity;
  for (let i = 1; i <= n; i++) {
    for (let v = c; v >= w[i]; v--) {
      dp[v] = Math.max(dp[v], dp[v - w[i]] + value[i]);

      if (dp[v] > res) {
        res = dp[v];
      }
    }
  }

  return res;
}

/**
 * 序列类题目
 *
 * 1.关注到序列元素中的索引
 */

// LeetCode No.300
/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
  // 缓存序列的长度
  const len = nums.length;
  // 处理边界条件
  if (!len) {
    return 0;
  }
  // 初始化数组里面每一个索引位的状态值
  const dp = new Array(len).fill(1);
  // 初始化最大上升子序列的长度为1
  let maxLen = 1;
  // 从第2个元素开始，遍历整个数组
  for (let i = 1; i < len; i++) {
    // 每遍历一个新元素，都要“回头看”，看看能不能延长原有的上升子序列
    for (let j = 0; j < i; j++) {
      // 若遇到了一个比当前元素小的值，则意味着遇到了一个可以延长的上升子序列，故更新当前元素索引位对应的状态
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 及时更新上升子序列长度的最大值
    if (dp[i] > maxLen) {
      maxLen = dp[i];
    }
  }
  // 遍历完毕，最后到手的就是最大上升子序列的长度
  return maxLen;
};
