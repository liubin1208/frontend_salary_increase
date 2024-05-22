<template>
  <button @click="handleClick">Hello, Vue-Cli</button>
</template>

<script>
export default {
  methods: {
    handleClick() {
      const arr = new Array(100000).fill(0);
      console.log(arr);
      return arr;
    },
  },
};
</script>
