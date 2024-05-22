const KEY_PREFIX = 'PINIA:STATE:';

export default function (context) {
  const { store } = context;
  // 存
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY_PREFIX + store.$id, JSON.stringify(store.$state));
  });
  // 取
  try {
    const state = JSON.parse(localStorage.getItem(KEY_PREFIX + store.$id));
    if (state) {
      store.$patch(state);
    }
  } catch {
    console.log('存储的数据有问题');
  }
}
