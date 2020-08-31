/**
 *  用两个栈实现一个队列。队列的声明如下:
 *  请实现它的两个函数appendTail和deleteHead，分别完成在队列尾部插入结点和在队列头部删除结点的功能。
 * 
 *  思路:
 *  一个栈用来存储插入队列数据，一个栈用来从队列中取出数据。
 *  从第一个栈向第二个栈转移数据的过程中：数据的性质已经从后入先出变成了先入先出。
 */

class Queue {
    constructor () {
        this.stack1 = []
        this.stack2 = []
    }

    appendTail (value) {
        // 新插入的数据都放在 stack1
        this.stack1.push(value)
    }

    deleteHead () {
        // 将要取出来的值都从 stack2 取
        // 如果 stack 为空，则将 stack1 中的元素都转移过来
        if (this.stack2.length === 0) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop())
            }
        }

        return this.stack2.length === 0 ? null : this.stack2.pop()
    }
}


/**
 * 测试代码
 */
let queue = new Queue()
queue.appendTail(1)
queue.appendTail(2)
queue.appendTail(3)

console.log(queue.deleteHead())
queue.appendTail(1)

console.log(queue.deleteHead())
console.log(queue.deleteHead())
console.log(queue.deleteHead())
