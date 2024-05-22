class Curve {
  /**
   *
   * @param {(x:number)=>number} curveFunc
   * @param {number[]} xRange
   * @param {number[]} yRange
   */
  constructor(curveFunc, xRange, yRange) {
    this.curveFunc = curveFunc;
    this.xRange = xRange;
    this.yRange = yRange;
  }

  /**
   * @param {number} x
   * @return {number}
   */
  getY(x) {
    let y = this.curveFunc(x);
    if (x < this.xRange[0]) {
      y = this.curveFunc(this.xRange[0]);
    } else if (x > this.xRange[1]) {
      y = this.curveFunc(this.xRange[1]);
    }
    if (y < this.yRange[0]) {
      y = this.yRange[0];
    }
    if (y > this.yRange[1]) {
      y = this.yRange[1];
    }
    return y;
  }
}

function layout(curve, doms, width, height) {
  const [xmin, xmax] = curve.xRange;
  const [ymin, ymax] = curve.yRange;
  const cx = (xmin + xmax) / 2;
  const cy = (ymin + ymax) / 2;
  const scaleX = width / (xmax - xmin);
  const scaleY = height / (ymax - ymin);
  const step = (xmax - xmin) / (doms.length - 1);
  for (let i = 0; i < doms.length; i++) {
    const dom = doms[i];
    const x = xmin + i * step;
    const y = curve.getY(x);
    const dx = (x - cx) * scaleX;
    const dy = (y - cy) * scaleY;
    dom.style.setProperty('--dx', dx);
    dom.style.setProperty('--dy', dy);
  }
}

const container = document.querySelector('.container');
const doms = document.querySelectorAll('.container img');
const btnContainer = document.querySelector('.btns');

const width = container.clientWidth;
const height = container.clientHeight;
const layouts = {
  wave() {
    const curve = new Curve((x) => Math.sin(x), [0, 3 * Math.PI], [-1, 1]);
    layout(curve, doms, width - 100, height / 3);
  },
  line() {
    const curve = new Curve((x) => 0, [0, 1], [-1, 1]);
    layout(curve, doms, width - 100, height);
  },
  crossLine() {
    const curve1 = new Curve((x) => x, [-1, 1], [-1, 1]);
    const curve2 = new Curve((x) => -x, [-1, 1], [-1, 1]);
    const midIndex = Math.floor(doms.length / 2);
    const imgs1 = Array.from(doms).slice(0, midIndex);
    const imgs2 = Array.from(doms).slice(midIndex);
    layout(curve1, imgs1, width - 100, height - 100);
    layout(curve2, imgs2, width - 100, height - 100);
  },
  crossWave() {
    const curve1 = new Curve((x) => Math.sin(x), [-Math.PI, Math.PI], [-1, 1]);
    const curve2 = new Curve((x) => Math.sin(x), [0, 2 * Math.PI], [-1, 1]);
    const midIndex = Math.floor(doms.length / 2);
    const doms1 = Array.from(doms).slice(0, midIndex);
    const doms2 = Array.from(doms).slice(midIndex);
    layout(curve1, doms1, width - 100, height / 2);
    layout(curve2, doms2, width - 100, height / 2);
  },
};

layouts.line();

btnContainer.onclick = (e) => {
  const target = e.target;
  if (target.tagName === 'BUTTON') {
    const layoutName = target.dataset.layout;
    layouts[layoutName]();
  }
};
