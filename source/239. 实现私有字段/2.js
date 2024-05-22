const privateFields = new WeakMap();

export class A {
  constructor() {
    privateFields.set(this, { key: 'value' });
  }
  m() {
    console.log(privateFields.get(this).key);
  }
}
