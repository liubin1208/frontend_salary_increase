<template>
  <div class="container">
    <input v-model="text" />
    <p class="result">{{ text }}</p>
  </div>
</template>

<script setup>
import { debounceRef } from './debounceRef';
const text = debounceRef('', 500);
</script>

<style scoped>
.container {
  width: 80%;
  margin: 1em auto;
}
.result {
  color: #333;
}
.container input {
  width: 100%;
  height: 30px;
  font-size: 1.1em;
}
</style>
