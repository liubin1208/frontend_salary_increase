import { computed, ref } from 'vue';

const permissionMap = {
  admin: [
    'sys:user:view',
    'sys:user:update',
    'sys:user:delete',
    'sys:user:add',
  ],
  editor: ['sys:user:update', 'sys:user:view'],
  visitor: ['sys:user:view'],
};
const user = ref({
  name: 'vben',
  role: 'admin',
});
const permissions = computed(() => {
  return permissionMap[user.value.role];
});
export function useAuth() {
  return {
    user,
    permissions,
  };
}

export function useRoles() {
  return Object.keys(permissionMap);
}
