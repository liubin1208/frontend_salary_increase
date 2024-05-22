<template>
  <div class="container">
    <div class="star-item">
      <label class="title">满意度</label>
      <star-rate :max="satisfyMax" :value="satisfy"></star-rate>
      <span class="desc">{{ satisfy }}/{{ satisfyMax }}</span>
    </div>
  </div>
</template>

<script>
import StarRate from './components/StarRate.vue';

export default {
  components: {
    StarRate,
  },
  data() {
    return {
      satisfyMax: 10,
      satisfy: 8,
    };
  },
};
</script>

<style scoped>
.container {
  color: #333;
  font-size: 12px;
}
.star-item {
  display: flex;
  column-gap: 1em;
  align-items: center;
}
.title {
  width: 50px;
  text-align: right;
}
.desc {
  letter-spacing: 3px;
  color: #888;
}
</style>
