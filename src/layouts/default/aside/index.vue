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
      @select="handleSelect"
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
import LayoutMenu from "@/layouts/default/menu/index.vue";
import useLayoutStore from "@/store/layout";
import useUserStore from "@/store/user";
import { useRouter } from "vue-router";
const layoutStore = useLayoutStore();
const userStore = useUserStore();
const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log("handleOpen", key, keyPath);
};

const handleClose = (key: string, keyPath: string[]) => {
  console.log("handleClose", key, keyPath);
};
const handleSelect = (
  key: string,
  keyPath: string,
  item: any,
  routeResult: any,
) => {
  console.log("handleSelect", key, keyPath, item, routeResult.value);
  layoutStore.setOpenTabs(routeResult);
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
