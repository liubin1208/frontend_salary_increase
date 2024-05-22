<template>
  <div id="app">
    <button @click="loadDatas">load datas</button>
    <h1>datas count: {{ datas.length }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [],
    };
  },
  methods: {
    loadDatas() {
      this.datas = Object.freeze(this.getDatas());
    },
    getDatas() {
      const result = [];
      for (var i = 0; i < 1000000; i++) {
        result.push({
          id: i,
          name: `name${i}`,
          address: {
            city: `city${i}`,
            province: `province${i}`,
          },
        });
      }
      return result;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
}
</style>
