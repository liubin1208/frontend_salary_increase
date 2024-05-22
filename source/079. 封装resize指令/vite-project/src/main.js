import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import resizeDirect from './directs/sizeDirect';

const app = createApp(App);
app.directive('size-ob', resizeDirect);
app.mount('#app');
