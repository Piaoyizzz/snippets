/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const res = [];
  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    const level = [];
    while (len--) {
      const node = queue.shift();
      level.push(node.val);

      for (let child of node.children) {
        queue.push(child);
      }
    }
    res.push(level);
  }

  return res;
};
