<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { getEmployees } from '../api/emp';
import { listenMsg } from '../crossTagMsg';
const emps = ref([]);
const loading = ref(true);
(async () => {
  emps.value = await getEmployees();
  loading.value = false;
})();

const cancelListen = listenMsg((msgInfo) => {
  if (msgInfo.type === 'add-emp') {
    emps.value.unshift(msgInfo.content);
  } else if (msgInfo.type === 'update-emp') {
    const i = emps.value.findIndex((e) => e.id === msgInfo.content.id);
    if (i >= 0) {
      emps.value[i] = msgInfo.content;
    }
  }
  console.log('监听到了其他标签页的消息', msgInfo);
});

onUnmounted(cancelListen);

const columns = [
  {
    title: '员工姓名',
    dataIndex: 'name',
  },
  {
    title: '性别',
    dataIndex: 'sex',
  },
  {
    title: '年龄',
    dataIndex: 'age',
  },
  {
    title: '月薪',
    dataIndex: 'salary',
  },
  {
    title: '操作',
    dataIndex: 'operation',
  },
];
</script>

<template>
  <a target="_blank" href="/new" class="link ant-btn ant-btn-primary">新增</a>
  <a-table :loading="loading" :data-source="emps" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.dataIndex === 'sex'">
        {{ record.sex === 0 ? '女' : '男' }}
      </template>
      <template v-if="column.dataIndex === 'operation'">
        <a
          target="_blank"
          class="ant-btn ant-btn-link"
          :href="`/edit/${record.id}`"
        >
          编辑
        </a>
        <a-button type="link" danger>删除</a-button>
      </template>
    </template>
  </a-table>
</template>

<style scoped>
.link {
  float: right;
  margin-bottom: 1em;
  padding: 0 30px;
}
</style>
