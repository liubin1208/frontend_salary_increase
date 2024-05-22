import { computed } from 'vue';

export function useVModel(props, propName, emit) {
  return computed({
    get() {
      return new Proxy(props[propName], {
        set(obj, name, val) {
          console.log('emit', name, val);
          emit('update:' + propName, {
            ...obj,
            [name]: val,
          });
          return true;
        },
      });
    },
    set(val) {
      emit('update:' + propName, val);
    },
  });
}
