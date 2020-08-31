
function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

/**
 * 分为两种实现方法，递归 & 迭代
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (root === null) return []
    
    return [root.val].concat(preorderTraversal(root.left)).concat(preorderTraversal(root.right))
}

var preorderTraversaliteration = function (root) {
    var arr = []
    function getNodeVal (node) {
        if (!!node) {
            arr.push(node.val)
            getNodeVal(node.left)
            getNodeVal(node.right)
        }
    }
    getNodeVal(root)
    return arr
}

// 栈实现
var preorderTraversalStack = function (root) {
    var output = []
    var stack = []

    if (!root) return output

    stack.push(root)
    while (stack.length) {
        var node = stack.pop()
        output.push(node.val)
        if (!!node.right) {
            stack.push(node.right)
        }
        if (!!node.left) {
            stack.push(node.left)
        }
    }
    return output
}

// 莫里斯遍历（降低空间复杂度）

