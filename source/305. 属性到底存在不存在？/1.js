const obj = {
  a: 1,
};
Object.defineProperty(obj, 'a', {
  enumerable: false,
  value: 1,
});
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

console.log(Object.keys(obj));
