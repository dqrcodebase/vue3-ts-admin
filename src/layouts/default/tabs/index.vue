<template>
  <ul class="admin-tabs-nav">
    <li class="admin-tabs-nav_item mr-5px pl-15px pr-15px pt-8px pb-8px">
      <span>首页</span>
    </li>
    <li class="admin-tabs-nav_item mr-5px pl-15px pr-15px pt-8px pb-8px" v-for="item in openTabs"
      :key="item.name">
      <span class="flex flex-bc">
        <span>{{ item.meta.title }}</span>
        <el-icon v-if="editableTabsValue === item.name" class="font-18">
          <RefreshRight />
        </el-icon>
      </span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import useLayoutStore from "@/store/layout.ts";
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
    &:hover {
      color: $base-tabbar-active-color;
      background-color: #ffffff;
    }
  }
}</style>
