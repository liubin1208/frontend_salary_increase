<template>
  <Demo :count="count"></Demo>
  <button class="btn" @click="count++">increase</button>
</template>

<script setup>
import { ref } from 'vue';
import Demo from './components/Demo.vue';

const count = ref(0);
</script>

<style scoped>
.btn {
  margin-top: 2em;
  border: none;
  outline: none;
  background: #409eff;
  color: #fff;
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  text-align: center;
  transition: 0.1s;
  font-weight: 500;
  user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.btn:hover {
  background: #66b1ff;
}
.btn:active {
  background: #3a8ee6;
}
.btn:disabled {
  background: #66b1ff80;
  cursor: not-allowed;
}
</style>
