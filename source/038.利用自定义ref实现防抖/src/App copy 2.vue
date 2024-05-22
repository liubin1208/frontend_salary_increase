<template>
  <div class="container">
    <input @input="debounceHandler" />
    <p class="result">{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { debounce } from './debounce';
const text = ref('');
const inputHandler = (e) => {
  text.value = e.target.value;
};
const debounceHandler = debounce(inputHandler, 1000);
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
