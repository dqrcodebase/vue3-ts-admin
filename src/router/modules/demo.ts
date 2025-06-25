import Layouts from '@/layouts/index.vue';
const demoRoutes: RouterType[] = [
  {
    path: '/demo',
    component: Layouts,
    meta: {
      title: '例子',
      icon: 'ep:scale-to-original',
    },
    children: [
      {
        path: '/largeAmountList',
        name: 'LargeAmountList',
        component: () => import('@/views/demo/largeAmountList/index.vue'),
        meta: {
          title: '海量数据列表',
          closable: false,
        },
      },
    ],
  },
];

export default demoRoutes;
