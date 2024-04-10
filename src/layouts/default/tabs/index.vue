<template>
  <ul class="admin-tabs-nav">
    <RouterLink
      to="/"
      class="decoration-none"
      @contextmenu.prevent="openMenu({ path: '/home', name: 'home' }, $event)"
    >
      <li
        class="admin-tabs-nav_item mr-5px pl-15px pr-15px pt-8px pb-8px color-222222"
        :class="{ active: isActive({ path: '/home', name: 'home' }) }"
      >
        <span>首页</span>
        <el-icon
          v-if="isActive({ path: '/home', name: 'home' })"
          class="font-18"
        >
          <RefreshRight />
        </el-icon>
      </li>
    </RouterLink>
    <RouterLink
      v-for="item in openTabs"
      :key="item.name"
      :to="item"
      class="decoration-none"
      @contextmenu.prevent="openMenu(item, $event)"
    >
      <li
        class="admin-tabs-nav_item mr-5px pl-15px pr-15px pt-8px pb-8px color-222222"
        :class="{ active: isActive(item) }"
      >
        <span class="flex flex-bc">
          <span>{{ item.meta?.title }}</span>
          <el-icon v-if="isActive(item)" class="font-18">
            <RefreshRight />
          </el-icon>
        </span>
      </li>
    </RouterLink>
  </ul>
</template>
<script setup lang="ts">
import useLayoutStore from '@/store/layout.ts';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import type { AppRouteRecordRaw } from '@/router/type.d.ts';
const layoutStore = useLayoutStore();
const { openTabs } = storeToRefs(layoutStore);
const $route = useRoute();
function isActive(item: AppRouteRecordRaw) {
  console.log('🚀 ~ isActive ~ $route.fullPath:', $route.path);

  return item.path === $route.path;
}
function openMenu(item: AppRouteRecordRaw, event: MouseEvent) {
  console.log('🚀 ~ openMenu ~ item', item, event);
}
</script>

<style lang="scss" scoped>
.admin-tabs-nav {
  display: flex;
  padding: 10px;
  height: 100%;
  overflow-x: auto;
  padding: 10px 10px 0 10px;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  &_item {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.02);
    border: 1px solid rgba(5, 5, 5, 0.06);
    border-bottom: none;
    border-radius: 4px 4px 0 0;
    &.active {
      color: $base-tabbar-active-color;
      background-color: #ffffff;
    }
    &:hover {
      color: $base-tabbar-active-color;
      background-color: #ffffff;
    }
  }
}
</style>
