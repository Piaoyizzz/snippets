// 1. 题目描述
// 一只青蛙一次可以跳上 1 级台阶，也可以跳上 2 级。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 2. 思路分析
// 跳到 n 阶假设有 f(n)种方法。
// 往前倒退，如果青蛙最后一次是跳了 2 阶，那么之前有 f(n-2)种跳法; 如果最后一次跳了 1 阶，那么之前有 f(n-1)种跳法。
// 所以：f(n) = f(n-1) + f(n-2)。就是斐波那契数列。

const fibonacci = (() => {
    let rem = new Map()
    rem.set(1, 1)
    rem.set(2, 2)

    const _fibonacci = n => {
        if (n <= 0 ) {
            throw new Error('param error')
        }

        if (rem.has(n)) {
            return rem.get(n)
        }

        rem.set(n, _fibonacci(n - 1) + _fibonacci(n - 2))
        return rem.get(n)
    }
    
    return _fibonacci
})()

/**
 * 测试代码
 */

let start = new Date().getTime()
let end = null

console.log(fibonacci(500))
end = new Date().getTime()
console.log(`耗时为${end - start}ms`)

start = end
console.log(fibonacci(800))
end = new Date().getTime()
console.log(`耗时为${end - start}ms`)