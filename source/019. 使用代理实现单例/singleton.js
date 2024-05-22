function isSame(value1, value2) {
  if (value1.length !== value2.length) {
    return false;
  }
  for (let i = 0; i < value1.length; i++) {
    if (value1[i] !== value2[i]) {
      return false;
    }
  }
  return true;
}
export default function singleton(className) {
  let ins;
  let parameters;
  return new Proxy(className, {
    construct(target, args) {
      if (!ins) {
        ins = new className(target, ...args);
        parameters = args;
      }
      if (!isSame(parameters, args)) {
        throw new Error('Cannot create another instance');
      }
      return ins;
    },
  });
}
