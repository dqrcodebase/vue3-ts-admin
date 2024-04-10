<template>
  <div aria-label="A complete example of page header">
    <div class="flex flex-bc p-10px" @click="layoutStore.setIsCollapse">
      <div class="admin-header-collapsed-button">
        <el-icon v-if="!layoutStore.getIsCollapse"><Fold /></el-icon>
        <el-icon v-else><Expand /></el-icon>
      </div>
      <div>
        <el-avatar
          class="mr-3"
          :size="32"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useLayoutStore from '@/store/layout';
const layoutStore = useLayoutStore();
</script>
