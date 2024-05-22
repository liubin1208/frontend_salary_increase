const cat = {
  name: 'Kitty',
  age: 3,
  love: 'flower',
};

const user = {
  loginId: 'abc',
  loginPwd: '123456',
};

// 对某个对象的某个属性做一些处理
function handler<T extends object, K extends keyof T>(obj: T, prop: K) {}

handler(user, 'loginId');
