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
        path: '/verticalList',
        name: 'VerticalList',
        component: () => import('@/views/demo/verticalList/index.vue'),
        meta: {
          title: '虚拟列表',
          subMenuOpenKeys: ['/demo'],
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
              subMenuOpenKeys: ['/demo', '/liquidGlass'],
            },
          },
          {
            path: '/liquidGlassUltimatelyEdition',
            name: 'LiquidGlassUltimatelyEdition',
            component: () =>
              import('@/views/demo/liquidGlass/ultimatelyEdition.vue'),
            meta: {
              title: '液体玻璃终版',
              subMenuOpenKeys: ['/demo', '/liquidGlass'],
            },
          },
        ],
      },
    ],
  },
];

export default demoRoutes;
