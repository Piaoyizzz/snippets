if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== 'function') {
            throw new TypeError('Not function')
        }

        var aArgs = Array.prototype.slice.call(arguments,1)
        var fToBind = this
        var fNOP = function () {}
        var fBound = function () {
            return fToBind.apply(
                this instanceof fNOP
                ? this
                : oThis,
                aArgs.concat(Array.prototype.slice.call(arguments))
            )
        }

        // 修正原型关系
        if (this.prototype) {
            fNOP.prototype = this.prototype
        }

        fBound.prototype = new fNOP()

        return fBound
    }
}
