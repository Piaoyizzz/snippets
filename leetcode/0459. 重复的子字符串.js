/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const index = (s + s).indexOf(s, 1);

  if (index < 0 || index === s.length) {
    return false;
  }

  return true;
};

/**
 * 可以使用 KMP 方法解决问题
 */
