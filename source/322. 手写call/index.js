Function.prototype.myCall = function (ctx, ...args) {
  ctx = ctx === null || ctx === undefined ? globalThis : Object(ctx);
  const fn = this;
  const key = Symbol();
  Object.defineProperty(ctx, key, {
    value: fn,
    enumerable: false,
  });
  const r = ctx[key](...args);
  delete ctx[key];
  return r;
};

function method(a, b) {
  console.log('args:', a, b);
  console.log('this:', this);
}

method.myCall({
  fn() {},
});
