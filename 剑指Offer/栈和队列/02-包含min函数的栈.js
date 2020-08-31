/**
 * 题目描述：
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数。
 * 在该栈中，调用 min、push 及 pop 的时间复杂度都是 O（1）。
 * 
 * 解题思路：
 * 有关栈的题目，可以考虑使用“辅助栈”，即利用空间换时间的方法。
 * 这道题就是借助“辅助栈”来实现。当有新元素被 push 进普通栈的时候，程序比较新元素和辅助栈中的原有元素，选出最小的元素，将其放入辅助栈。
 * 根据栈的特点和操作思路，辅助栈顶的元素就是最小元素。并且辅助栈的元素和普通栈的元素是“一一对应”的。
 */

class MinStack {
    constructor () {
        this.stack = [] //数据栈
        this.minStack = [] //辅助栈，两个栈保留对应关系
    }

    push (item) {
        let minLength = this.minStack.length
        this.stack.push(item)

        if (minLength === 0) {
            // 初始情况，直接放入
            this.minStack.push(item)
        } else {
            if (item < this.minStack[minLength - 1]) {
                this.minStack.push(item)
            } else {
                this.minStack.push(this.minStack[minLength - 1])
            }
        }
    }

    pop () {
        if (this.stack.length === 0) {
            return null
        }

        this.minStack.pop()
        return this.stack.pop()
    }

    min () {
        let minLength = this.minStack.length
        if (minLength === 0) {
            return null
        }

        return this.minStack[minLength - 1]
    }
}


/**
 * 以下是测试代码
 */

const minStack = new MinStack()

minStack.push(3)
minStack.push(4)
minStack.push(2)
minStack.push(1)
console.log(minStack.minStack, minStack.min()) // output: [ 3, 3, 2, 1 ] 1

minStack.pop()
minStack.pop()
minStack.push(0)
console.log(minStack.minStack, minStack.min()) // output: [ 3, 3, 0 ] 0