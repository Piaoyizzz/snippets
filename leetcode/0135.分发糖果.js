/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const array = new Array(ratings.length).fill(0);

  for (let i = 0; i < ratings.length; i++) {
    if (i > 0 && ratings[i] > ratings[i - 1]) {
      array[i] = array[i - 1] + 1;
    } else {
      array[i] = 1;
    }
  }

  // 从右边开始统计
  let right = 0;
  let ret = 0;
  for (let i = ratings.length - 1; i >= 0; i--) {
    if (i < ratings.length - 1 && ratings[i] > ratings[i + 1]) {
      right++;
    } else {
      right = 1;
    }

    // 累加
    ret += Math.max(array[i], right);
  }

  return ret;
};
