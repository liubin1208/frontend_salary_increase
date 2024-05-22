<template>
  <div class="tree">
    <a-directory-tree
      v-if="treeData"
      :fieldNames="{
        children: 'children',
        title: 'name',
        key: 'key',
      }"
      :tree-data="treeData"
      expandAction="click"
      @select="handleSelect"
    ></a-directory-tree>
    <a-button
      v-else
      @click="openDirDialog"
      class="btn"
      type="primary"
      size="large"
    >
      打开文件夹
    </a-button>
  </div>
</template>

<script setup>
import { useDir } from '../compositions/useDir';
const emit = defineEmits(['select']);
const { openDirDialog, treeData } = useDir();
const handleSelect = (keys, e) => {
  const selectedHandle = e.node?.dataRef?.handle;
  if (selectedHandle) {
    if (selectedHandle.kind === 'file') {
      emit('select', selectedHandle);
    } else {
      emit('select', null);
    }
  }
};
</script>

<style scoped>
.btn {
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-top: 30px;
}
.tree :deep(.ant-tree-indent-unit) {
  width: 12px;
}
.tree :deep(.ant-tree-switcher) {
  background: transparent;
}
</style>
