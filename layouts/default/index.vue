<template>
  <div class="admin-layout">
    <el-container>
      <LayoutAside></LayoutAside>
      <el-container>
        <el-header>
          <LayoutHeader></LayoutHeader>
        </el-header>
        <el-main>
          <LayoutContent></LayoutContent>
        </el-main>
      </el-container>
    </el-container>
    <LayoutFooter>Footer</LayoutFooter>
  </div>
</template>
<script setup>
import LayoutHeader from "layouts/default/header/index.vue";
import LayoutAside from "layouts/default/aside/index.vue";
import LayoutContent from "layouts/default/content/index.vue";
import LayoutFooter from "layouts/default/footer/index.vue";
</script>
<style scoped lang="scss">
.admin-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .el-header {
    height: auto;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.09);
  }
}
</style>
