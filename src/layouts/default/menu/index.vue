<template>
  <MySubMenuItem
    v-if="route.children && !route.meta?.hideChildrenInMenu"
    :route="route"
  />
  <MyMenuItem v-else :route="route" />
</template>

<script setup lang="ts">
import MyMenuItem from "@/layouts/default/menu/components/MyMenuItem.vue";
import MySubMenuItem from "@/layouts/default/menu/components/MySubMenuItem.vue";
import type { RouteRecordRaw } from "vue-router";
defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
});
</script>

<style scoped></style>
