const obj = {
  a: 1,
  b: 2,
  [Symbol()]: 4,
};

Object.defineProperty(obj, 'c', {
  value: 3,
  enumerable: false,
});

const keys = Reflect.ownKeys(obj);
console.log(keys);

// const proxy = new Proxy(obj, {
//   get(target, key) {
//     console.log('read', key);
//     return Reflect.get(target, key, proxy);
//   },
// });

// proxy.c;

// console.log(obj.c); // [[GET]]

// console.log(Reflect.get(obj, 'c', { a: 3, b: 4 })); // [[GET]]

// obj.a = 1; // [[SET]]
// Reflect.set(obj, 'a', 2); // [[SET]]
// // obj.a; // [[GET]]
