/*
 * @Author: dqr
 * @Date: 2025-05-27 21:17:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-19 16:43:49
 * @FilePath: /vue3-ts-admin/src/main.ts
 * @Description:
 *
 */
import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import { store } from './store';
import { Icon } from '@iconify/vue';

import '@/assets/styles/index.scss';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App);

app.component('Iconify', Icon);

app.use(router).use(store).use(Antd).mount('#app');
