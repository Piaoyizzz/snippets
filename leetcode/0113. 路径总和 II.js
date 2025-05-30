/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  if (!root) return [];

  const res = [];
  const stack = [root];
  const pathArr = [[]];
  const countArr = [0];

  while (stack.length) {
    const node = stack.pop();
    const count = countArr.pop() + node.val;
    const path = [...pathArr.pop(), node.val];

    // 满足条件
    if (node.left === null && node.right === null && count === targetSum) {
      res.push(path);
    }

    // 左子节点
    if (node.left) {
      stack.push(node.left);
      countArr.push(count);
      pathArr.push([...path]);
    }

    // 右子节点
    if (node.right) {
      stack.push(node.right);
      countArr.push(count);
      pathArr.push([...path]);
    }
  }

  return res;
};
