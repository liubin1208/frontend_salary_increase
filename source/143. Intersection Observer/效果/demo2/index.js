/**
 * 实现 Masonry 布局
 */
class Masonry {
  constructor(options) {
    // 获取布局容器，假定该容器内部的所有元素都是图片元素
    this.container = options.container;
    // 获取列数
    this.columnNumber = options.columnNumber || 4;
    // 获取行列间隙
    this.gap = options.gap || 10;
    // 设置布局容器为相对定位，因为内部的所有元素将使用绝对定位
    this.container.style.position = 'relative';
    // 初始化列高
    this.columnHeights = new Array(this.columnNumber).fill(0);
    // 获取列宽
    this.columnWidth = this._getColumnWidth();
    this.defaultImagePath = './default.png';
  }
  /**
   * 计算列宽
   */
  _getColumnWidth() {
    const containerWidth = this.container.clientWidth;
    const totalGapWidth = (this.columnNumber - 1) * this.gap;
    return (containerWidth - totalGapWidth) / this.columnNumber;
  }

  _onAllImageLoaded(imgElements) {
    return new Promise((resolve) => {
      let imgLoadCounter = 0;
      if (imgLoadCounter === imgElements.length) {
        resolve();
        return;
      }
      const checkAndResolve = () => {
        imgLoadCounter++;
        if (imgLoadCounter === imgElements.length) {
          resolve();
        }
      };

      imgElements.forEach((img) => {
        // 如果图片已经加载，直接增加计数器
        if (img.complete) {
          checkAndResolve();
        } else {
          img.onload = checkAndResolve;

          img.onerror = () => {
            img.onerror = null; // 避免在加载默认图片时触发错误循环
            img.src = this.defaultImagePath;
          };
        }
      });
    });
  }

  /**
   * 对图片元素进行布局
   * @param {Array<HTMLImageElement>} imgElements
   */
  _layout(imgElements) {
    imgElements.forEach((img) => {
      img.style.width = `${this.columnWidth}px`;
      const columnIndex = this.columnHeights.indexOf(
        Math.min(...this.columnHeights)
      );
      img.style.position = 'absolute';
      img.style.left = `${columnIndex * (this.columnWidth + this.gap)}px`;
      img.style.top = `${this.columnHeights[columnIndex]}px`;

      this.columnHeights[columnIndex] += img.clientHeight + this.gap;
      this.container.style.height = `${Math.max(...this.columnHeights)}px`;
    });
  }

  /**
   * 追加图片元素到容器中，并对新加入的图片完成布局
   * @param {Array<HTMLImageElement>} imgElements
   */
  async append(imgElements) {
    await this._onAllImageLoaded(imgElements);
    imgElements.forEach((img) => {
      this.container.appendChild(img);
    });
    this._layout(imgElements);
  }
}

function loadImages(number = 10) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const imgElements = [];

      for (let i = 0; i < number; i++) {
        const img = new Image();
        const randomX = Math.floor(Math.random() * (800 - 200 + 1)) + 200;
        const randomY = Math.random();
        img.src = `https://picsum.photos/400/${randomX}?r=${randomY}`;
        imgElements.push(img);
      }

      resolve(imgElements);
    }, 1000);
  });
}

const masonry = new Masonry({
  container: document.querySelector('.grid'),
  columnNumber: 4,
  gap: 10,
});
let isLoading = false;
async function loadMoreImages(number = 10) {
  if (isLoading) {
    return;
  }
  isLoading = true;
  const imgs = await loadImages(number);
  masonry.append(imgs);
  isLoading = false;
}
loadMoreImages(30);

const ob = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      loadMoreImages(10);
    }
  },
  {
    threshold: 0,
  }
);

const spin = document.querySelector('.spin');
ob.observe(spin);
