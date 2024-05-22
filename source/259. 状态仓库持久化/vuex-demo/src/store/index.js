import { createStore } from 'vuex';
import counter from './counter';
import text from './text';
import persistPlugin from './persistPlugin';

const store = createStore({
  modules: {
    counter,
    text,
  },
  plugins: [persistPlugin],
});

export default store;
