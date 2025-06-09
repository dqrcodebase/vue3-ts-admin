/*
 * @Author: dqr
 * @Date: 2025-05-22 14:43:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-06 17:22:41
 * @FilePath: /vue3-ts-admin/src/router/modules/common.ts
 * @Description: 
 * 
 */
import Layouts from "@/layouts/index.vue";
const commonRoutes: RouterType[] = [
  {
    path: "/",
    component: Layouts,
    redirect: "/home",
    meta: {
      isHide: true,
      title: "首页",
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: '首页',
          closable:  false
        }
      },
    ]
  },
]

export default commonRoutes