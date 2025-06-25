import Layouts from '@/layouts/index.vue';
const commonRoutes: RouterType[] = [
  {
    path: '/',
    component: Layouts,
    redirect: '/home',
    meta: {
      isHide: true,
      title: '首页',
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
