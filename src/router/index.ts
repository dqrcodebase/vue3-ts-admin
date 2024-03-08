import { createRouter, createWebHistory } from "vue-router";
import { constantRoute, constantMenuRoute } from "./routers";
import { RouteRecordRaw } from "vue-router";
const basicRoutes = [...constantRoute, ...constantMenuRoute];
export default createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[],
});
