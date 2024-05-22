<script setup>
import { watch, ref } from 'vue';
const n = ref(0);
const m = ref(0);
function getN() {
  console.log('getN');
  return n.value + m.value;
}
watch(
  () => n.value,
  (newVal, oldVal) => {
    console.log('n changed', newVal, oldVal);
  }
);
setTimeout(() => {
  n.value++;
  m.value--;
}, 1000);
</script>

<template>
  <div></div>
</template>
