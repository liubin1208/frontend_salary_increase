<template>
  <div class="type-selector">
    <div>
      <a-radio-group
        :value="seasonValue"
        option-type="button"
        button-style="solid"
        :options="seasonOptions"
        @update:value="handleSeasonUpdate"
      />
    </div>

    <div>
      <a-radio-group
        :value="monthValue"
        option-type="button"
        button-style="solid"
        :options="monthOptions"
        @update:value="handleMonthUpdate"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['change']);
emit('change', 'spring');
const seasonValue = ref('spring');
const seasonOptions = [
  { label: '春', value: 'spring' },
  { label: '夏', value: 'summer' },
  { label: '秋', value: 'autumn' },
  { label: '冬', value: 'winter' },
];
function handleSeasonUpdate(newVal) {
  seasonValue.value = newVal;
  monthValue.value = '';
  emit('change', newVal);
}
const monthValue = ref('');
const monthOptions = [
  { label: '1月', value: '1' },
  { label: '2月', value: '2' },
  { label: '3月', value: '3' },
  { label: '4月', value: '4' },
  { label: '5月', value: '5' },
  { label: '6月', value: '6' },
  { label: '7月', value: '7' },
  { label: '8月', value: '8' },
  { label: '9月', value: '9' },
  { label: '10月', value: '10' },
  { label: '11月', value: '11' },
  { label: '12月', value: '12' },
];
function handleMonthUpdate(newVal) {
  monthValue.value = newVal;
  seasonValue.value = '';
  emit('change', newVal);
}
</script>

<style scoped>
.type-selector {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
}
.type-selector :deep(.ant-radio-button-wrapper) {
  box-shadow: none !important;
}
</style>
