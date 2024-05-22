<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increase">count:{{ count }}</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, { expose }) {
    const msg = 'Foo Setup';
    const count = ref(0);
    function increase() {
      count.value++;
    }

    return {
      msg,
      count,
      increase,
    };
  },
};
</script>
