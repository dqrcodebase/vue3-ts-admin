/*
 * @Author: dqr
 * @Date: 2025-05-22 14:43:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-28 11:41:38
 * @FilePath: /vue3-ts-admin/src/router/modules/common.ts
 * @Description: 
 * 
 */
import Layouts from "@/layouts/index.vue";
export default [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      title: '登录',
    }
  },
  {
    path: "/",
    component: Layouts,
    redirect: "/user",
    children: [
      {
        path: "/user",
        name: "User",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: '用户列表',
        }
      }
    ]

  },
  {
    path: "/HelloWorld",
    name: "HelloWorld",
    component: () => import("@/components/HelloWorld.vue"),
    meta: {
      title: 'HelloWorld',
    }
  },
]