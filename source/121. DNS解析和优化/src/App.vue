<template>
  <div id="app">
    <img src="https://www.autoimg.com/img/341fe3g.jpg" alt="" />
    <a href="https://www.douyin.com">抖音</a>
    <ul class="list">
      <li v-for="link in links" :key="link.name">
        <a :href="link.url">{{ link.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const links = ref([
  { name: '抖音', url: 'https://www.douyin.com' },
  { name: '微博', url: 'https://www.weibo.com' },
]);
</script>

<style scoped>
#app {
  background: url('https://lorem-img.io/3000x3000');
}
</style>
