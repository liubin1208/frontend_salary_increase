<template>
  <!-- <img class="primitive" src="./assets/test.jpg" /> -->
  <ProgressiveImage
    class="primitive"
    :placeholder="PlaceHolderUrl"
    :origin="OriginUrl"
  />
</template>

<script setup>
import ProgressiveImage from './components/ProgressiveImage.vue';
import OriginUrl from './assets/origin.jpg';
import PlaceHolderUrl from './assets/placeholder.jpg';
</script>

<style scoped>
.primitive {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  display: block;
}
</style>
