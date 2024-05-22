const obj = {
  name: 'lison',
  age: 18,
};

function method(key: string) {
  // @ts-ignore
  const v = obj[key];
}
