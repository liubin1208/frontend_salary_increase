<template>
  <img class="img" :src="dataUrl" alt="" />
</template>

<script setup>
import dataUrl from './img.dataurl?raw';
</script>

<style scoped>
.img {
  width: 185px;
  height: 233px;
}
</style>
