<template>
  <div class="admin-layout">
    <el-container>
      <el-aside>
        <AdminAside></AdminAside>
      </el-aside>
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
<style scoped>
.admin-layout {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
