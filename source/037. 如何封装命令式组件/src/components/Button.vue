<template>
  <button class="btn" @click="emit('click')">
    <slot>确定</slot>
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);
</script>

<style scoped>
.btn {
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
</style>
