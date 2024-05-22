<template>
  <div class="modal">
    <div class="loading">
      <span>{{ percent }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  percent: {
    type: Number,
    required: true,
  },
});
const percentForCss = computed(() => props.percent + '%');
</script>

<style scoped>
.modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: conic-gradient(
    #61c355,
    #61c355 v-bind(percentForCss),
    #e8e8e8 v-bind(percentForCss)
  );
  display: flex;
  justify-content: center;
  align-items: center;
}
.loading span {
  background: #fff;
  display: block;
  width: 80%;
  height: 80%;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 2em;
  color: #333;
}
span::after {
  content: '%';
  font-size: 16px;
  margin-left: 5px;
}
</style>
