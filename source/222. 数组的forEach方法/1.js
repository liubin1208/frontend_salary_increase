const arr = [1, 2, 3];

Array.prototype.myForEach = function (callback) {
  const len = this.length;
  if (typeof callback !== 'function') {
    throw new TypeError(callback + 'is not a function');
  }
  let k = 0;
  while (k < len) {
    const pk = String(k);
    if (pk in this) {
      const kValue = this[pk];
      callback.call(this, kValue, k, this);
    }
    k++;
  }
};

arr.myForEach((item, i) => {
  // arr.splice(i, 1);
  arr.push(2);
  console.log('arr', item);
});
console.log(arr);
