import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import resizeDirect from './directs/sizeDirect';

const app = createApp(App);
app.directive('size-ob', resizeDirect);
app.mount('#app');
