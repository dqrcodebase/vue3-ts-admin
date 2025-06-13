/*
 * @Author: dqr
 * @Date: 2025-06-04 17:41:57
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-12 16:02:17
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
      icon: 'SettingOutlined'
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
      {
        path: "user/list1",
        name: "UserList1",
        component: () => import("@/views/user/index1.vue"),
        meta: {
          title: '用户列表1',
        },
      },
      {
        path: "user/list2",
        name: "UserList2",
        component: () => import("@/views/user/index2.vue"),
        meta: {
          title: '用户列表2',
        },
      },
      {
        path: "user/list3",
        name: "UserList3",
        component: () => import("@/views/user/index3.vue"),
        meta: {
          title: '用户列表3',
        },
      },
    ]
  },
]

export default userRoutes