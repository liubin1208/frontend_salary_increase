<script setup>
import { ref } from 'vue';
import { addEmployee } from '../api/emp';
import { message } from 'ant-design-vue';
import employeeForm from './components/employeeForm.vue';
import { sendMsg } from '../crossTagMsg';
const defaultValue = {
  id: '',
  name: ``,
  salary: 3000,
  sex: 1,
  age: 22,
};
const emp = ref({ ...defaultValue });
const loading = ref(false);

async function handleSubmit() {
  loading.value = true;
  await addEmployee(emp.value);
  loading.value = false;
  message.success('新增员工成功');
  sendMsg('add-emp', {
    ...emp.value,
  });
  emp.value = { ...defaultValue };
}
</script>

<template>
  <employee-form
    :loading="loading"
    :form-data="emp"
    title="新增员工"
    @submit="handleSubmit"
  />
</template>

<style scoped></style>
