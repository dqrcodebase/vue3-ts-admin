<template>
  <el-menu-item
    :index="route.path"
    :key="route.path"
    @click="handleMenuItemClick(route)"
  >
    <el-icon v-if="route.meta?.icon"
      ><component :is="route.meta.icon"
    /></el-icon>
    <span>{{ route.meta?.title }}</span></el-menu-item
  >
</template>

<script lang="ts" setup>
import type { RouteRecordRaw } from "vue-router";
defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
});
const handleMenuItemClick = (item: RouteRecordRaw) => {
  console.log("🚀 ~ handleMenuItemClick ~ item:", item);
  const { isExt, extOpenMode } = item.meta || {};
  if (isExt && extOpenMode !== 2) {
    window.open(item.path);
  }
};
</script>

<style scoped></style>
