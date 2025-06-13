<!--
 * @Author: dqr
 * @Date: 2025-05-28 14:33:26
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-12 15:53:32
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
import { MenuItem } from '@/store/modules/menu'

const emit = defineEmits(['collapsed'])


const menuStore = useMenuStore();
const visitedViews = computed(() => menuStore.visitedViews)
const panes = ref<MenuItem[]>(visitedViews.value);


const remove = (targetKey: string) => {
 let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.key === targetKey) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter(pane => pane.key !== targetKey);
  if (panes.value.length) {
    if (lastIndex < 0) {
      lastIndex = 0;
    } 
    menuStore.visitedViews = panes.value
    const pane = panes.value[lastIndex];
    menuStore.setVisitedViews(panes.value)
    if(targetKey === menuStore.activeViewKey) {
    menuStore.tabsViewChange(pane.key)
    }
  }
};

const onEdit = (targetKey: string | MouseEvent, action: string) => {
  if (action === 'remove') {
    remove(targetKey as string);
  }
};





const toggleCollapsed = () => {
  emit('collapsed')

};
const onChangeTabs = (key: string) => {
  menuStore.tabsViewChange(key)
}

</script>
<template>
  <div class="lay-top">
    <span class="pl-[10px] pr-[10px]">
    <MenuUnfoldOutlined  class="trigger" v-if="menuStore.collapsed" @click="toggleCollapsed" />
    <MenuFoldOutlined class="trigger" v-else @click="toggleCollapsed" />
    </span>

    <a-tabs class="flex-1" v-model:activeKey="menuStore.activeViewKey" hide-add type="editable-card" @edit="onEdit"
      @tabClick="onChangeTabs">
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
