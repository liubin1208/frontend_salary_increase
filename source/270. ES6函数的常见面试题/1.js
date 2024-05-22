const obj = {
  name: 'Shae',
  sayHi1: () => {
    console.log(this.name);
  },
  sayHi2() {
    (() => {
      console.log(this.name);
    })();
  },
};

obj.sayHi1(); // ''
obj.sayHi2(); // Shae
