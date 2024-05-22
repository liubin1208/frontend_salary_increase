<template>
  <div
    class="switch"
    :class="theme"
    @click="theme = theme === 'dark' ? 'light' : 'dark'"
  >
    <div class="bar"></div>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '../utils/useTheme';
const { theme } = useTheme();
</script>

<style scoped>
.switch {
  padding: 5px;
  transition: 0.2s ease-in-out;
  width: 120px;
  height: 50px;
  border-radius: 50px;
  text-align: center;
  background: lightSlateGray;
  box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);
  cursor: pointer;
  position: relative;
}
.bar {
  height: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: lightBlue;
  transition: 0.2s;
  box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
  transition: 0.2s;
}
.switch::before,
.switch::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.2s;
  color: lightSlateGray;
}
.switch::before {
  content: '☼';
  right: 100%;
  margin-right: 10px;
  color: orange;
}
.switch::after {
  content: '☾';
  left: 100%;
  margin-left: 10px;
}

.switch.dark::before {
  color: lightSlateGray;
}
.switch.dark::after {
  color: turquoise;
}
.switch.dark .bar {
  transform: translate(70px);
}
</style>
