/**
 * @param {string} s
 * @return {string}
 */

var reverseWords = function (s) {
  // 字符串转数组
  const strArr = Array.from(s);
  // 移除空格
  removeExtraSpace(strArr);

  // 先整体替换
  reverse(strArr, 0, strArr.length);

  // 再将单词反转过来
  let start = 0;
  for (let i = 0; i <= strArr.length; i++) {
    // 遇到空格或者结束的时候说明需要调换
    if (strArr[i] === " " || i === strArr.length) {
      reverse(strArr, start, i - 1);
      start = i + 1;
    }
  }

  return strArr.join("");
};

function removeExtraSpace(strArr) {
  let slowIndex = 0;
  let fastIndex = 0;

  while (fastIndex < strArr.length) {
    // 去除开始和中间重复的空格
    if (
      strArr[fastIndex] === " " &&
      (fastIndex === 0 || strArr[fastIndex - 1] === " ")
    ) {
      fastIndex++;
    } else {
      strArr[slowIndex++] = strArr[fastIndex++];
    }
  }

  // 去除末尾的空格
  strArr.length = strArr[slowIndex - 1] === " " ? slowIndex - 1 : slowIndex;
}

function reverse(strArr, start, end) {
  let l = start;
  let r = end;

  while (l < r) {
    [strArr[l], strArr[r]] = [strArr[r], strArr[l]];
    l++;
    r--;
  }
}
