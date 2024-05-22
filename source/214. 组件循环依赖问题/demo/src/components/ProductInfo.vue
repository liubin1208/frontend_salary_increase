<template>
  <div class="product" v-if="data">
    <p>
      <label>name:</label>
      <strong>{{ data.name }}</strong>
    </p>
    <p>
      <label>price:</label>
      <strong>￥{{ data.price }}</strong>
    </p>
    <p>
      <label>description:</label>
      <strong>{{ data.description }}</strong>
    </p>
    <p>related products:</p>
    <RelatedProducts :products="relatedProducts"></RelatedProducts>
  </div>
</template>

<script>
import RelatedProducts from './RelatedProducts.vue';

const relatedProducts = [
  {
    name: 'Shoes',
    price: 200,
    description: 'A pair of running shoes',
  },
  {
    name: 'Hat',
    price: 50,
    description: 'A baseball cap',
  },
  {
    name: 'Jacket',
    price: 300,
    description: 'A warm, fuzzy jacket',
  },
  {
    name: 'Gloves',
    price: 50,
    description: 'A pair of gloves',
  },
  {
    name: 'Pants',
    price: 150,
    description: 'A pair of khaki pants',
  },
];
export default {
  components: {
    RelatedProducts,
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      relatedProducts,
    };
  },
};
</script>

<style scoped>
.product p {
  display: flex;
  column-gap: 20px;
}
</style>
