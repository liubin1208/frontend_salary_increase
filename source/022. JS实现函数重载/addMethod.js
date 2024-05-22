function addMethod(object, name, fn) {
  const old = object[name];
  object[name] = function (...args) {
    if (args.length === fn.length) {
      return fn.apply(this, args);
    } else if (typeof old === 'function') {
      return old.apply(this, args);
    }
  };
}

export default addMethod;
