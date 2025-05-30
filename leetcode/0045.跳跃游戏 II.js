/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let steps = 0;
  let curIndex = 0; // 当前跨的一步所能到达的最远下标
  let nextIndex = 0; // 下一步跨出去的一步所能到达的最远下标

  // 注意：这里最后一步并不参与跳跃
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(i + nums[i], nextIndex); // 不断寻找这一步能跨出去的最远下标

    // 抵达当前步的最远，要迈出下一步
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }

  return steps;
};
