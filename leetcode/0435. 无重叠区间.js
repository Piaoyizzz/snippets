/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // 先需要按照右端点排序
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;
  let right = intervals[0][1]; // 记录右边的端点情况，然后用左边的端点去比较
  for (let i = 1; i < intervals.length; i++) {
    // 说明这是一个独立的区间
    if (intervals[i][0] >= right) {
      count++;
      right = intervals[i][1];
    }
  }

  return intervals.length - count - 1;
};
