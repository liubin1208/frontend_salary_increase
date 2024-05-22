<template>
  <div>
    <MyInput ref="inpRef" v-model="val">
      <template #prepend>
        <el-select placeholder="Select" style="width: 115px">
          <el-option label="Restaurant" value="1" />
          <el-option label="Order No." value="2" />
          <el-option label="Tel" value="3" />
        </el-select>
      </template>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </MyInput>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import MyInput from './components/MyInput.vue';
const val = ref('');
const inpRef = ref(null);
onMounted(() => {
  console.log(inpRef.value);
  inpRef.value.focus();
});
</script>
