function defineReative(data, key, value) {
  // 递归调用,对所有属性做监听处理,暂不对数组做处理
  observer(value);
  var dep = new Dep();
  Object.defineProperty(data, key, {
    get: function () {
      if (Dep.target) {
        dep.addSub(Dep.target);
      }
      return value;
    },
    set: function (newValue) {
      if (value !== newValue) {
        value = newValue;
        dep.notify(); // 通知订阅器更新
      }
    },
  });
}

function observer(data) {
  if (!data || typeof data !== "object") return;

  Object.keys(data).forEach((key) => {
    defineReative(data, key, data[key]);
  });
}

// 收集依赖的容器,用于发布-订阅模式
class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }

  static target = null;
}
