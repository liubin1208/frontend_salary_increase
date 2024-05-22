const iphone = {
  name: 'iphone',
  unitPrice: 5999,
  chooseNumber: 3,
  get totalPrice() {
    return this.chooseNumber * this.unitPrice;
  },
};

console.log(iphone.totalPrice);
