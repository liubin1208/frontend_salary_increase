import singleton from './singleton.js';

class MyVideo {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  sayHi() {
    console.log('asdfasdfas');
  }
}

export default singleton(MyVideo);
