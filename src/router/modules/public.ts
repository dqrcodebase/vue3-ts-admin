const publicRouter: RouterType[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录',
      isHide: true,
    },
  },
];

export default publicRouter;
