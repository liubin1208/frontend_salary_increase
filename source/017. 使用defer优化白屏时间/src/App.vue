<template>
  <div class="container">
    <div v-for="n in 100">
      <heavy-comp v-if="defer(n)"></heavy-comp>
    </div>
  </div>
</template>

<script setup>
import HeavyComp from './components/HeavyComp.vue';
import { useDefer } from './useDefer';
const defer = useDefer();
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
</style>
