<template>
  <MySubMenuItem v-if="route.children" :route="route" />
  <MyMenuItem v-else />
</template>

<script setup>
import MyMenuItem from "@/components/Menu/components/MyMenuItem.vue";
import MySubMenuItem from "@/components/Menu/components/MySubMenuItem.vue";
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
