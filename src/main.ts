import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import App from './App.vue';
//引入自定义插件对象:注册整个项目全局组件
import globalComponent from '@/components';
import { setupRouter } from '@/router';
import { createPinia } from 'pinia';
const pinia = createPinia();
//引入模板的全局的样式
import '@/styles/index.scss';
import 'virtual:svg-icons-register';
import globalStyle from '@/styles/global.module.scss';
import 'uno.css';

const app = createApp(App);

app
  .use(ElementPlus, {
    locale: zhCn,
  })
  .use(globalComponent)
  .use(pinia);

setupRouter(app);

app.config.globalProperties.$globalStyle = globalStyle;
app.mount('#app');
