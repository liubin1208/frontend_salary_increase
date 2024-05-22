import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import Authority from './Authority.vue';
const app = createApp(App);
app.component('Authority', Authority);
app.use(Antd).mount('#app');
