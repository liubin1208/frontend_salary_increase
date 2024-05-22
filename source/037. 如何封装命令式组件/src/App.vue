<template>
  <div class="controller">
    <Button @click="clickHandler">显示提示框</Button>
  </div>
</template>

<script setup>
import Button from './components/Button.vue';
import showMsg from './utils/showMsg';
const clickHandler = () => {
  showMsg('要显示的消息', (close) => {
    console.log('点击了确定按钮');
    close();
  });
};
</script>

<style scoped>
.controller {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>
