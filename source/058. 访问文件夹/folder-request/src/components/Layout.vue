<template>
  <div class="container">
    <div class="aside">
      <slot name="aside"></slot>
    </div>
    <div class="main">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #252526;
  display: flex;
}
.aside {
  flex: 0 0 250px;
  overflow: hidden auto;
}
.main {
  flex: 1 1 auto;
  overflow: hidden auto;
  background: #000;
}
</style>
