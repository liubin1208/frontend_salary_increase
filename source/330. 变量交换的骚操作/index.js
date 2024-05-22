let a = 5;
let b = 6;

// 正统写法1
// const temp = b;
// b = a;
// a = temp;

// 正统写法2
// [a, b] = [b, a];

// 骚操作1
// a = a + b;
// b = a - b;
// a = a - b;
// a = b + (b = a) - b;

// 骚操作2
// a = a ^ b;
// b = a ^ b;
// a = a ^ b;

console.log(a, b);
