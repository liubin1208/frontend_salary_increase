for (let i = 0; i < 10; i++) {
  console.log('顶层循环');
  for (let j = 0; j < 10; j++) {
    console.log('内层循环', i, j);
    if (i * j > 30) {
      console.log('退出顶层循环');
      break;
    }
  }
}
