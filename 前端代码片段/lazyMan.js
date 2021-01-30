class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;

    console.log(`Hi I m ${this.name}`);

    setTimeout(() => {
      this.next();
    }, 0);
  }

  next() {
    let fn = this.taskList.shift();
    fn && fn();
  }

  eat(name) {
    let that = this;
    let fn = (function (n) {
      return function () {
        console.log(`I m eating ${n}`);
        that.next();
      };
    })(name);
    this.taskList.push(fn);
    return this;
  }

  sleepFirst(time) {
    let that = this;
    let fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log(`wait for ${time}s`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.unshift(fn);
    return this;
  }

  sleep(time) {
    let that = this;
    let fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log(`wait for ${time}s`);
          that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.push(fn);
    return this;
  }
}

function LazyMan(name) {
  return new LazyManClass(name);
}

LazyMan("Tony")
  .eat("lunch")
  .eat("dinner")
  .sleepFirst(5)
  .sleep(4)
  .eat("junk food");
