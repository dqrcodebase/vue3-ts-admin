<!--
 * @Author: dqr
 * @Date: 2025-05-28 11:33:42
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-19 16:46:48
 * @FilePath: /vue3-ts-admin/src/layouts/components/layLeft.vue
 * @Description: 
 * 
-->
<script lang="ts" setup>
import { useMenuStore } from '@/store/modules/menu';
import { type MenuItem } from '@/store/modules/menu';
import layMenu from './layMenu.vue';
import { menuRoutes } from '@/router/index';

const menuStore = useMenuStore();
menuStore.menuList = menuRoutes;
const menuList = computed(() => menuStore.menuList);
const renderMenu = (
  routes: RouterType[],
  basePath: string = '',
  subMenuOpenKeys: string[] = [],
): MenuItem[] => {
  return routes
    .filter((route) => !route.meta?.isHide)
    .map((route) => {
      // 判断path是否是绝对路径，
      const fullPath = route.path.startsWith('/')
        ? route.path
        : `${basePath}/${route.path}`.replace(/\/+/g, '/');
      const key = [];
      if (route.meta.isTopMenu) subMenuOpenKeys = [];
      if (route.children) subMenuOpenKeys.push(route.path);
      key.push(...subMenuOpenKeys);
      const item: MenuItem = {
        path: fullPath,
        subMenuOpenKeys: key,
        title: route.meta.title,
        closable: route.meta.closable,
        icon: route.meta?.icon || undefined,
        children: route.children
          ? renderMenu(route.children, fullPath, subMenuOpenKeys)
          : undefined,
      };
      return item;
    });
};
menuList.value.forEach((item) => {
  if (item.meta?.isTopMenu) {
    menuStore.rootSubmenuKeys.push(item.path);
  }
});
const menuItems = computed(() => renderMenu(menuList.value));
watch(
  () => menuStore.openKeys,
  (_val, oldVal) => {
    menuStore.preOpenKeys = oldVal;
  },
);
const onOpenChange = (openKeys: string[]): void => {
  const latestOpenKey = openKeys.find(
    (key) => menuStore.openKeys.indexOf(key) === -1,
  );
  if (menuStore.rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
    menuStore.openKeys = openKeys;
  } else {
    menuStore.openKeys = latestOpenKey ? [latestOpenKey as string] : [];
  }
};
</script>
<template>
  <div class="lay-left">
    <div class="logo-wrap">
      <img :width="50" src="@/assets/image/logo.png" alt="" />
      <!-- <span v-if="!menuStore.collapsed" class="project-name">
        vue3-ts-admin
      </span> -->
    </div>
    <a-menu
      mode="inline"
      theme="dark"
      @openChange="onOpenChange"
      :open-keys="menuStore.openKeys"
      v-model:selectedKeys="menuStore.selectedKeys"
    >
      <layMenu v-for="child in menuItems" :key="child.path" :info="child" />
    </a-menu>
  </div>
</template>
<style lang="scss" scoped>
.logo-wrap {
  padding: 8px 12px;
  line-height: 35px;
}

.is-collapsed {
  width: 80px;
}

.no-collapsed {
  width: 256px;
}

.lay-left {
  background-color: var(--menu-bg-color);
}

.project-name {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 600;
  color: #fff;
}
</style>
