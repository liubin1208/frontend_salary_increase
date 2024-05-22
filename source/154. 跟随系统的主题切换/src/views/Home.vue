<template>
  <div class="main">
    <p>{{ theme }}</p>
    <ThemeSwitch />
    <h1>Theme Switch</h1>
    <p>Switch from light to dark mode using the toggle.</p>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitch from '../components/ThemeSwitch.vue';
import useTheme from '../utils/useTheme';
const { theme } = useTheme();
</script>

<style scoped>
.main {
  height: 100vh;
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  background: linear-gradient(to bottom, var(--bg1), var(--bg2));
  color: var(--text-color);
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  font-size: 2em;
  padding-top: 1em;
}
.main h1 {
  margin-top: 2em;
}
</style>
