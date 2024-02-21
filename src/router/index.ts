import { createRouter, createWebHashHistory } from "vue-router";
import { constantRoute } from "./routes";
export default createRouter({
  history: createWebHashHistory(),
  routes: constantRoute,
});
