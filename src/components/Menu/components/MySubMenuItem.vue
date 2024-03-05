<template>
  <el-sub-menu :index="route.name">
    <template #title>
      <el-icon><component :is="route.meta.icon" /></el-icon>
      <span>{{ route.meta.title }}</span>
    </template>
    <template v-for="item in route.children">
      <my-sub-menu-item v-if="item.children" :route="item" :key="item.name" />
      <el-menu-item :index="item.name" v-else :key="item.path">
        <el-icon><component :is="item.meta.icon" /></el-icon>
        <span>{{ item.meta.title }}</span></el-menu-item
      >
    </template>
  </el-sub-menu>
</template>

<script setup>
const props = defineProps({
  route: {
    type: Object,
    required: true,
  },
});
const { route } = toRefs(props);
console.log("🚀 ~ route:", route);
</script>

<style scoped></style>
