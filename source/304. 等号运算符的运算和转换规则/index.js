// 如何让下面的判断成立
const a = {
  count: 1,
  valueOf() {
    console.log('value of');
    return this.count++;
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log('不可能的等式成立了');
}
