// 可移动的类
class Moveable {
  static max = 500; // 最大可移动的距离
  static speed = 100; // 每秒移动的像素值
  /**
   * 可移动类的构造器
   * @param {HtmlElement} dom 可移动的dom元素
   * @param {Function} onStop 当移动到最大位置后触发的事件
   */
  constructor(dom, onStop) {
    this.x = 0;
    this.dom = dom;
    this.onStop = onStop;
    // 上次移动的时间点
    this.lastMoveTime = null;
  }

  // 移动一段距离
  step() {
    if (!this.lastMoveTime) {
      // 没有记录时间，则记录时间
      this.lastMoveTime = Date.now();
      return; // 此次仅记录时间，不移动
    }
    // 计算时间间隔
    const now = Date.now();
    const duration = now - this.lastMoveTime;
    this.lastMoveTime = now;
    // 计算移动距离
    const dis = (duration * Moveable.speed) / 1000;
    // 计算新的坐标
    this.x += dis;
    if (this.x > Moveable.max) {
      this.x = Moveable.max;
      this.onStop && this.onStop(); // 触发回调
    }
    // 更新位置
    this.dom.style.transform = `translateX(${this.x}px)`;
  }
}

// 分别记录计时器的id和rAF的id
let timerId, rAFId;

// 使用计时器
const block1 = new Moveable(document.querySelector('.block1'), () => {
  clearInterval(timerId);
});
timerId = setInterval(function () {
  console.log(1);
  block1.step();
}, 16);

// 使用raf
const block2 = new Moveable(document.querySelector('.block2'), () => {
  cancelAnimationFrame(rAFId);
});
function raf() {
  rAFId = requestAnimationFrame(function () {
    block2.step();
    raf();
  });
}
raf();
