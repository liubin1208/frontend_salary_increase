const arr = [1, 2, 3];

Array.prototype.forEach = function (callback) {
  const len = this.length;
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  let k = 0;
  while (k < len) {
    if (k in this) {
      callback(this[k], k, this);
    }
    k++;
  }
};
arr.forEach((item, i) => {
  // arr.splice(i, 1);
  arr.push(2);
  console.log('arr', item);
});
console.log(arr);
