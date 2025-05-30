/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  const queue = [root];

  while (queue.length && root) {
    let len = queue.length;
    while (len--) {
      const node = queue.shift();
      const next = len ? queue[0] : null;
      if (next) {
        node.next = next;
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return root;
};
