<template>
  <div class="controller">
    <Button @click="clickHandler">显示提示框</Button>
    <MessageBox v-if="showMsg" :msg="msg" @click="clickHandler"></MessageBox>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from './components/Button.vue';
import MessageBox from './components/MessageBox.vue';
const showMsg = ref(false);
const msg = ref('提示消息');
const clickHandler = () => {
  showMsg.value = !showMsg.value;
};
</script>

<style scoped>
.controller {
  display: flex;
  justify-content: center;
  column-gap: 20px;
}
</style>
