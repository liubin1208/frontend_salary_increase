<template>
  <div class="demo">
    <div class="container">
      <XScroll>
        <div class="card-list">
          <div class="card"><img src="./assets/p1.jpeg" alt="" /></div>
          <div class="card"><img src="./assets/p2.jpeg" alt="" /></div>
          <div class="card"><img src="./assets/p3.jpeg" alt="" /></div>
          <div class="card"><img src="./assets/p4.jpeg" alt="" /></div>
          <div class="card"><img src="./assets/p5.jpeg" alt="" /></div>
        </div>
      </XScroll>
    </div>
  </div>
</template>

<script setup>
import XScroll from './components/XScroll.vue';
</script>

<style scoped>
.demo {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding-top: 100px;
  background: #000;
}
.container {
  width: 100%;
  height: 400px;
}
.card-list {
  display: flex;
  column-gap: 30px;
  height: 100%;
}
.card {
  width: 600px;
  height: 100%;
  flex-shrink: 0;
  background: #eb695d;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
