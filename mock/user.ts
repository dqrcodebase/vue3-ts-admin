//createUserList:次函数执行会返回一个数组,数组里面包含两个用户信息
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ];
}
function createRoutes() {
  return [
    {
      path: '/acl',
      component: () => import('layout/default/index.vue'),
      name: 'acl',
      meta: {
        title: '权限管理',
        icon: 'Lock',
      },
      redirect: '/acl/user',
      children: [
        {
          path: '/acl/user',
          component: () => import('@/views/acl/user/index.vue'),
          name: 'user',
          meta: {
            title: '用户管理',
            icon: 'User',
          },
        },
        {
          path: '/acl/role',
          // component: () => import("@/views/acl/role/index.vue"),
          name: 'Role',
          meta: {
            title: '角色管理',
            icon: 'UserFilled',
          },
        },
        {
          path: '/acl/permission2',
          // component: () => import("@/views/acl/permission/index.vue"),
          name: 'permission2',
          meta: {
            title: '菜单管理1',
            icon: 'Monitor',
          },
          children: [
            {
              path: '/acl/permission/category',
              name: 'Category',
              meta: {
                title: '菜单分类',
              },
            },
            {
              path: '/acl/permission/menu',
              name: 'MenuList',
              meta: {
                title: '菜单列表',
                icon: 'Menu',
              },
            },
          ],
        },
      ],
    },
    {
      path: '/product',
      name: 'Product',
      meta: {
        title: '商品管理',
        icon: 'goods',
      },
      redirect: '/product/trademark',
      children: [
        {
          path: '/product/trademark',
          name: 'Trademark',
          meta: {
            title: '品牌管理',
            icon: 'ShoppingCartFull',
          },
        },
        {
          path: '/product/attr',
          name: 'Attr',
          meta: {
            title: '属性管理',
            icon: 'ChromeFilled',
          },
        },
        {
          path: '/product/spu',
          name: 'Spu',
          meta: {
            title: 'SPU管理',
            icon: 'Calendar',
          },
        },
        {
          path: '/product/sku',
          name: 'Sku',
          meta: {
            title: 'SKU管理',
            icon: 'Orange',
          },
        },
      ],
    },
  ];
}
//对外暴露一个数组:数组里面包含两个接口
//登录假的接口
//获取用户信息的假的接口
export default [
  // 用户登录接口
  {
    url: '/api/user/login', //请求地址
    method: 'post', //请求方式
    response: ({ body }) => {
      //获取请求体携带过来的用户名与密码
      const { username, password } = body;
      //调用获取用户信息函数,用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      );
      //没有用户返回失败信息
      if (!checkUser) {
        return { code: 9999, data: { message: '账号或者密码不正确' } };
      }
      //如果有返回成功信息
      const { token } = checkUser;
      return { code: 200, data: { token } };
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      //获取请求头携带token
      const token = request.headers.token;
      //查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token);
      //没有返回失败的信息
      if (!checkUser) {
        return { code: 201, data: { message: '获取用户信息失败' } };
      }
      //如果有返回成功信息
      return { code: 200, data: { checkUser } };
    },
  },
  {
    url: '/api/user/routes',
    method: 'get',
    response: (request) => {
      //获取请求头携带token
      const token = request.headers.token;
      console.log('🚀 ~ token:', token);
      if (!token) return { code: 200, data: { message: '获取用户信息失败' } };
      return { code: 200, data: createRoutes() };
    },
  },
];
