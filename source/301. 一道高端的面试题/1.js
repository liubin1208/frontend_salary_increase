const obj = {};
obj.a = 1;
obj[3] = 0;
obj.b = 2;
obj[1] = 1;
obj['0'] = 1;
console.log(Object.keys(obj));
console.log(obj);
