<template>
  <div class="container">
    <div v-size-ob="handleSizeChange" ref="chartRef" class="charts"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCharts } from './useCharts';
const chartRef = ref(null);
const width = ref(500);
useCharts(width, chartRef);

function handleSizeChange(size) {
  console.log('resize');
  width.value = size.width;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  gap: 30px;
}
.charts {
  width: 500px;
  height: 300px;
  resize: both;
  overflow: auto;
}
.charts::-webkit-scrollbar {
  width: 0;
}
</style>
