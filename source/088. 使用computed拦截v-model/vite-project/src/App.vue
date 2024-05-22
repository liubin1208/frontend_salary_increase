<template>
  <div>
    <SearchBar v-model="searchData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
const searchData = ref({
  keyword: '',
  placeholder: '请输入你要查询的关键字',
  options: [
    { label: '视频', value: 'video' },
    { label: '文章', value: 'article' },
    { label: '用户', value: 'user' },
  ],
  selectedValue: 'video',
});
</script>

<style scoped></style>
