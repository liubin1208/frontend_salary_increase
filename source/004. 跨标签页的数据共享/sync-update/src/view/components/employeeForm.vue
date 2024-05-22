<script setup>
defineProps({
  formData: {
    required: true,
    type: Object,
  },
  title: {
    required: true,
    type: String,
  },
  loading: {
    type: Boolean,
    default: false,
  },
});

const rules = {
  name: [{ required: true, message: '请填写员工姓名', trigger: 'blur' }],
  age: [
    { required: true, message: '请填写员工年龄', trigger: 'blur' },
    {
      type: 'number',
      min: 18,
      max: 100,
      message: '员工年龄范围不正确',
      trigger: 'blur',
    },
  ],
  salary: [
    {
      required: true,
      message: '请输入员工薪资',
      trigger: 'blur',
    },
  ],
};

const emit = defineEmits(['submit']);

function handleSubmit(e) {
  emit('submit');
}
</script>

<template>
  <a-divider orientation="left">{{ title }}</a-divider>
  <a-spin :spinning="loading">
    <a-form
      :label-col="{ span: 4 }"
      :rules="rules"
      class="form"
      :model="formData"
      @finish="handleSubmit"
    >
      <a-form-item name="name" label="员工姓名">
        <a-input v-model:value="formData.name" />
      </a-form-item>
      <a-form-item name="sex" label="员工性别">
        <a-radio-group name="sex" v-model:value="formData.sex">
          <a-radio-button :value="1">男</a-radio-button>
          <a-radio-button :value="0">女</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item name="age" label="员工年龄">
        <a-input-number
          :precision="0"
          :min="18"
          :max="100"
          v-model:value="formData.age"
        />
      </a-form-item>
      <a-form-item name="salary" label="员工薪资">
        <a-input-number
          :precision="0"
          :min="0"
          :max="1000000"
          :step="1000"
          v-model:value="formData.salary"
        />
        <a-form-item class="btn-area">
          <a-button type="primary" htmlType="submit">提交</a-button>
        </a-form-item>
      </a-form-item>
    </a-form>
  </a-spin>
</template>

<style scoped>
.form {
  margin-top: 1em;
}
.btn-area {
  margin-top: 1em;
}
</style>
