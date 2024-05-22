<template>
  <div>得到传入的属性：{{ count }}</div>
  <div>doubled: {{ doubleCount }}</div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from 'vue';

const props = defineProps({
  count: Number,
});

// 1
// const doubleCount = ref(props.count * 2);

// 2
// const doubleCount = ref(0);
// watchEffect(() => {
//   console.log('watchEffect');
//   doubleCount.value = props.count * 2;
// });

// 3
// function useDouble(count) {
//   const doubleCount = ref(count * 2);
//   watchEffect(() => {
//     console.log('WatchEffect');
//     doubleCount.value = count * 2;
//   });
//   return doubleCount;
// }
// const doubleCount = useDouble(props.count);

// 4
// const doubleCount = computed(() => props.count * 2);

// 5
function useDouble(props, propName) {
  const doubleCount = computed(() => props[propName] * 2);
  return doubleCount;
}
// VueUse
const doubleCount = useDouble(props, 'count');
</script>
