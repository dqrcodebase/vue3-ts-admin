//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute = [
  {
    //登录
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录", //菜单标题
      hidden: true, //代表路由标题在菜单中是否隐藏  true:隐藏 false:不隐藏
      icon: "Promotion", //菜单文字左侧的图标,支持element-plus全部图标
    },
  },
  {
    //登录成功以后展示数据的路由
    path: "/",
    component: () => import("@/components/Layout/index.vue"),
    name: "Home",
    meta: {
      title: "",
      hidden: false,
      icon: "",
    },
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
        },
      },
    ],
  },
  // {
  //   //404
  //   path: "/404",
  //   component: () => import("@/views/404/index.vue"),
  //   name: "404",
  //   meta: {
  //     title: "404",
  //     hidden: true,
  //     icon: "DocumentDelete",
  //   },
  // },
  // {
  //   path: "/screen",
  //   component: () => import("@/views/screen/index.vue"),
  //   name: "Screen",
  //   meta: {
  //     hidden: false,
  //     title: "数据大屏",
  //     icon: "Platform",
  //   },
  // },
];

// //异步路由
export const asyncRoute = [
  {
    path: "/acl",
    // component: () => import("@/components/Layout/index.vue"),
    name: "Acl",
    meta: {
      title: "权限管理",
      icon: "Lock",
    },
    redirect: "/acl/user",
    children: [
      {
        path: "/acl/user",
        // component: () => import("@/views/Acl/User/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        // component: () => import("@/views/acl/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          icon: "UserFilled",
        },
      },
      {
        path: "/acl/permission2",
        // component: () => import("@/views/acl/permission/index.vue"),
        name: "Permission2",
        meta: {
          title: "菜单管理1",
          icon: "Monitor",
        },
        children: [
          {
            path: "/acl/permission/category",
            name: "Category",
            meta: {
              title: "菜单分类",
            },
          },
          {
            path: "/acl/permission/menu",
            name: "MenuList",
            meta: {
              title: "菜单列表",
              icon: "Menu",
            },
          },
        ],
      },
    ],
  },
  {
    path: "/product",
    name: "Product",
    meta: {
      title: "商品管理",
      icon: "Goods",
    },
    redirect: "/product/trademark",
    children: [
      {
        path: "/product/trademark",
        name: "Trademark",
        meta: {
          title: "品牌管理",
          icon: "ShoppingCartFull",
        },
      },
      {
        path: "/product/attr",
        name: "Attr",
        meta: {
          title: "属性管理",
          icon: "ChromeFilled",
        },
      },
      {
        path: "/product/spu",
        name: "Spu",
        meta: {
          title: "SPU管理",
          icon: "Calendar",
        },
      },
      {
        path: "/product/sku",
        name: "Sku",
        meta: {
          title: "SKU管理",
          icon: "Orange",
        },
      },
    ],
  },
];

// //任意路由
// export const anyRoute = {
//   //任意路由
//   path: "/:pathMatch(.*)*",
//   redirect: "/404",
//   name: "Any",
//   meta: {
//     title: "任意路由",
//     hidden: true,
//     icon: "DataLine",
//   },
// };