class Compiler {
  constructor(vm) {
    this.vm = vm;
    this.el = vm.$el;
    this.fragment = null;
    this.init();
  }

  init() {
    this.fragment = this.nodeFragment(this.el);
    this.compileNode(this.fragment); // 编译文档片段
    this.el.appendChild(this.fragment); //解析完成添加到元素中
  }

  nodeFragment(el) {
    const fragment = document.createDocumentFragment();
    // 将模板或者已有dom移动到文档片段里面
    let child = el.firstChild;
    while (child) {
      fragment.appendChild(child);
      child = el.firstChild;
    }
    return fragment;
  }

  compileNode(fragment) {
    let childNodes = [...fragment.childNodes];
    childNodes.forEach((node) => {
      if (this.isElementNode(node)) {
        // 元素节点
        this.compile(node);
      }

      if (this.isTextNode(node)) {
        // 替换模板
        let reg = /\{\{(.*)\}\}/;
        let text = node.textContent;

        if (reg.test(text)) {
          let prop = reg.exec(text)[1];
          this.compileText(node, prop); //替换模板
        }
      }

      // 递归这个过程
      if (node.childNodes && node.childNodes.length) {
        this.compileNode(node);
      }
    });
  }

  compile(node) {
    let nodeAttr = [...node.attributes];
    nodeAttr.forEach((attr) => {
      let name = attr.name;
      // 初始化指令
      if (this.isDirective(name)) {
        if (name === "v-model") {
          this.compileModel(node, attr.value);
        }
      }
    });
  }

  compileModel(node, prop) {
    // 初始化model绑定
    let val = this.vm.$data[prop];
    this.updateModel(node, val);

    // 增加Watcher
    new Watcher(this.vm, prop, (value) => {
      this.updateModel(node, value);
    });

    // 增加双向绑定的事件
    node.addEventListener("input", (e) => {
      let newValue = e.target.value;
      if (this.vm.$data[prop] === newValue) {
        return;
      }
      this.vm.$data[prop] = newValue;
    });
  }

  // 编译替换字符模板
  compileText(node, prop) {
    let text = this.vm.$data[prop];
    this.updateView(node, text);

    new Watcher(this.vm, prop, (value) => {
      this.updateView(node, value);
    });
  }

  updateView(node, value) {
    node.textContent = typeof value === "undefined" ? "" : value;
  }

  updateModel(node, value) {
    node.value = typeof value === "undefined" ? "" : value;
  }

  isDirective(attr) {
    return attr.indexOf("v-") !== -1;
  }

  isElementNode(node) {
    return node.nodeType === 1;
  }

  isTextNode(node) {
    return node.nodeType === 3;
  }
}
