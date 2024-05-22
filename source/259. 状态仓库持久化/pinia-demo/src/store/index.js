import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  return { count };
});

export const useTextStore = defineStore('text', () => {
  const text = ref('Hello Pinia!');
  return { text };
});
