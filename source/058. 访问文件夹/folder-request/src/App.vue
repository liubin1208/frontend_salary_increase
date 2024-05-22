<template>
  <Layout>
    <template #aside>
      <h2 class="title">文件查看器</h2>
      <FileTree @select="handleSelect"></FileTree>
    </template>
    <template #main>
      <FileEditor :handle="fileHandle"></FileEditor>
    </template>
  </Layout>
</template>

<script setup>
import Layout from './components/Layout.vue';
import FileTree from './components/FileTree.vue';
import FileEditor from './components/FileEditor.vue';
import { ref } from 'vue';

const fileHandle = ref(null);

const handleSelect = (e) => {
  fileHandle.value = e;
};
</script>

<style scoped>
.title {
  font-weight: normal;
  font-size: 1em;
  padding: 20px 30px;
}
</style>
