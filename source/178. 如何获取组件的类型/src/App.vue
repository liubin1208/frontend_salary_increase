<template>
  <div>
    <ElForm ref="formRef"></ElForm>
  </div>
</template>

<script setup lang="ts">
import { useCompRef } from './useCompRef';
import { ElForm } from 'element-plus';
const formRef = useCompRef(ElForm);
formRef.value?.validate;
</script>
