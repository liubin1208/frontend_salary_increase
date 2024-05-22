const p = new Proxy(
  {},
  {
    get(target, prop) {
      console.log('get', prop);
      return target[prop];
    },
    set(target, prop, value) {
      console.log('set', prop, value);
      target[prop] = value;
      return true;
    },
  }
);
p.a; // [[GET]]

const obj = {};
Object.defineProperty;
obj.a; // [[GET]]
obj.a = 3; // [[SET]]
delete obj.a; // [[DELETE]]
// [[OwnPropertyKeys]]
for (const key in obj) {
}
