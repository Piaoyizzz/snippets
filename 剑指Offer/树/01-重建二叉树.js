/**
 * 题目思路：
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。
 */

/**
 * 二叉树节点类型
 */
class Node {
    constructor(value, left = null, right = null) {
        this.value = value
        this.left = left
        this.right = right
    }
}

/**
 * 根据前序遍历和中序遍历重构二叉树
 */
function reConstruct (preorder, inorder) {
    if (!preorder.length || !inorder.length) {
        return
    }

    let node = new Node(preorder[0])

    let i = 0
    for (; i < inorder.length; i++) {
        if (inorder[i] === preorder[0]) break
    }

    node.left = reConstruct(preorder.slice(1, i + 1), inorder.slice(0, i))
    node.right = reConstruct(preorder.slice(i + 1), inorder.slice(i + 1))

    return node
}

/**
 * 测试代码
 */
const preArr = [1, 2, 4, 7, 3, 5, 6, 8]
const midArr = [4, 7, 2, 1, 5, 3, 8, 6]
const binTree = reConstruct(preArr, midArr)
console.log(binTree)