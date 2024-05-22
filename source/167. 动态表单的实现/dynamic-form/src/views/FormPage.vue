<template>
  <div class="container">
    <FormItemComp :form-state="root"></FormItemComp>
  </div>
</template>

<script setup lang="ts">
import FormItemComp from '../components/FormItemComp.vue';
import root from './FormPageDatas';
</script>

<style scoped>
.container {
  width: 80%;
  margin: 1em auto;
}
</style>
