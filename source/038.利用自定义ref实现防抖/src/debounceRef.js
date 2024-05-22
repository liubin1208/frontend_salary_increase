import { customRef } from 'vue';

export function debounceRef(value, duration = 1000) {
  let timer;
  return customRef((track, trigger) => {
    return {
      get() {
        // 收集依赖
        track();
        return value;
      },
      set(val) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          // 派发更新
          trigger();
          value = val;
        }, duration);
      },
    };
  });
}
