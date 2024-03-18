import type { AppRouteRecordRaw } from "/src/router/types";
const viewsComponent: Record<string, any> = import.meta.glob(
  "/src/views/**/*.vue",
  { eager: true },
);
const layoutComponent: Record<string, any> = import.meta.glob(
  "@/layouts/default/index.vue",
  { eager: true },
);

// 格式化路由,将component转换为真实的组件,并且将children转换为嵌套路由
export function formatRoutes(routes: AppRouteRecordRaw[]): AppRouteRecordRaw[] {
  return routes.map((item) => {
    const { component, children, ...otherProps } = item;
    let realComponent: any = null;
    if (component && children) {
      realComponent = layoutComponent[component as string].default;
    } else if (component && !children) {
      realComponent = viewsComponent[component as string].default;
    } else if (!component) {
      realComponent = null;
    }
    const route: AppRouteRecordRaw = {
      ...otherProps,
      component: realComponent,
      children: children && formatRoutes(children),
    };
    return route;
  });
}
// export function formatRoutes(routes: AppRouteRecordRaw[]) {
//   const val = [];
//   for (let i = 0; i < routes.length; i++) {
//     if (!routes[i].component) break;

//     if (routes[i].children) {
//       const component = layoutComponent[routes[i].component];
//       if (component && component.default) {
//         val[i] = {
//           ...routes[i],
//           component: component.default,
//           children: [],
//         };
//         val[i].children = formatRoutes(routes[i].children);
//       }
//     } else if (routes[i].component) {
//       const component = viewsComponent[routes[i].component];

//       if (component && component.default) {
//         val[i] = {
//           ...routes[i],
//           component: component.default,
//         };
//       }
//     }
//   }
//   return val;
// }
