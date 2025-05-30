/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const hash = {};
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = i;
  }

  const result = [];
  let left = 0;
  let right = 0;

  for (let i = 0; i < s.length; i++) {
    // 不断迭代找到字符的最远边界
    right = Math.max(right, hash[s[i]]);
    if (right === i) {
      result.push(right - left + 1);
      left = right + 1;
    }
  }

  return result;
};
