const Flip = (function () {
  class FlipDom {
    constructor(dom, duration = 0.5) {
      this.dom = dom;
      this.duration = duration;
    }

    ready() {
      this.initRect = this.dom.getBoundingClientRect();
    }

    play() {
      this.lastRect = this.dom.getBoundingClientRect();
      // 取消之前的动画
      this.dom.getAnimations().forEach((it) => it.cancel());
      this.dom.animate(
        [
          {
            transform: `translate(${this.initRect.x - this.lastRect.x}px, ${
              this.initRect.y - this.lastRect.y
            }px)`,
          },
          {
            transform: 'none',
          },
        ],
        {
          duration: this.duration * 1000,
          easing: 'ease-in-out',
        }
      );
    }
  }

  class Flip {
    constructor(doms, duration = 0.5) {
      this.flipDoms = [...doms].map((it) => new FlipDom(it, duration));
      this.flipDoms = new Set(this.flipDoms);
    }

    ready() {
      this.flipDoms.forEach((it) => it.ready());
    }

    play() {
      this.flipDoms.forEach((it) => it.play());
    }
  }

  return Flip;
})();
