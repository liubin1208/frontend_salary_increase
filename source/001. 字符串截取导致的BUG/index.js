const str = '👅🐶a👋🉐🏠';

String.prototype.pointLength = function () {
  let len = 0;
  for (let i = 0; i < this.length; ) {
    const codePoint = this.codePointAt(i);
    i += codePoint > 0xffff ? 2 : 1;
    len++;
  }
  return len;
};

String.prototype.pointAt = function (index) {
  let curIndex = 0; // 码点的下标
  for (let i = 0; i < this.length; ) {
    const codePoint = this.codePointAt(i);
    if (curIndex === index) {
      return String.fromCodePoint(codePoint);
    }
    i += codePoint > 0xffff ? 2 : 1;
    curIndex++;
  }
};

String.prototype.sliceByPoint = function (start = 0, end = this.pointLength()) {
  let result = '';
  for (let i = start; i < end; i++) {
    result += this.pointAt(i);
  }
  return result;
};

console.log(str.pointLength());
console.log(str.pointAt(2));
console.log(str.sliceByPoint(0, 3));
