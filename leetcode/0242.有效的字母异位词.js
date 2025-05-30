/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // 长度如果不相等，直接返回
  if (s.length !== t.length) return false;

  // 创建哈希表单
  const map = new Array(26).fill(0);
  const base = "a".charCodeAt();

  // 分别遍历
  for (let i = 0; i < s.length; i++) {
    const index = s[i].charCodeAt() - base;
    map[index]++;
  }

  for (let i = 0; i < t.length; i++) {
    const index = t[i].charCodeAt() - base;
    if (map[index] > 0) {
      map[index]--;
    } else {
      return false;
    }
  }

  return true;
};
