<template>
  <div class="btns">
    <button @click="clickHandler(download)" class="btn">获取数据</button>
  </div>
  <Loading v-if="isLoading" :percent="percent"></Loading>
</template>
<script setup>
import { computed, ref } from 'vue';
import { download } from './api';

import Loading from './Loading.vue';

const isLoading = ref(false);
const loaded = ref(0);
const total = ref(1);
const percent = computed(() => Math.round((loaded.value * 100) / total.value));
const clickHandler = async (apiFunc) => {
  isLoading.value = true;
  loaded.value = 0;
  await apiFunc((e) => {
    loaded.value = e.loaded;
    total.value = e.total;
  });
  isLoading.value = false;
};
</script>
<style>
.btns {
  display: flex;
  justify-content: center;
  column-gap: 1em;
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
  color: rgba(255, 255, 255, 0.5);
  background: #66b0ff63;
  cursor: not-allowed;
}
</style>
