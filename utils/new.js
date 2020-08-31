
// new 关键字
function _new1 (fn, ...arg) {
    const obj = Object.create(fn.prototype)
    const ref = fn.call(obj, ...arg)
    return ref instanceof Object ? ref : obj
}
