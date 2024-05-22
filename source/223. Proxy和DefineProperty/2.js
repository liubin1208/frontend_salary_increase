const arr = [1, 2, 3];
Object.defineProperty(arr, 'length', {
  set(value) {
    console.log('set length', value);
    this.length = value;
  },
  get() {
    console.log('get length');
    return this.length;
  },
});

arr.push(1);
