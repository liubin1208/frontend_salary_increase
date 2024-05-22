<template>
  <div class="modal">
    <div class="box">
      <div class="text">{{ msg }}</div>
      <Button @click="emit('click')"></Button>
    </div>
  </div>
</template>

<script setup>
import Button from './Button.vue';
const emit = defineEmits(['click']);

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 99;
  background: #00000050;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  background: #fff;
  color: #333;
  padding: 1em 2em;
  border-radius: 10px;
  box-shadow: 0 0 3px #00000080;
  display: flex;
  min-width: 30%;
  flex-direction: column;
  align-items: center;
}
.text {
  margin-bottom: 1em;
}
</style>
