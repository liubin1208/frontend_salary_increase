<template>
  <div class="menu">
    <router-link class="link-item" :to="{ name: l.name }" v-for="l in links">
      {{ l.title }}
    </router-link>
  </div>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { router } from './router';

const links = reactive(
  router
    .getRoutes()
    .map((r) => ({
      name: r.name,
      title: r.meta.title,
      order: r.meta.menuOrder,
    }))
    .sort((r1, r2) => r1.order - r2.order)
);
</script>

<style scoped>
.menu {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1em;
}
.link-item {
  color: #5177cf;
}
.router-link-exact-active {
  text-decoration: none;
  color: #eb695d;
}
.main {
  display: flex;
  justify-content: center;
}
</style>
