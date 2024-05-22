<template>
  <div
    class="container"
    :style="{
      backgroundImage: `url(${path})`,
    }"
  >
    <TypeSelector @change="handleChange"></TypeSelector>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TypeSelector from './components/TypeSelector.vue';

const path = ref('');
function handleChange(val) {
  const url = new URL(`./assets/${val}.jpg`, import.meta.url);
  path.value = url;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 30px;
  padding-top: 30px;
  height: 100vh;
  /* background-image: url(./assets/3.jpg); */
  background-size: cover;
  background-position: center;
  transition: background-image 0.3s;
}
</style>
