<template>
  <div class="common-layout">
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
