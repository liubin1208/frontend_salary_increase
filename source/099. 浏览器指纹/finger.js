function getCanvasFingerprint() {
  // 创建一个canvas元素
  const canvas = document.createElement('canvas');
  canvas.width = 200;
  canvas.height = 200;

  // 获取2D上下文
  const ctx = canvas.getContext('2d');

  // 设置绘图样式
  ctx.fillStyle = 'rgb(128, 0, 0)';
  ctx.fillRect(10, 10, 100, 100); // 绘制一个红色矩形

  ctx.fillStyle = 'rgb(0, 128, 0)';
  ctx.fillRect(50, 50, 100, 100); // 绘制一个绿色矩形

  ctx.strokeStyle = 'rgb(0, 0, 128)';
  ctx.lineWidth = 5;
  ctx.strokeRect(30, 30, 80, 80); // 绘制一个蓝色边框的矩形

  ctx.font = '20px Arial';
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillText('Hello!', 60, 110); // 在图形上绘制文本

  // 转换为DataURL，这将是一个包含图像数据的Base64字符串
  const dataURL = canvas.toDataURL();

  // 对数据URL进行哈希处理，以生成更短且一致的浏览器指纹
  const hash = hashCode(dataURL);
  return hash;
}

// 一个简单的字符串哈希函数
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // 将hash值转换为32位整数
  }
  return hash;
}

// 调用上述函数以获取Canvas指纹
const canvasFingerprint = getCanvasFingerprint();
console.log(canvasFingerprint);
