<template>
  <a-upload @preview="handlePreview"></a-upload>
</template>

<script setup lang="ts">
import { UploadFile } from 'ant-design-vue';

function handlePreview(file: UploadFile<any>) {
  console.log(file);
}
</script>
