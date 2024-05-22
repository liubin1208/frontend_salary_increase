<template>
  <div>
    <button :disabled="!canPlay" @click="playAll" class="btn">播放全文</button>
    <Content
      :docs="parts"
      :active-index="readingIndex"
      @change-active="playOne"
    ></Content>
  </div>
</template>

<script setup>
import Content from './Content.vue';
import { useReader } from '../composition/useReader';
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
});
const { parts, readingIndex, playAll, playOne, canPlay } = useReader(
  props.text
);
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
  margin-left: 10%;
  margin-top: 30px;
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
