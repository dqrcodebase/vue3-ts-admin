// router/constantRoutes.ts
import type { RouteRecordRaw } from 'vue-router'
import Layouts from '@/layouts/index.vue';
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: { public: true }
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
  // {
  //   path: '/404',
  //   component: () => import('@/views/404.vue'),
  //   meta: { public: true }
  // }
]