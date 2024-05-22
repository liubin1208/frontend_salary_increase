const KEY = 'VUEX_STORE';

export default function (store) {
  // 保存仓库数据到本地
  window.addEventListener('beforeunload', () => {
    localStorage.setItem(KEY, JSON.stringify(store.state));
  });
  // 恢复仓库数据
  try {
    const localState = localStorage.getItem(KEY);
    if (localState) {
      store.replaceState(JSON.parse(localState));
    }
  } catch {
    console.log('本地存储数据异常');
  }
}
