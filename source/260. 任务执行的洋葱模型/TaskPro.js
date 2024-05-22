class TaskPro {
  _taskList = [];
  _isRunning = false;
  _currentIndex = 0;
  addTask(task) {
    this._taskList.push(task);
  }

  async run() {
    if (this._isRunning) {
      return;
    }
    this._isRunning = true;
    await this._runTask();
  }

  // 取出一个任务执行
  async _runTask() {
    if (this._currentIndex >= this._taskList.length) {
      this._isRunning = false;
      this._currentIndex = 0;
      this._taskList = [];
      return;
    }
    const task = this._taskList[this._currentIndex];
    const i = this._currentIndex;
    await task(this._next.bind(this));
    const j = this._currentIndex;
    if (i === j) {
      await this._next();
    }
  }

  async _next() {
    this._currentIndex++;
    await this._runTask();
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
