<template>
  <el-sub-menu :index="route.path">
    <template #title>
      <el-icon v-if="route.meta?.icon">
        <component :is="route.meta.icon" />
      </el-icon>
      <span>{{ route.meta?.title }}</span>
    </template>
    <template v-for="item in route.children">
      <my-sub-menu-item v-if="item.children" :route="item" :key="item.name" />
      <my-menu-item v-else :route="item" :key="item.path" />
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
import MyMenuItem from './MyMenuItem.vue';
import type { RouteRecordRaw } from 'vue-router';
defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
});
</script>

<style scoped></style>
