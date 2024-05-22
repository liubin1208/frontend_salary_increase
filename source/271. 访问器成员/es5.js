function Product(name, unitPrice, chooseNumber) {
  this.name = name;
  this.unitPrice = unitPrice;
  this.chooseNumber = chooseNumber;
}
Object.defineProperty(Product.prototype, 'totalPrice', {
  get: function () {
    return this.chooseNumber * this.unitPrice;
  },
});
// Product.prototype.getTotalPrice = function () {
//   return this.chooseNumber * this.unitPrice;
// };
const p = new Product('iphone', 5999, 3);
console.log(p.totalPrice);
p.chooseNumber++;
console.log(p.totalPrice);
