<template>
  <div class="admin-aside">
    <el-menu
      active-text-color="#ffd04b"
      :background-color="$globalStyle.baseMenuBackground"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      :collapse="layoutStore.getIsCollapse"
      @open="handleOpen"
      @close="handleClose"
    >
      <Menu v-for="item in asyncRoute" :route="item" />
      <!-- <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span
          >Navigator Two大房间氨基酸发链接sad李逵负荆上岛咖啡久啊束带结发</span
        >
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <span>Navigator 333</span>
      </el-menu-item>
      <el-sub-menu
        v-for="item in asyncRoute"
        :key="item.name"
        :index="item.name"
      >
        <template #title>
          <el-icon><location /></el-icon>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-sub-menu> -->
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import Menu from "@/components/Menu/index.vue";
import useLayoutStore from "@/store/layout";
import { asyncRoute } from "@/router/routers";

console.log("🚀 ~ asyncRoutes:", asyncRoute);
const layoutStore = useLayoutStore();
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped lang="scss">
.admin-aside {
  background-color: #001529;
  height: 100%;
  max-width: $base-menu-width;
}
.el-menu {
  border: 0;
  .el-menu-item {
    & > span {
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
