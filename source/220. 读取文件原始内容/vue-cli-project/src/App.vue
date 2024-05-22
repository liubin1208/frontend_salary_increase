<template>
  <div>
    <img class="img" :src="dataurl" alt="" />
  </div>
</template>

<script>
import dataurl from './img.dataurl';
export default {
  data() {
    return {
      dataurl,
    };
  },
};
</script>

<style scoped>
.img {
  width: 185px;
  height: 233px;
}
</style>
