<!--
 * @Author: dqr
 * @Date: 2025-05-28 14:33:26
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 16:18:33
 * @FilePath: /vue3-ts-admin/src/layouts/components/layTop.vue
 * @Description: 
 * 
-->

<script lang="ts" setup>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined
} from '@ant-design/icons-vue';
import { useMenuStore } from '@/store/modules/menu';
const menuStore = useMenuStore();
const panes = ref<{ title: string; content: string; key: string; closable?: boolean }[]>([
  { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
  { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
  { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
]);

const activeKey = ref(panes.value[0].key);

const newTabIndex = ref(0);

const add = () => {
  activeKey.value = `newTab${++newTabIndex.value}`;
  panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
};

const remove = (targetKey: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length && activeKey.value === targetKey) {
    if (lastIndex >= 0) {
      activeKey.value = panes.value[lastIndex].key;
    } else {
      activeKey.value = panes.value[0].key;
    }
  }
};

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === 'add') {
    add();
  } else {
    remove(targetKey as string);
  }
};





const toggleCollapsed = () => {
  menuStore.collapsed = !menuStore.collapsed;
  menuStore.openKeys = menuStore.collapsed ? [] : menuStore.preOpenKeys;
};

</script>
<template>
  <div class="lay-top">
    <a-button class="mr-[12px]" type="primary" @click="toggleCollapsed">
      <MenuUnfoldOutlined v-if="menuStore.collapsed" />
      <MenuFoldOutlined v-else />
    </a-button>
    <a-tabs class="flex-1" v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      </a-tab-pane>
    </a-tabs>
    <div class="ml-[12px]"> <a-avatar style="background-color: #87d068">
        <template #icon>
          <UserOutlined />
        </template>
      </a-avatar></div>
  </div>
</template>

<style scoped lang="scss">
.lay-top {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px;
  background-color: #fff;
  :deep(.ant-tabs-nav) {
    margin: 0;
  }
}
</style>
