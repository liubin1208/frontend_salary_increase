Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

Promise.prototype.finally = function (onFinally) {
  return this.then(
    (value) => Promise.resolve(onFinally()).then(() => value),
    (err) =>
      Promise.resolve(onFinally()).then(() => {
        throw err;
      })
  );
};

Promise.resolve = function (value) {
  if (value instanceof Promise) return value;
  if (isPromiseLike(value)) {
    return new Promise((resolve, reject) => {
      value.then(resolve, reject);
    });
  }
  return new Promise((resolve) => resolve(value));
};

function isPromiseLike(obj) {
  return obj && typeof obj.then === 'function';
}

Promise.reject = function (reason) {
  return new Promise((resolve, reject) => reject(reason));
};
