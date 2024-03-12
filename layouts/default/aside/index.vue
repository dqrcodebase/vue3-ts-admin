<template>
  <div class="admin-aside">
    <el-menu
      class="el-menu-vertical-demo"
      :active-text-color="$globalStyle.baseMenuActiveColor"
      :background-color="$globalStyle.baseMenuBackground"
      :text-color="$globalStyle.baseMenuColor"
      :collapse="layoutStore.getIsCollapse"
      :router="true"
      @open="handleOpen"
      @close="handleClose"
    >
      <LayoutMenu
        v-for="item in userStore.userRoutes"
        :route="item"
        :key="item.name"
      />
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import LayoutMenu from "layouts/default/menu/index.vue";
import useLayoutStore from "@/store/layout";
import useUserStore from "@/store/user";
const layoutStore = useLayoutStore();
const userStore = useUserStore();
userStore.reqUserRoutes();
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
  .el-menu {
    border: 0;
    .el-menu-item {
      & > span {
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: $base-menu-width;
  }
}
</style>
