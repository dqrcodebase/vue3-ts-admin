import type { AppRouteRecordRaw } from "@/router/type";
import type { RouteRecordRaw, Router } from "vue-router";
import useUserStore from "@/store/user";
import { router } from "@/router";
export async function setupRouterHooks() {
  console.log("🚀 ~ setupRouterHooks ~ router:", router);
  const userStore = useUserStore();

  const userRoutes = await userStore.reqUserRoutes();

  userRoutes.forEach((route: AppRouteRecordRaw) => {
    router.addRoute(route as RouteRecordRaw);
  });
  router.beforeEach((to, from, next) => {
    console.log("🚀 ~ router.beforeEach ~ to:", to);
    next();
    // console.log("🚀 ~ router.beforeEach ~ to:", to);
    // if (to.path !== "/product/attr") {
    //   next({ name: "router" });
    //   console.log("----");
    // } else {
    //   next();
    //   console.log("----+++++");
    // }
  });
}
