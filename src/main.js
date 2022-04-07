import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import store from "./store"
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(Antd).use(store).mount('#app');