<template>
  <slot v-if="showSlot" :userPermisstions="permissions"></slot>
</template>

<script setup>
import { computed } from 'vue';
import { useAuth } from './useAuth';
const props = defineProps({
  permission: {
    type: [String, Array],
  },
});

const { permissions } = useAuth();
const showSlot = computed(() => {
  if (!props.permission) {
    // 没有传入权限，直接显示
    return true;
  }
  if (!permissions) {
    return false;
  }

  if (Array.isArray(props.permission)) {
    return props.permission.every((p) => permissions.value.includes(p));
  } else {
    return permissions.value.includes(props.permission);
  }
});
</script>
