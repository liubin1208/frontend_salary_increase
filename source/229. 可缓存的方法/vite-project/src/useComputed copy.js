import { computed } from 'vue';

export function useComputed(fn) {
  const cache = new Map();
  function compareKeys(keys1, keys2) {
    return (
      keys1.length === keys2.length &&
      keys1.every((key, index) => Object.is(key, keys2[index]))
    );
  }
  function getCache(args) {
    const keys = [...cache.keys()];
    return cache.get(keys.find((key) => compareKeys(key, args)));
  }
  return function (...args) {
    const cached = getCache(args);
    if (cached) {
      return cached.value;
    }
    const result = computed(() => fn(...args));
    cache.set(args, result);
    return result.value;
  };
}
