export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increase(state) {
      state.count++;
    },
  },
};
