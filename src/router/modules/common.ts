/*
 * @Author: dqr
 * @Date: 2025-05-22 14:43:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-22 16:07:09
 * @FilePath: /vue3-ts-admin/src/router/modules/common.ts
 * @Description: 
 * 
 */
export default [
  {
    path: "/login",
    name: "Login",
    component:() => import("@/views/login/index.vue"),
    meta: {
      title: '登录',
    }
  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component:() => import("@/components/HelloWorld.vue"),
    meta: {
      title: 'HelloWorld',
    }
  },
]