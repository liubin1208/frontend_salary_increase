const KEY_PREFIX = 'PINIA_STORE_';

export default function (context) {
  const { store } = context;
  const KEY = KEY_PREFIX + store.$id;
  console.log(KEY, context);
  // 存
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY, JSON.stringify(store.$state));
  });
  // 读
  try {
    const localData = localStorage.getItem(KEY);
    if (localData) {
      store.$patch(JSON.parse(localData));
    }
  } catch {
    console.log('本地存储数据异常');
  }
}
