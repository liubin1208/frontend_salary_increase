const products = [
  { name: 'XiaoMi', stock: 2000 },
  { name: 'iphone14', stock: 1500 },
  { name: 'Huawei', stock: 1300 },
];

// 上面的所有对象不可更改
// 得到一个新数组，iphone14的库存减一
// 尽量用一行代码解决

const newProducts = products.map((p) =>
  p.name === 'iphone14' ? { ...p, stock: p.stock - 1 } : p
);

console.log(newProducts);
