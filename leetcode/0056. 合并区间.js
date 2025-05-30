/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // 排序
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let prev = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    let cur = intervals[i];
    // 判断是否有交叉
    if (cur[0] > prev[1]) {
      // 没有交叉
      result.push([...prev]);
      prev = cur;
    } else {
      prev[1] = Math.max(cur[1], prev[1]);
    }
  }

  result.push([...prev]);

  return result;
};
