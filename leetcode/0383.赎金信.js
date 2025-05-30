/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  const map = new Map();

  // 录入字典
  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  // 检查字典
  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.get(ransomNote[i])) {
      return false;
    } else {
      map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
    }
  }

  return true;
};
