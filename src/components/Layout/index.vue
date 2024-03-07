<template>
  <div class="admin-layout">
    <el-container>
      <AdminAside></AdminAside>
      <el-container>
        <el-header>
          <AdminHeader></AdminHeader>
        </el-header>
        <el-main>
          <AdminMain></AdminMain>
        </el-main>
      </el-container>
    </el-container>
    <AdminFooter>Footer</AdminFooter>
  </div>
</template>
<script setup>
import AdminHeader from "./AdminHeader.vue";
import AdminAside from "./AdminAside.vue";
import AdminMain from "./AdminMain.vue";
import AdminFooter from "./AdminFooter.vue";
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
