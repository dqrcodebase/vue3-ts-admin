import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routers";
export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
});
