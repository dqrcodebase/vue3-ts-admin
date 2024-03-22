<template>
  <ul class="admin-tabs-nav">
    <li class="admin-tabs-nav_item">
      <span class="mr-10px theme-color">首页</span>
    </li>
    <li class="admin-tabs-nav_item" v-for="item in openTabs" :key="item.name">
      <span class="flex flex-bc">
        <span class="mr-10px">{{ item.meta.title }}</span>
        <el-icon v-if="editableTabsValue === item.name" class="font-18"
          ><RefreshRight
        /></el-icon>
      </span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import useLayoutStore from "@/store/layout";
import { storeToRefs } from "pinia";
const layoutStore = useLayoutStore();
const { openTabs } = storeToRefs(layoutStore);
const editableTabsValue = ref("home");

watch(
  () => editableTabsValue.value,
  (val) => {
    console.log(val);
  },
);
</script>
<style lang="scss" scoped>
.admin-tabs-nav {
  display: flex;
  padding: 10px;
  height: 100%;
  overflow-x: auto;
  &_item {
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    &:hover {
      color: $base-tabbar-active-color;
    }
  }
}
</style>
