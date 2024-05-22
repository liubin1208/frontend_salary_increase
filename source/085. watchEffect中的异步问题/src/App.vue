<template>
  <div class="container">
    <video ref="videoRef" :src="url" controls></video>
    <div class="btns">
      <button class="btn" :disabled="speed === 0.5" @click="speed -= 0.5">
        -0.5
      </button>
      <span class="speed">{{ speed.toFixed(1) }}</span>
      <button :disabled="speed === 3" class="btn" @click="speed += 0.5">
        +0.5
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';
import { fetchVideoUrl } from './api/video';

const speed = ref(1);
const url = ref('');
const videoRef = ref(null);

watchEffect(async () => {
  speed.value;
  url.value = await fetchVideoUrl();
  videoRef.value.playbackRate = speed.value;
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  row-gap: 20px;
}
video {
  width: 80%;
  aspect-ratio: 1.8;
  object-fit: cover;
  background: #000;
}
.btns {
  display: flex;
  column-gap: 10px;
  align-items: center;
}
.speed {
  width: 50px;
  text-align: center;
}
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
.btn:disabled {
  background: #66b1ff80;
  cursor: not-allowed;
}
</style>
