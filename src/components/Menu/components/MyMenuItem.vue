<template>
  <el-menu-item :index="route.path" :key="route.path">
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
</script>

<style scoped></style>
