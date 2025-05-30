/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let totalSum = 0;
  let curSum = 0;

  for (let i = 0; i < gas.length; i++) {
    curSum += gas[i] - cost[i];
    totalSum += gas[i] - cost[i];

    // 如果出现小于0的情况，则无法到达下一个，说明应该从下一个节点开始重新计算
    if (curSum < 0) {
      curSum = 0;
      start = i + 1;
    }
  }

  // 发生这种情况是无论如何都不能走完一圈的
  if (totalSum < 0) return -1;

  return start;
};
