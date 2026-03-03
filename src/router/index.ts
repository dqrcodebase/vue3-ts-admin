/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2026-03-02 11:12:43
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-03-03 10:53:37
 * @FilePath: /vue3-ts-admin/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { createWebHistory, createRouter } from 'vue-router';
import { type Router } from 'vue-router';
import { constantRoutes } from './constantRoutes'
import { generateRoutes } from '@/store/modules/permission'
import { getToken } from '@/utils/auth'

const router: Router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
});

router.beforeEach(async (to, from, next) => {
  const token = getToken()

  if (!token && !to.meta.public) {
    return next('/login')
  }

  const isRouteLoaded = sessionStorage.getItem('route-loaded')

  if (token && !isRouteLoaded) {
    const routeList = JSON.parse(localStorage.getItem('routeList') || '[]')

    await generateRoutes(routeList)

    sessionStorage.setItem('route-loaded', 'true')

    return next({ ...to, replace: true })
  }

  next()
})
export default router;
