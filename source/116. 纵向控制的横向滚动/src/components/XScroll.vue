<template>
  <div v-size-ob="handleSizeChange" class="scroll-container">
    <div class="v-scroll">
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
const s = reactive({
  w: 0,
  h: 0,
});
function handleSizeChange({ width, height }) {
  s.w = width;
  s.h = height;
}
</script>

<style scoped>
.scroll-container {
  width: 100%;
  height: 100%;
}
.v-scroll {
  --w: calc(v-bind('s.w') * 1px);
  --h: calc(v-bind('s.h') * 1px);
  width: var(--h);
  height: var(--w);
  overflow: auto;
  position: relative;
  transform-origin: left top;
  transform: translateY(var(--h)) rotate(-90deg);
}
/* 隐藏滚动条 */
.v-scroll::-webkit-scrollbar {
  display: none;
}
.content {
  height: var(--h);
  position: absolute;
  top: 0;
  left: var(--h);
  transform-origin: left top;
  transform: rotate(90deg);
}
</style>
