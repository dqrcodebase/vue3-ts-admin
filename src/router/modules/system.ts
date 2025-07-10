import Layouts from '@/layouts/index.vue';
const userRoutes: RouterType[] = [
  {
    path: '/system',
    component: Layouts,
    name: 'System',
    meta: {
      title: '系统管理',
      icon: 'subway:settong',
      isTopMenu: true,
    },
    children: [
      {
        path: 'user/list',
        name: 'UserList',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户列表',
          subMenuOpenKeys: ['/system'],
        },
      },
    ],
  },
];

export default userRoutes;
