import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from "./router";
import pinia from "./store";

import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.use(router).use(pinia).use(Antd).mount('#app');
