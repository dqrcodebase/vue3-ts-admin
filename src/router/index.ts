/*
 * @Author: dqr
 * @Date: 2025-05-22 11:32:40
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 16:45:49
 * @FilePath: /vue3-ts-admin/src/router/index.ts
 * @Description:
 *
 */
import { createWebHistory, createRouter } from 'vue-router'
import { type Router } from 'vue-router'
import common  from './modules/common'
// import Cookies from "js-cookie";
// 自动导入全部静态路由，无需再手动引入！匹配 src/router/modules 目录（任何嵌套级别）中具有 .ts 扩展名的所有文件
const modules: Record<string, any> = import.meta.glob('./modules/**/*.ts', {
  eager: true,
})
/** 原始静态路由（未做任何处理） */
const routes = []

Object.keys(modules).forEach((key) => {
  routes.push(modules[key].default)
})
const router: Router = createRouter({
  history: createWebHistory(),
  routes: [...common],
})
// router.beforeEach((to, _from, next) => {
// })
export default router
