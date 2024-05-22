const KEY = 'VUEX:STATE';

export default function (store) {
  // 存
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY, JSON.stringify(store.state));
  });
  // 取
  try {
    const state = JSON.parse(localStorage.getItem(KEY));
    if (state) {
      store.replaceState(state);
      console.log(123);
    }
  } catch {
    console.log('存储的数据有误');
  }
}
