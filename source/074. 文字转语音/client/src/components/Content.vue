<template>
  <div class="content">
    <template v-for="(txt, i) in docs" :key="i">
      <span
        @click="emits('changeActive', i)"
        :class="{
          active: i === activeIndex,
        }"
      >
        {{ txt }}
      </span>
    </template>
  </div>
</template>

<script setup>
const props = defineProps({
  docs: {
    type: Array,
  },
  activeIndex: {
    type: Number,
    default: -1,
  },
});
const emits = defineEmits(['changeActive']);
</script>

<style scoped>
.content {
  margin: 1em auto;
  width: 80%;
  color: transparent;
  user-select: none;
  line-height: 2;
}
span {
  cursor: pointer;
  position: relative;
  color: #fff;
}
.active {
  color: #eb6a5e;
  font-weight: bold;
}
</style>
