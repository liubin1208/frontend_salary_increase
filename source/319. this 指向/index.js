function fn() {
  console.log(this);
  let n = 1;
  const a = () => {
    console.log(n);
    console.log(this);
  };
}
