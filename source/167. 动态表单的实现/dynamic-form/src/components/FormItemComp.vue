<template>
  <template v-if="formState">
    <a-form-item :label="formState.payload.label">
      <template v-if="formState.type === 'input'">
        <a-input v-model:value="formState.payload.value" />
      </template>
      <template v-else-if="formState.type === 'checkbox'">
        <a-checkbox-group v-model:value="formState.payload.value">
          <a-checkbox
            v-for="option in formState.payload.options"
            :value="option.value"
          >
            {{ option.label }}
          </a-checkbox>
        </a-checkbox-group>
      </template>
      <template v-else-if="formState.type === 'radio'">
        <a-radio-group v-model:value="formState.payload.value">
          <a-radio
            v-for="option in formState.payload.options"
            :value="option.value"
          >
            {{ option.label }}
          </a-radio>
        </a-radio-group>
      </template>
      <template v-else-if="formState.type === 'select'">
        <a-select v-model:value="formState.payload.value">
          <a-select-option
            v-for="option in formState.payload.options"
            :value="option.value"
          >
            {{ option.label }}
          </a-select-option>
        </a-select>
      </template>
    </a-form-item>
    <FormItemComp :form-state="getNext()"></FormItemComp>
  </template>
</template>

<script setup lang="ts">
import { FormItem } from '../FormItem';

const props = defineProps<{
  formState: FormItem | null;
}>();

function getNext(): FormItem | null {
  let current: FormItem | null = props.formState;
  if (!current) {
    return null;
  }
  const acients = [];
  acients.unshift(current);
  while ((current = current.parent)) {
    acients.unshift(current);
  }
  return props.formState!.next(props.formState!, acients);
}
</script>

<style>
.ant-form-item-label {
  padding-right: 10px !important;
}
</style>
