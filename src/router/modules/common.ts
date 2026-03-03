/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2025-11-06 15:00:07
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-03-03 15:33:17
 * @FilePath: /vue3-ts-admin/src/router/modules/common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Layouts from '@/layouts/index.vue';
const commonRoutes: RouterType[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      isHide: true,
      title: '登陆',
      isTopMenu: true,
    },
  },
  {
    path: '/',
    component: Layouts,
    redirect: '/home',
    meta: {
      isHide: true,
      title: '首页',
      isTopMenu: true,
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: {
          title: '首页',
          closable: false,
        },
      },
    ],
  },
];

export default commonRoutes;
