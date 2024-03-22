import { createRouter, createWebHistory } from "vue-router";
import { constantRoute, constantMenuRoute } from "./routers";
import { RouteRecordRaw } from "vue-router";
import { setupRouterHooks } from "./guard";
import type { App } from "vue";
const basicRoutes = [...constantRoute, ...constantMenuRoute];
export const router = createRouter({
  history: createWebHistory(),
  routes: basicRoutes as RouteRecordRaw[],
});

export function setupRouter(app: App<Element>): void {
  // 路由钩子函数
  app.use(router);
  setupRouterHooks();
}
