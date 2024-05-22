<template>
  <div class="watermark-container" ref="parentRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import useWatermarkBg from './useWatermarkBg';
const props = defineProps({
  text: {
    type: String,
    required: true,
    default: 'watermark',
  },
  fontSize: {
    type: Number,
    default: 40,
  },
  gap: {
    type: Number,
    default: 20,
  },
});
const bg = useWatermarkBg(props);
const parentRef = ref(null);
let div;
// 重置水印
function resetWatermark() {
  if (!parentRef.value) {
    return;
  }
  if (div) {
    div.remove();
  }
  const { base64, size } = bg.value;
  div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.backgroundImage = `url(${base64})`;
  div.style.backgroundSize = `${size}px ${size}px`;
  div.style.backgroundRepeat = 'repeat';
  div.style.zIndex = 9999;
  div.style.inset = 0;
  parentRef.value.appendChild(div);
}

onMounted(resetWatermark);

const ob = new MutationObserver((entries) => {
  for (const entry of entries) {
    // 删除
    for (const dom of entry.removedNodes) {
      if (dom === div) {
        console.log('水印被删除');
        resetWatermark();
        return;
      }
    }
    // 修改
    if (entry.target === div) {
      console.log('水印被修改');
      resetWatermark();
      return;
    }
  }
});

onMounted(() => {
  ob.observe(parentRef.value, {
    childList: true,
    subtree: true,
    attributes: true,
  });
});

onUnmounted(() => {
  ob.disconnect();
});
</script>

<style scoped>
.watermark-container {
  position: relative;
}
</style>
