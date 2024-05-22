class Product {
  constructor(name, unitPrice, chooseNumber) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.chooseNumber = chooseNumber;
  }

  get totalPrice() {
    return this.chooseNumber * this.unitPrice;
  }
}

const p = new Product('iphone', 5999, 3);
console.log(p.totalPrice);
