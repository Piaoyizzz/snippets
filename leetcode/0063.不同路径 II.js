/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length;
  const n = obstacleGrid[0].length;

  // 用原来的数组直接开始操作
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 非障碍物
      if (obstacleGrid[i][j] === 0) {
        // 处理边界
        if (i === 0) {
          obstacleGrid[i][j] = obstacleGrid[i][j - 1] ?? 1;
        } else if (j === 0) {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] ?? 1;
        } else {
          obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
        }
      } else {
        // 障碍物，直接将路径设置为0
        obstacleGrid[i][j] = 0;
      }
    }
  }

  return obstacleGrid[m - 1][n - 1];
};
