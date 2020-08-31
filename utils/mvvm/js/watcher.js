class Watcher {
    constructor (vm, prop, callback) {
        this.vm = vm
        this.prop = prop
        this.callback = callback
        this.value = this.get()
    }

    // 由Dep触发
    update () {
        const value = this.vm.$data[this.prop]
        const oldVal = this.value
        if (value !== oldVal) {
            this.value = value
            this.callback(value)
        }
    }

    // 初始化Watcher的时候，使得该Watcher被收集
    get () {
        Dep.target = this
        const value = this.vm.$data[this.prop]
        Dep.target = null
        return value
    }
}