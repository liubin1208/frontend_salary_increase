<template>
  <div ref="containerRef">
    <slot></slot>
    <Teleport to="body">
      <div
        v-if="showMenu"
        class="context-menu"
        :style="{
          left: pos.posX + 'px',
          top: pos.posY + 'px',
        }"
      >
        <div v-size-ob="handleSizeChange" class="menu-list">
          <div
            @click="handleClick(item)"
            class="menu-item"
            v-for="(item, i) in menu"
            :key="item.label"
          >
            {{ item.label }}
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import useContextMenu from './useContextMenu';
import { useViewport } from './useViewport';
const props = defineProps({
  menu: {
    type: Array,
    default: () => [],
  },
});
const containerRef = ref(null);
const emit = defineEmits(['select']);
const { x, y, showMenu } = useContextMenu(containerRef);
const { vw, vh } = useViewport();
const w = ref(0);
const h = ref(0);
function handleSizeChange(e) {
  w.value = e.width;
  h.value = e.height;
}
const pos = computed(() => {
  let posX = x.value;
  let posY = y.value;
  if (x.value > vw.value - w.value) {
    posX = x.value - w.value;
  }
  if (y.value > vh.value - h.value) {
    posY = vh.value - h.value;
  }
  return {
    posX,
    posY,
  };
});

function handleClick(item) {
  showMenu.value = false;
  emit('select', item);
}
</script>

<style scoped>
.context-menu {
  position: fixed;
  background: #eee;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2), 1px 1px 5px rgba(0, 0, 0, 0.2);
  min-width: 100px;
  border-radius: 5px;
  font-size: 12px;
  color: #1d1d1f;
  line-height: 1.8;
  white-space: nowrap;
  overflow: hidden;
}
.menu-list {
  padding: 5px;
}
.menu-item {
  padding: 0 5px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
}
.menu-item:hover {
  background: #3477d9;
  color: #fff;
}
</style>
