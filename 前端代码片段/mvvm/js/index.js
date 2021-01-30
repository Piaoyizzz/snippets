class Mvvm {
    constructor (options, props) {
        this.$options = options
        this.$data = options.data
        this.$prop = props
        this.$el = document.querySelector(options.el)

        // 数据代理
        Object.keys(this.$data).forEach(key => {
            this.proxyData(key)
        })

        this.init()
    }

    // 初始化
    init () {
        observer(this.$data)
        new Compiler(this)
    }

    // 数据代理
    proxyData (key) {
        Object.defineProperty(this, key, {
            get: function () {
                return this.$data[key]
            },
            set: function (value) {
                this.$data[key] = value
            }
        })
    }
}