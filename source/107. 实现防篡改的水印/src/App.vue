<template>
  <div class="container">
    <Watermark text="版权所有">
      <div class="content"></div>
    </Watermark>
    <Watermark text="禁止转载" style="background: #28c840">
      <div class="content"></div>
    </Watermark>
  </div>
</template>

<script setup>
import Watermark from './components/Watermark.vue';
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.container > * {
  width: 45%;
  background: #fb5e56;
  box-sizing: border-box;
  line-height: 2;
  height: 50vh;
  overflow: hidden;
}
.content {
  padding: 10px;
}
</style>
