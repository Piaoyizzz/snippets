/**
 * 函数应用之柯里化
 * 
 * 定义：柯里化是一种将使用多个参数的函数转换成一系列使用一个参数的函数，并且返回接受余下的参数而且返回结果的新函数的技术
 * 实际应用
 * 延迟计算：部分求和、bind 函数
 * 动态创建函数：添加监听 addEvent、惰性函数
 * 参数复用：Function.prototype.call.bind(Object.prototype.toString)
 * 实现 currying 函数：用闭包把传入参数保存起来，当传入参数的数量足够执行函数时，就开始执行函数
 * 函数参数 length：获取的是形参的个数，但是形参的数量不包括剩余参数个数，而且仅包括第一个具有默认值之前的参数个数
 */

// 1.延迟计算
const add = (...args) => args.reduce((a, b) => { return a + b })

function curryingDelay (func) {
    const args = []
    return function result (...rest) {
        if (rest.length === 0) {
            return func(...args)
        } else {
            args.push(...rest)
            return result
        }
    }
}

const sum = curryingDelay(add)

sum(1, 2)(3) // 未真正求值
sum(4) // 未真正求值
sum() 


// 2.bind函数的应用
Function.prototype.bind = function (context) {
    var self = this // 这里的this是指向实例化的每个function

    var args = Array.prototype.slice.call(arguments, 1)

    return function () {
        var bindArgs = Array.prototype.slice.call(arguments)
        // 执行函数
        return self.call(context, ...args.concat(bindArgs))
    }
}

// 3.事件兼容处理，总的来说，闭包和立即调用函数表达式（IIFE）处理问题
const addEvent = (function () {
    if (window.addEventListener) {
        return function (type, el, fn, capture) {
            el.addEventListener(type, fn, capture)
        }
    } else if (window.attachEvent) {
        return function (type, el, fn) {
            el.attachEvent('on' + type, fn)
        }
    }
}) ()

// 4.实现currying函数
function currying (fn, length) {
    var length = length || fn.length
    return function (...args) {
        return args >=length 
            ? fn.apply(this, args) 
            : currying(fn.bind(this, ...args), length - args.length)
    }
}

const curryingArrow = (fn) => {
    return judge = (...args) => 
        args.length >= fn.length
            ? fn(...args) 
            : (...arg) => judge(...args, arg)
}

// Test
const fn = currying(function(a, b, c) {
    console.log([a, b, c])
})

const fn1 = curryingArrow(function(a, b, c) {
    console.log([a, b, c])
})

fn("a", "b", "c") // ["a", "b", "c"]
fn("a", "b")("c") // ["a", "b", "c"]
fn("a")("b")("c") // ["a", "b", "c"]
fn("a")("b", "c") // ["a", "b", "c"]
fn1("a", "b", "c") // ["a", "b", "c"]
fn1("a", "b")("c") // ["a", "b", "c"]
fn1("a")("b")("c") // ["a", "b", "c"]
fn1("a")("b", "c") // ["a", "b", "c"]

