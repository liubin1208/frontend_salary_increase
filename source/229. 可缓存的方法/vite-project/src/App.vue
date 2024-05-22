<template>
  <a-table :dataSource="datas" :columns="columns">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'count'">
        <div class="count">
          <a-button danger type="primary" @click="record.count--">-</a-button>
          <span>{{ record.count }}</span>
          <a-button type="primary" @click="record.count++">+</a-button>
        </div>
      </template>
      <template v-if="column.key === 'totalPrice'">
        <span>{{ computedPrice(record) }}</span>
      </template>
    </template>
  </a-table>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useComputed } from './useComputed';
const datas = reactive([
  {
    name: 'iphone',
    price: 6000,
    count: 2,
  },
  {
    name: 'ipad',
    price: 5000,
    count: 3,
  },
  {
    name: 'mac',
    price: 10000,
    count: 5,
  },
  {
    name: 'iwatch',
    price: 3000,
    count: 2,
  },
  {
    name: 'ipod',
    price: 2000,
    count: 7,
  },
]);
const columns = [
  {
    title: '产品',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '单价',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '数量',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: '总价',
    key: 'totalPrice',
  },
];

function totalPrice(row) {
  console.log('computed');
  return row.price * row.count;
}
const computedPrice = useComputed(totalPrice);
</script>

<style>
.count {
  display: flex;
  column-gap: 10px;
  align-items: center;
}
</style>
