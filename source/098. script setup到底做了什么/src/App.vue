<template>
  <FooSetup ref="refSetup" />
  <FooScriptSetup ref="refScriptSetup" />
</template>

<script setup>
import FooSetup from './components/FooSetup.vue';
import FooScriptSetup from './components/FooScriptSetup.vue';
import { onMounted, ref } from 'vue';
const refSetup = ref(null);
const refScriptSetup = ref(null);

onMounted(() => {
  console.log(refSetup.value);
  console.log(refScriptSetup.value);
});
</script>

<style scoped></style>
