/*
 * @Author: dqr
 * @Date: 2025-06-04 17:41:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-05 16:53:15
 * @FilePath: /vue3-ts-admin/src/router/modules/user.ts
 * @Description: 
 * 
 */
import Layouts from "@/layouts/index.vue";
const userRoutes: RouterType[] = [
  {
    path: "/user",
    component: Layouts,
    name: "User",
     meta: {
      title: "用户管理",
    },
    children: [
      {
        path: "list",
        name: "UserList",
        component: () => import("@/views/user/index.vue"),
        meta: {
          title: '用户列表',
        },
      }
    ]
  },
]

export default userRoutes