function fn(a, b, c, d) {
  console.log('fn called');
  console.log('args', a, b, c, d);
  console.log('this', this);
  return 123;
}

Function.prototype.myBind = function (ctx, ...args) {
  const fn = this;
  return function (...restArgs) {
    if (new.target) {
      return new fn(...args, ...restArgs);
    }
    return fn.apply(ctx, [...args, ...restArgs]);
  };
};

const newFn = fn.myBind('ctx', 1, 2);
console.log(new newFn(3, 4));
