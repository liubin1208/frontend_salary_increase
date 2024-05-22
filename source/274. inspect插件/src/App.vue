<template>
  <div>
    <input type="text" v-model="text" />
    <el-input v-model="text"></el-input>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('hello');
</script>

<style scoped></style>
