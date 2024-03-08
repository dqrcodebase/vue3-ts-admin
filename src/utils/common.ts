// import { useRouter } from "vue-router";
// console.log("🚀 ~ useRouter:", useRouter);
// const router = useRouter();
// console.log("🚀 ~ router:", router);
// 格式化路由
export function formatRoutes(routes: any[]) {
  const fmtRoutes: any[] = [];
  routes.forEach((route) => {
    const { componentPath, children } = route;
    const component = () => import(componentPath);
    delete route.componentPath;
    const fmtRoute = {
      ...route,
      component,
    };
    if (children && children.length) {
      route.children = formatRoutes(children);
    }
    fmtRoutes.push(fmtRoute);
  });
  return fmtRoutes;
}
// 获取接口配置的路由，并引入对应页面的component
