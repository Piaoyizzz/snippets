class Scheduler {
  constructor() {
    this.limit = 2;
    this.runningCount = 0;
    this.queue = [];
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      const taskWrapper = () => {
        promiseCreator()
          .then(resolve)
          .catch(reject)
          .finally(() => {
            this.runningCount = Math.max(this.runningCount - 1, 0);
            this.run();
          });
      };

      this.queue.push(taskWrapper);
      this.run();
    });
  }

  run() {
    if (this.runningCount < this.limit && this.queue.length) {
      const task = this.queue.shift();
      task();
      this.runningCount++;
    }
  }
}

const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });

const scheduler = new Scheduler();
const addTask = (time, order) => {
  scheduler
    .add(() => timeout(time))
    .then((res) => {
      console.log(order);
      // console.log(res)
    });
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4"); // output: 2 3 1 4// 一开始，1、2两个任务进入队列// 500ms时，2完成，输出2，任务3进队// 800ms时，3完成，输出3，任务4进队// 1000ms时，1完成，输出1// 1200ms时，4完成，输出4
