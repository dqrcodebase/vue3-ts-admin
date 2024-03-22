import type { AppRouteRecordRaw } from "@/router/type";
import { LAYOUT } from "@/router/constant";

//对外暴露配置路由(常量路由):全部用户都可以访问到的路由
export const constantRoute: Array<AppRouteRecordRaw> = [
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
    redirect: "/home",
    name: "/",
    meta: {},
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

//在菜单栏的常规路由
export const constantMenuRoute: Array<AppRouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: LAYOUT,
    meta: {
      title: "首页",
      hidden: false,
      icon: "HomeFilled",
      hideChildrenInMenu: true,
    },
    children: [
      {
        path: "/home",
        name: "homePage",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
          hidden: false,
          icon: "HomeFilled",
          hideMenu: true,
        },
      },
    ],
  },
  {
    path: "/acl",
    component: () => import("@/layouts/default/index.vue"),
    // component: "/src/layouts/default/index.vue",
    name: "acl",
    meta: {
      title: "权限管理",
      icon: "Lock",
    },
    redirect: "/acl/user",
    children: [
      {
        path: "/acl/user",
        // component: "/src/views/acl/user/index.vue",
        component: () => import("@/views/acl/user/index.vue"),
        name: "user",
        meta: {
          title: "用户管理",
          icon: "User",
        },
      },
      {
        path: "/acl/router",
        // component: "/src/views/acl/router/index.vue",
        component: () => import("@/views/acl/router/index.vue"),
        name: "router",
        meta: {
          title: "路由配置",
          icon: "User",
        },
      },
      {
        path: "/acl/role",
        name: "Role",
        meta: {
          title: "角色管理",
          icon: "UserFilled",
        },
      },
      {
        path: "/acl/permission2",
        // component: () => import("@/views/acl/permission/index.vue"),
        name: "permission2",
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
      icon: "goods",
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
