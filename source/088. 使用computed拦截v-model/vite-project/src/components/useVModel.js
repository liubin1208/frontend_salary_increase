import { computed } from 'vue';

const cacheMap = new WeakMap();

export function useVModel(props, propName, emit) {
  return computed({
    get() {
      if (cacheMap.has(props[propName])) {
        return cacheMap.get(props[propName]);
      }
      const proxy = new Proxy(props[propName], {
        get(target, key) {
          return Reflect.get(target, key);
        },
        set(target, key, value) {
          emit('update:' + propName, {
            ...target,
            [key]: value,
          });
          return true;
        },
      });
      cacheMap.set(props[propName], proxy);
      return proxy;
    },
    set(val) {
      emit('update:' + propName, val);
    },
  });
}
