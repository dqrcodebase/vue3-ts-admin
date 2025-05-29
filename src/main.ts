/*
 * @Author: dqr
 * @Date: 2025-05-27 21:17:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-29 09:47:02
 * @FilePath: /vue3-ts-admin/src/main.ts
 * @Description: 
 * 
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from "./router";
import pinia from "./store";

import '@/assets/styles/index.scss';
import 'ant-design-vue/dist/reset.css';


const app = createApp(App);

app.use(router).use(pinia).use(Antd).mount('#app');
