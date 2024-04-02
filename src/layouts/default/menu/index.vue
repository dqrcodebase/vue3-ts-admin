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
import type { AppRouteRecordRaw } from "@/router/types";
defineProps({
  route: {
    type: Object as PropType<AppRouteRecordRaw>,
    required: true,
  },
});
</script>

<style scoped></style>
