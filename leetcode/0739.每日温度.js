/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const res = new Array(len).fill(0);

  // 单调栈（用来存储下标）
  const stack = [];

  for (let i = 0; i < len; i++) {
    // 判断是否大于栈顶元素
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const top = stack.pop();
      res[top] = i - top;
    }

    stack.push(i);
  }

  return res;
};
