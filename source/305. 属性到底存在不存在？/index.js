function A() {}
A.prototype.a = 1;
const obj = new A();

console.log('------------------');
console.log('方式1:布尔判定');
if (obj.a) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式2:对比undefined');
if (obj.a !== undefined) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式3:使用Object.keys');
if (Object.keys(obj).includes('a')) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式4:使用hasOwnProperty');
if (obj.hasOwnProperty('a')) {
  console.log('存在');
} else {
  console.log('不存在');
}

console.log('------------------');
console.log('方式5:使用in');
if ('a' in obj) {
  console.log('存在');
} else {
  console.log('不存在');
}
