/*
 * @Author: dqr
 * @Date: 2025-05-22 11:32:40
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-20 17:32:00
 * @FilePath: /vue3-ts-admin/src/router/index.ts
 * @Description:
 *
 */
import { createWebHistory, createRouter } from 'vue-router';
import { type Router } from 'vue-router';
import { type MenuItem } from '@/store/modules/menu';
import { getToken } from '@/utils/auth';
import { useMenuStoreHook } from '@/store/modules/menu';

const menuStore = useMenuStoreHook();
// 定义公开路由（不需要认证）
const publicPaths = ['/login', '/404', '/forgot-password'];
// 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
const modules: Record<string, any> = import.meta.glob<RouterType[]>(
  './modules/**/*.ts',
  {
    eager: true,
  },
);
/** 原始静态路由（未做任何处理） */
const routeModuleList: RouterType[] = [];

Object.values(modules).forEach((mod) => {
  try {
    const routes = mod.default ?? [];
    routeModuleList.push(...(Array.isArray(routes) ? routes : [routes]));
  } catch (error) {
    console.error(`路由 ${mod} 加载失败：`, error);
  }
});
const routesFlat = routeModuleList.flat(1);
// 参与菜单渲染的路由
export const menuRoutes: RouterType[] = routesFlat.filter(
  (item: RouterType) => {
    return !item.meta.isNotMenu;
  },
);
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routesFlat,
});
router.beforeEach((to, _from) => {
  const token = getToken();
  const isAuthenticated = !publicPaths.includes(to.path);
  if (token && to.path === '/login') {
    return '/';
  }
  if (!token && isAuthenticated) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    };
  }

  if (!to.meta.isNotMenu) {
    const info: MenuItem = {
      path: to.path,
      subMenuOpenKeys: to.meta.subMenuOpenKeys as string[],
      title: to.meta.title as string,
      closable: to.meta.closable as boolean | undefined,
    };
    menuStore.openView(info);
  }

  return true;
});
export default router;
