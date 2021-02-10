// 回文判断
function isPalindrome_bad(str) {
  // 先反转字符串
  const reversedStr = str.split("").reversed().join("");
  // 判断反转前后是否相等
  return reversedStr === str;
}

function isPalindrome(str) {
  // 缓存字符串的长度
  const len = str.length;

  // 遍历前半部分，判断与后半部分是否对称
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }

  return true;
}

// LeetCode No.680
const validPalindrome = function (s) {
  // 缓存字符串的长度
  const len = s.length;

  // i、j分别为左右指针
  let i = 0,
    j = len - 1;

  // 当左右指针均满足对称时，一起向中间前进
  while (i < j && s[i] === s[j]) {
    i++;
    j--;
  }

  // 尝试判断跳过左指针元素后字符串是否回文
  if (isPalindrome(i + 1, j)) {
    return true;
  }

  // 尝试判断跳过右指针元素后字符串是否回文
  if (isPalindrome(i, j - 1)) {
    return true;
  }

  // 工具方法，用于判断字符串是否回文
  function isPalindrome(st, ed) {
    while (st < ed) {
      if (s[st] !== s[ed]) {
        return false;
      }
      st++;
      ed--;
    }
    return true;
  }

  // 默认返回 false
  return false;
};
