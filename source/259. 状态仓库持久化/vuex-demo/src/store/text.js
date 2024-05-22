export default {
  namespaced: true,
  state: {
    text: 'Hello Vuex!',
  },
  mutations: {
    updateText(state, text) {
      state.text = text;
    },
  },
};
