/**
 * 输入一个链表，从尾到头打印链表每个节点的值。
 * 
 * 思路:
 * 可以从头到尾遍历一遍链表，将节点放入栈中，然后依次取出打印（后入先出）。
 * 优化就是借助“递归”，先向下查找再打印输出，也可实现这种“后入先出”。可以类比二叉树的后序遍历。
 * 
 */

class Node {
    constructor (value, next = null) {
        this.value = value
        this.next = next
    }
}

class List {
    constructor () {
        this.head = new Node(null, null)
    }

    find (index) {
        let current = this.head
        for (let i = 0; i < index; i++) {
            current = current.next
        }
        return current
    }

    insert (value, index) {
        const prev = this.find(index)
        const next = new Node(value, prev.next)
        prev.next = next
    }
}

/**
 * 逆序打印列表 
 */
function printFromTailToHead (node) {
    if (node.next) {
        printFromTailToHead(node.next)
    }
    node.value && console.log(node.value)
}


/**
 * 测试代码
 */
let list = new List()
list.insert("a", 0)
list.insert("b", 1)
list.insert("c", 2)

printFromTailToHead(list.head)
