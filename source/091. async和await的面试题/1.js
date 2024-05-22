async function asy1() {
  console.log(1);
  await asy2();
  console.log(2);
}
asy2 = async () => {
  await (async () => {
    await (() => {
      console.log(3);
    })();
    console.log(4);
  })();
};
asy3 = async () => {
  Promise.resolve().then(() => {
    console.log(6);
  });
};
asy1();
console.log(7);
asy3();
