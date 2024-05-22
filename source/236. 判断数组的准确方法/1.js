// function isArray(obj) {
//   return obj instanceof Array;
// }

// const obj = {};
// Object.setPrototypeOf(obj, Array.prototype);

const Array1 = window.Array;
const frame = document.querySelector('iframe');
const Array2 = frame.contentWindow.Array;

const arr = new Array2();
const obj = {};
Object.setPrototypeOf(obj, Array1.prototype);
console.log(Array.isArray(obj));
