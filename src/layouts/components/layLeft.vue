<!--
 * @Author: dqr
 * @Date: 2025-05-28 11:33:42
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-09 17:49:57
 * @FilePath: /vue3-ts-admin/src/layouts/components/layLeft.vue
 * @Description: 
 * 
-->
<script lang="ts" setup>
import { useMenuStore } from '@/store/modules/menu';
import { type MenuItem } from '@/store/modules/menu';
import layMenu from './layMenu.vue';



const menuStore = useMenuStore();
const menuList = computed(() => menuStore.menuList);
const renderMenu = (
  routes: RouterType[],
  basePath = ''
): MenuItem[] => {
  return routes
    .filter(route => !route.meta?.isHide)
    .map((route) => {
      const fullPath = `${basePath}/${route.path}`.replace(/\/+/g, '/')
      const item: MenuItem = {
        key: fullPath,
        title: route.meta.title,
        closable: route.meta.closable
      }
      if (route.children?.length) {
        item.children = renderMenu(route.children, fullPath)
      }
      return item
    })
}

const menuItems = computed(() => renderMenu(menuList.value));
watch(
  () => menuStore.openKeys,
  (_val, oldVal) => {
    menuStore.preOpenKeys = oldVal;
  },
);
const onOpenChange = (openKeys: string[]): void => {
  const latestOpenKey = openKeys.find(key => menuStore.openKeys.indexOf(key) === -1);
  menuStore.openKeys = latestOpenKey ? [latestOpenKey] : []
};
</script>
<template>
  <div class="lay-left" >
    <div class="logo-wrap">
      <img :width="50" src="@/assets/image/logo.png" alt="" />
      <span v-if="!menuStore.collapsed" class="project-name">vue3-ts-admin</span>
    </div>
    <a-menu mode="inline" theme="dark" @openChange="onOpenChange" :open-keys="menuStore.openKeys"
       v-model:selectedKeys="menuStore.selectedKeys">
      <layMenu v-for="child in menuItems" :key="child.key" :info="child" />
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
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  padding-left: 10px;
}
</style>
