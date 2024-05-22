const arr = [1, 2, 3];

const p = new Proxy(arr, {
  get(target, prop) {
    console.log('get', prop);
    return target[prop];
  },
  set(target, prop, value) {
    console.log('set', prop, value);
    target[prop] = value;
    return true;
  },
});
p.push(1);
