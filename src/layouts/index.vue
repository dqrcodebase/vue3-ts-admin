<!--
 * @Author: dqr
 * @Date: 2025-05-28 11:32:52
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-11 17:28:18
 * @FilePath: /vue3-ts-admin/src/layouts/index.vue
 * @Description: 
 * 
-->
<script setup lang="ts">
import layLeft from './components/layLeft.vue';
import layTop from './components/layTop.vue';
import layContent from './components/layContent.vue';
import { useMenuStore } from '@/store/modules/menu';
import type { CSSProperties } from 'vue';
const menuStore = useMenuStore();

const headerStyle: CSSProperties = {
  backgroundColor: '#ffffff',
  paddingLeft: '0',
  paddingRight: '0',
  height: 'auto',
};

const siderCollapsehandle = function () {
  console.log('siderCollapsehandle');
  // menuStore.setSiderCollapse(!menuStore.siderCollapse);
};
const onCollapsed = function () {

 menuStore.collapsed = !menuStore.collapsed;
  menuStore.openKeys = menuStore.collapsed ? [] : menuStore.preOpenKeys;
};  
</script>

<template>
   <a-layout class="h-full" @collapse="siderCollapsehandle">
      <a-layout-sider v-model:collapsed="menuStore.collapsed" :trigger="null" width='256px' @collapse="siderCollapsehandle" collapsible>
        <layLeft class="flex flex-col h-full"/>
      </a-layout-sider>
      <a-layout>
        <a-layout-header :style="headerStyle" > <layTop  @collapsed="onCollapsed"/></a-layout-header>
        <a-layout-content class="flex flex-1 "><layContent class="flex flex-1 overflow-hidden"/></a-layout-content>
      </a-layout>
    </a-layout>
</template>

<style scoped lang="scss">
.common-layout {
  background-color: #eee;
}
</style>
