const colorPicker = document.querySelector('input');
const cvs = document.querySelector('canvas');
const ctx = cvs.getContext('2d');

function init() {
  const w = 500,
    h = 300;
  cvs.width = w * devicePixelRatio;
  cvs.height = h * devicePixelRatio;
  cvs.style.width = w + 'px';
  cvs.style.height = h + 'px';
}

init();

const shapes = [];

class Rectangle {
  constructor(color, startX, startY) {
    this.color = color;
    this.startX = startX;
    this.startY = startY;
    this.endX = startX;
    this.endY = startY;
  }

  get minX() {
    return Math.min(this.startX, this.endX);
  }

  get minY() {
    return Math.min(this.startY, this.endY);
  }

  get maxX() {
    return Math.max(this.startX, this.endX);
  }

  get maxY() {
    return Math.max(this.startY, this.endY);
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.minX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.lineTo(this.maxX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.lineTo(this.maxX * devicePixelRatio, this.maxY * devicePixelRatio);
    ctx.lineTo(this.minX * devicePixelRatio, this.maxY * devicePixelRatio);
    ctx.lineTo(this.minX * devicePixelRatio, this.minY * devicePixelRatio);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.strokeStyle = '#fff';
    ctx.lineCap = 'square';
    ctx.lineWidth = 3 * devicePixelRatio;
    ctx.stroke();
  }
}

cvs.onmousedown = (e) => {
  const bouding = cvs.getBoundingClientRect();
  const rect = new Rectangle(colorPicker.value, e.offsetX, e.offsetY);
  const shape = getShape(e.offsetX, e.offsetY);
  if (shape) {
    const { startX, startY, endX, endY } = shape;
    const mouseX = e.offsetX;
    const mouseY = e.offsetY;
    window.onmousemove = (e) => {
      const disX = e.clientX - bouding.left - mouseX;
      const disY = e.clientY - bouding.top - mouseY;
      shape.startX = startX + disX;
      shape.startY = startY + disY;
      shape.endX = endX + disX;
      shape.endY = endY + disY;
    };
  } else {
    shapes.push(rect);
    window.onmousemove = (e) => {
      rect.endX = e.clientX - bouding.left;
      rect.endY = e.clientY - bouding.top;
    };
  }

  window.onmouseup = () => {
    window.onmousemove = null;
    window.onmouseup = null;
  };
};

function getShape(x, y) {
  for (let i = shapes.length - 1; i >= 0; i--) {
    if (
      x >= shapes[i].minX &&
      x <= shapes[i].maxX &&
      y >= shapes[i].minY &&
      y <= shapes[i].maxY
    ) {
      return shapes[i];
    }
  }
}

function draw() {
  requestAnimationFrame(draw);
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  for (const shape of shapes) {
    shape.draw();
  }
}
draw();
