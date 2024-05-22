<template>
  <div>
    <h1 class="app">App</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="less">
.app {
  color: @color;
}
</style>
