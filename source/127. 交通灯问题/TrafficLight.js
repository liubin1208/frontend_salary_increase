export class TrafficLight {
  constructor(options) {
    const {
      red = 60,
      green = 60,
      yellow = 3,
      initial = 'green',
    } = options || {};
    this._colors = {
      red: {
        seconds: red,
        next: 'yellow',
      },
      green: {
        seconds: green,
        next: 'yellow',
      },
      yellow: {
        seconds: yellow,
      },
    };
    this._switch(initial);
  }

  _switch(color) {
    this._currentColor = color;
    this._seconds = this._colors[color].seconds;
    this._time = Date.now();
  }

  _next() {
    if (this._currentColor === 'red') {
      this._colors.yellow.next = 'green';
    } else if (this._currentColor === 'green') {
      this._colors.yellow.next = 'red';
    }
    this._switch(this._colors[this._currentColor].next);
  }

  getCurrentLight() {
    const remain = Math.ceil(this._seconds - (Date.now() - this._time) / 1000);
    if (remain <= 0) {
      this._next();
      return this.getCurrentLight();
    }
    return {
      color: this._currentColor,
      remain,
    };
  }
}
