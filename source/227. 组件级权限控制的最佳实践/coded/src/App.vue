<template>
  <div class="container">
    <div class="user">
      <span>切换用户角色：</span>
      <a-select v-model:value="user.role" style="width: 120px">
        <a-select-option v-for="r in roles" :value="r">{{ r }}</a-select-option>
      </a-select>
    </div>
    <div class="btn-container">
      <Authority>
        <template #default="{ userPermisstions }">
          <a-button
            :disabled="!userPermisstions.includes('sys:user:add')"
            type="primary"
          >
            新增用户
          </a-button>
        </template>
      </Authority>
      <Authority permission="sys:user:view">
        <a-button type="primary">查询用户</a-button>
      </Authority>
      <Authority permission="sys:user:update">
        <a-button type="primary">修改用户</a-button>
      </Authority>
      <Authority permission="sys:user:delete">
        <a-button type="primary" danger>删除用户</a-button>
      </Authority>
      <Authority :permission="['sys:user:view', 'sys:user:update']">
        <a-button type="primary" danger>禁用用户</a-button>
      </Authority>
    </div>
  </div>
</template>

<script setup>
import { useAuth, useRoles } from './useAuth';
const { user } = useAuth();
const roles = useRoles();
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin-top: 30px;
}
.user {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  column-gap: 20px;
  align-items: center;
}
</style>
