import type { AppRouteRecordRaw } from "../src/router/type.d.ts";

export const createRoutes = (): Array<AppRouteRecordRaw> => {
  return [
    {
      path: "/acl",
      // component: () => import("layout/default/index.vue"),
      component: "/src/layouts/default/index.vue",
      name: "acl",
      meta: {
        title: "权限管理",
        icon: "Lock",
      },
      redirect: "/acl/user",
      children: [
        {
          path: "/acl/user",
          // component: () => import("@/views/acl/user/index.vue"),
          component: "/src/views/acl/user/index.vue",
          name: "user",
          meta: {
            title: "用户管理",
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
};
