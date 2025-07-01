import Layouts from '@/layouts/index.vue';
const demoRoutes: RouterType[] = [
  {
    path: '/demo',
    component: Layouts,
    meta: {
      title: 'demo',
      icon: 'ep:scale-to-original',
      isTopMenu: true,
    },
    children: [
      {
        path: '/largeAmountList',
        name: 'LargeAmountList',
        component: () => import('@/views/demo/largeAmountList/index.vue'),
        meta: {
          title: '海量数据列表',
        },
      },
      {
        path: '/liquidGlass',
        name: 'LiquidGlass',
        meta: {
          title: '液体玻璃',
        },
        children: [
          {
            path: '/liquidGlassFirstEdition',
            name: 'LiquidGlassFirstEdition',
            component: () =>
              import('@/views/demo/liquidGlass/firstEdition.vue'),
            meta: {
              title: '液体玻璃初版',
            },
          },
          {
            path: '/liquidGlassUltimatelyEdition',
            name: 'LiquidGlassUltimatelyEdition',
            component: () =>
              import('@/views/demo/liquidGlass/ultimatelyEdition.vue'),
            meta: {
              title: '液体玻璃终版',
            },
          },
        ],
      },
    ],
  },
];

export default demoRoutes;
