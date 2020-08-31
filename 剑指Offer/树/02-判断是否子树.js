/**
 * 题目描述：
 * 输入两棵二叉树 A 和 B，判断 B 是不是 A 的子结构。
 */

/**
 * 二叉树结点类
 */
class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

/**
 * p2是否是p1的子树, 参数特点是: p1和p2的根节点value相同
 * @param {Node} p1
 * @param {Node} p2
 */

function doesTree1HaveTree2 (p1, p2) {
    // p2遍历完了，说明p2包含在p1中
    if (!p2) {
        return true
    }

    // p1提前遍历完 || 两个节点不同  则可以说明p2不包含在其中
    if (!p1 || p1.value !== p2.value) {
        return false
    }

    return (
        doesTree1HaveTree2(p1.left, p2.left) &&
        doesTree1HaveTree2(p1.right, p2.right)
    )
}

/**
 * 判断p1是否包含p2
 * @param {Node} p1
 * @param {Node} p2
 */

function hasSubTree (p1, p2) {
    let result = false

    if (p1 & p2) {
        // 节点相同，进一步比较
        if (p1.value === p2.value) {
            console.log(1)
            result = doesTree1HaveTree2(p1, p2)
        }

        // 往左找
        if (!result) {
            result = hasSubTree(p1.left, p2)
        }
        // 往右找
        if (!result) {
            result = hasSubTree(p1.right, p2)
        }
    }
    return result
}

/**
 * 以下是测试代码
 */
const tree1 = new Node(0, new Node(1, new Node(3)), new Node(2))

const tree2 = new Node(1, new Node(3))

console.log(hasSubTree(tree1, tree2))