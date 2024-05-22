<script setup>
import { ref } from 'vue';
import { getEmployee, updateEmployee } from '../api/emp';
import { message } from 'ant-design-vue';
import employeeForm from './components/employeeForm.vue';
import { useRoute } from 'vue-router';
import { sendMsg } from '../crossTagMsg';
const emp = ref({
  id: '',
  name: ``,
  salary: 3000,
  sex: 1,
  age: 22,
});
const loading = ref(true);
(async () => {
  const route = useRoute();
  const data = await getEmployee(route.params.id);
  emp.value = data;
  loading.value = false;
})();
async function handleSubmit() {
  loading.value = true;
  await updateEmployee({ ...emp.value });
  loading.value = false;
  sendMsg('update-emp', {
    ...emp.value,
  });
  message.success('修改员工成功');
}
</script>

<template>
  <employee-form
    :loading="loading"
    :form-data="emp"
    title="修改员工"
    @submit="handleSubmit"
  />
</template>

<style scoped></style>
