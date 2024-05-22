class TaskPro {
  constructor() {
    this._taskList = [];
    this._isRunning = false;
    this._currentIndex = 0;
    this._next = async () => {
      this._currentIndex++;
      await this._runTask();
    };
  }

  addTask(task) {
    this._taskList.push(task);
  }

  run() {
    if (this._isRunning || !this._taskList.length) {
      return;
    }
    this._isRunning = true;
    this._runTask();
  }

  /**
   * 取出一个任务执行
   */
  async _runTask() {
    if (this._currentIndex >= this._taskList.length) {
      this._reset();
      return;
    }
    const i = this._currentIndex;
    const task = this._taskList[this._currentIndex];
    await task(this._next);
    const j = this._currentIndex;
    if (i === j) {
      await this._next();
    }
  }

  _reset() {
    this._currentIndex = 0;
    this._isRunning = false;
    this._taskList = [];
  }
}

const t = new TaskPro();
t.addTask(async (next) => {
  console.log(1, 'start');
  await next();
  console.log(1, 'end');
});
t.addTask(() => {
  console.log(2);
});
t.addTask(() => {
  console.log(3);
});
t.run(); // 1 start, 2, 3, 1 end
