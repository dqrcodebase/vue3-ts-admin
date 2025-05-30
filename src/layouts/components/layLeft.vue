<!--
 * @Author: dqr
 * @Date: 2025-05-28 11:33:42
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 09:35:28
 * @FilePath: /vue3-ts-admin/src/layouts/components/layLeft.vue
 * @Description: 
 * 
-->
 <script lang="ts" setup>
import {
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
import { useMenuStore } from '@/store/modules/menu';
const menuStore = useMenuStore();
const items = reactive([
  {
    key: '1',
    icon: () => h(PieChartOutlined),
    label: 'Option 1',
    title: 'Option 1',
  },
  {
    key: '2',
    icon: () => h(DesktopOutlined),
    label: 'Option 2',
    title: 'Option 2',
  },
  {
    key: '3',
    icon: () => h(InboxOutlined),
    label: 'Option 3',
    title: 'Option 3',
  },
  {
    key: 'sub1',
    icon: () => h(MailOutlined),
    label: 'Navigation One',
    title: 'Navigation One',
    children: [
      {
        key: '5',
        label: 'Option 5',
        title: 'Option 5',
      },
      {
        key: '6',
        label: 'Option 6',
        title: 'Option 6',
      },
      {
        key: '7',
        label: 'Option 7',
        title: 'Option 7',
      },
      {
        key: '8',
        label: 'Option 8',
        title: 'Option 8',
      },
    ],
  },
  {
    key: 'sub2',
    icon: () => h(AppstoreOutlined),
    label: 'Navigation Two',
    title: 'Navigation Two',
    children: [
      {
        key: '9',
        label: 'Option 9',
        title: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
        title: 'Option 10',
      },
      {
        key: 'sub3',
        label: 'Submenu',
        title: 'Submenu',
        children: [
          {
            key: '11',
            label: 'Option 11',
            title: 'Option 11',
          },
          {
            key: '12',
            label: 'Option 12',
            title: 'Option 12',
          },
        ],
      },
    ],
  },
]);
watch(
  () => menuStore.openKeys,
  (_val, oldVal) => {
    menuStore.preOpenKeys = oldVal;
  },
);

</script>
<template>
  <div class="lay-left" :class="menuStore.collapsed ? 'is-collapsed' : 'no-collapsed'">
    <div class="logo-wrap">
     <img :width="50" src="@/assets/image/logo.png" alt=""></img>
     <span v-if="!menuStore.collapsed" class="project-name">vue3-ts-admin</span>
    </div>
    <a-menu
      class="flex-1"
      v-model:openKeys="menuStore.openKeys"
      v-model:selectedKeys="menuStore.selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="menuStore.collapsed"
      :items="items"
    ></a-menu>
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


