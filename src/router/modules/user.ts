/*
 * @Author: dqr
 * @Date: 2025-06-04 17:41:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-18 11:39:24
 * @FilePath: /vue3-ts-admin/src/router/modules/user.ts
 * @Description: 
 * 
 */
import Layouts from "@/layouts/index.vue";
const userRoutes: RouterType[] = [
  {
    path: "/system",
    component: Layouts,
    name: "System",
    meta: {
      title: "系统管理",
      icon: 'subway:settong'
      
    },
    children: [
      {
        path: "user/list",
        name: "UserList",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: '用户列表',
        },
      },
    ]
  },
]

export default userRoutes