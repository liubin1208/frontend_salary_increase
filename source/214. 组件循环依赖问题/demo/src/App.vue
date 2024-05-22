<template>
  <div class="main">
    <ProductInfo :data="productData"></ProductInfo>
  </div>
</template>
<script>
import ProductInfo from './components/ProductInfo.vue';

export default {
  components: {
    ProductInfo,
  },
  data() {
    return {
      productData: {
        name: 'Socks',
        price: 100,
        description: 'A pair of warm, fuzzy socks',
      },
    };
  },
};
</script>
