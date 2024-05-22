import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import vSlideIn from './vSlideIn';
const app = createApp(App);
app.directive('slide-in', vSlideIn);
app.mount('#app');
