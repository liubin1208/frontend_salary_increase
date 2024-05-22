import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import persistPlugin from './store/persistPlugin';
const pinia = createPinia();
pinia.use(persistPlugin);
const app = createApp(App);
app.use(pinia);
app.mount('#app');
