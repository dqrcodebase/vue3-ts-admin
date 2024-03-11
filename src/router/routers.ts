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
    path: "/test",
    component: () => import("layouts/default/index.vue"),
    name: "test",
    meta: {
      title: "测试",
      icon: "Lock",
    },
    children: [
      {
        path: "/test/user",
        component: () => import("@/views/test/user/index.vue"),
        name: "userTest",
        meta: {
          title: "用户测试",
          icon: "test",
        },
      },
    ],
  },
];
