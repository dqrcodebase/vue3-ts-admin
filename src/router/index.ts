/*
 * @Author: dqr
 * @Date: 2025-05-22 11:32:40
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-05 17:07:22
 * @FilePath: /vue3-ts-admin/src/router/index.ts
 * @Description:
 *
 */
import { createWebHistory, createRouter } from 'vue-router'
import { type Router } from 'vue-router'
import { getToken } from '@/utils/auth'

// 定义公开路由（不需要认证）
const publicPaths = ['/login', '/404', '/forgot-password'];
// 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts', {
  eager: true,
})
/** 原始静态路由（未做任何处理） */
const routes: any[] = []


Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})
const routesFlat = routes.flat(1)
// 参与菜单渲染的路由
export const menuRoutes: RouterType[] = routesFlat.filter((item: any) => {
  return !item.meta.isHide
})
const router: Router = createRouter({
  history: createWebHistory(),
  routes: routesFlat
})
router.beforeEach((to, _from) => {
  const token = getToken();
  const isAuthenticated = !publicPaths.includes(to.path)
  if (token && to.path === '/login') {
    return '/'
  }
  if (!token && isAuthenticated) {
    return {
      path: '/login',
      query: {
        redirect: to.fullPath,
      },
    }
  }
  return true
})
export default router
