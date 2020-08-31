class Promise {
    constructor (excurtorCallBack) {
        this.status = 'pending'
        this.value = undefined
        this.fulfillArr = [] // resolve 队列
        this.rejectArr = [] // reject 队列

        // 执行Excutor 通过 resolve() 或者 reject()
        let resolveFn = result => {
            if (this.status !== 'pending') return 
            let timer = setTimeout(() => {
                this.status = 'fulfilled'
                this.value = result
                this.fulfillArr.forEach(item => item(this.value))
            })
        }

        let rejectFn = reason => {
            if (this.status !== 'pending') return 
            let timer = setTimeout(() => {
                this.status = 'rejected'
                this.value = reason
                this.rejectArr.forEach(item => item(this.value))
            })            
        }

        // 执行构造函数传入的函数
        try {
            // 执行传入函数
            excurtorCallBack(resolveFn, rejectFn)
        } catch (err) {
            // 有错误则按照 reject 处理掉
            rejectFn(err)
        }
    }

    /**
     * 需要注意的是
     * then方法会以当前Promise(旧)的value执行回调函数,然后得到新的值作为Promise(新)的value,并返回新的Promise
     * 用这种方法链式调用
     * 需要注意的是由于 setTimeout 而引起代码的执行顺序
     * @param {*} fulfilledCallBack 
     * @param {*} rejectedCallBack 
     */
    then (fulfilledCallBack, rejectedCallBack) {
        // 保证这两者是函数
        typeof fulfilledCallBack !== 'function' ? fulfilledCallBack = result => result : null
        typeof rejectedCallBack !== 'function' ? rejectedCallBack = reason => {
            throw new Error(reason instanceof Error ? reason.message : reason)
        } : null

        return new Promise((resolve, reject) => {
            this.fulfillArr.push(() => {
                try {
                    let x = fulfilledCallBack(this.value)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x)
                } catch (err) {
                    reject(err)
                }
            })

            this.rejectArr.push(() => {
                try {
                    let x = rejectedCallBack(this.value)
                    x instanceof Promise ? x.then(resolve, reject) : resolve(x)
                } catch (err) {
                    reject(err)
                }
            })
        })
    }

    catch (rejectedCallBack) {
        return this.then(null, rejectedCallBack)
    }

    // finally 总是会返回与原来Promise的value相同的新Promise
    finally (callBack) {
        return this.then(
            value => Promise.resolve(callBack()).then(() => value),
            reason => Promise.resolve(callBack()).then(() => { throw reason })
        )
    }

    static all (promiseArr) {
        let index = 0
        let result = []
        return new Promise ((resolve, reject) => {
            for (let i = 0; i < promiseArr.length; i++) {
                promiseArr[i].then(val => {
                    index ++ 
                    result[i] = val
                    if (index === promiseArr.length) {
                        resolve(result)
                    }
                }, reject)
            }
        })
    }

    static race (promiseArr) {
        return new Promise ((resolve, reject) => {
            if (!promiseArr.length) {
                return 
            } else {           
                for (let i = 0; i < promiseArr.length; i++) {
                    promiseArr[i].then(val => {
                        resolve(val)
                        return
                    }, reject)
                }
            }
        })
    }


    static resolve (value) {
        if (value instanceof Promise) return value
        return new Promise(resolve => resolve(value))
    }

    static reject (value) {
        return new Promise((resolve, reject) => reject(value))
    }
}


/**
 * 测试代码
 */

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        Math.random()<0.5?resolve(100):reject(-100);
    }, 1000)
})

let p2 = p1.then(result => {

    return result + 100;
})

let p3 = p2.then(result => {
    console.log(result);
}, reason => {
    console.log(reason)
})

// new Promise((resolve, reject) => {
//     resolve(100)
// }).then(res => {
//     console.log(res)
//     return res - 50
// }).finally(() => {
//     console.log('finally!!!')
// }).then(res => {
//     console.log(res)
// })