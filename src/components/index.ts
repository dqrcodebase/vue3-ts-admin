import SvgIcon from "./SvgIcon/index.vue";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
const globalComponents: any = {
  SvgIcon,
};

export default {
  install(app: any) {
    for (const [key, component] of Object.entries(globalComponents)) {
      app.component(key, component);
    }
    console.log("🚀 ~ install ~ ElementPlusIconsVue:", ElementPlusIconsVue);

    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component);
    }
  },
};
