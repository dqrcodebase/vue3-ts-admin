/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2026-02-28 16:49:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-03-02 15:50:20
 * @FilePath: /vue3-ts-admin/src/store/modules/permission.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// store/permission.ts

import router from '@/router'
import { filterRoutes } from '@/utils/auth/index'

const asyncRoutes: Record<string, any> = import.meta.glob<RouterType[]>(
  '@/router/asyncRoutes/**/*.ts',
  {
    eager: true,
  },
);
const routeModuleList: RouterType[] = [];

Object.values(asyncRoutes).forEach((mod) => {
  try {
    const routes = mod.default ?? [];
    routeModuleList.push(...(Array.isArray(routes) ? routes : [routes]));
  } catch (error) {
    console.error(`路由 ${mod} 加载失败：`, error);
  }
});
const routesFlat = routeModuleList.flat(1);
console.log("🚀 ~ routesFlat:", routesFlat)
// 参与菜单渲染的路由
const menuRoutes: RouterType[] = routesFlat.filter(
  (item: RouterType) => {
    return !item.meta.isNotMenu;
  },
);
export async function generateRoutes(routeList: string[]) {
  const routeSet = new Set(routeList)

  const accessRoutes = filterRoutes(routeModuleList, routeSet)

  accessRoutes.forEach(route => {
    router.addRoute(route)
  })

  return accessRoutes
}