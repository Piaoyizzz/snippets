/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  points.sort((a, b) => {
    return a[0] - b[0];
  });

  // 至少需要一根箭
  let result = 1;
  for (let i = 1; i < points.length; i++) {
    if (points[i][0] > points[i - 1][1]) {
      // 完全不相交
      result++;
    } else {
      // 为了维持相交的情况
      points[i][1] = Math.min(points[i][1], points[i - 1][1]);
    }
  }

  return result;
};
