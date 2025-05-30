var isBalanced = function (root) {
  // 将这个问题转化为求高度问题
  const getHeight = (node) => {
    if (!node) return 0;

    const left = getHeight(node.left);
    if (left === -1) return -1;
    const right = getHeight(node.right);
    if (right === -1) return -1;

    if (Math.abs(left - right) > 1) {
      return -1;
    } else {
      return Math.max(left, right) + 1;
    }
  };

  return !(getHeight(root) === -1);
};
