<template>
  <div>
    <div class="list">
      <div class="list-item" :key="p.name" v-for="p in products">
        <span @click="shownProduct = p" class="title">{{ p.name }}</span>
      </div>
    </div>
    <div v-if="shownProduct" class="shown">
      <ProductInfo :data="shownProduct"></ProductInfo>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ProductInfo: () => import('./ProductInfo.vue'),
  },
  // beforeCreate() {
  //   this.$options.components.ProductInfo = require('./ProductInfo.vue').default;
  // },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      shownProduct: null,
    };
  },
};
</script>

<style scoped>
.list {
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 1em;
}
.list-item {
  margin: 1em 0;
}
.title {
  color: #f40;
  cursor: pointer;
}
</style>
