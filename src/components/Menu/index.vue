<template>
  <MySubMenuItem v-if="route.children" :route="route" />
  <MyMenuItem v-else :route="route" />
</template>

<script setup lang="ts">
import MyMenuItem from "@/components/Menu/components/MyMenuItem.vue";
import MySubMenuItem from "@/components/Menu/components/MySubMenuItem.vue";
import type { RouteRecordRaw } from "vue-router";
defineProps({
  route: {
    type: Object as PropType<RouteRecordRaw>,
    required: true,
  },
});
</script>

<style scoped></style>
