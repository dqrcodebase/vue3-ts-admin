<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import useUserStore from "@/store/user";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import type { AppRouteRecordRaw } from "./router/type";
import type { RouteRecordRaw } from "vue-router";

const userStore = useUserStore();
const { userRoutes } = storeToRefs(userStore);
const router = useRouter();
watch(userRoutes, (newVal) => {
  newVal.forEach((route: AppRouteRecordRaw) => {
    router.addRoute(route as RouteRecordRaw);
  });
  console.log("---------", router.getRoutes());
});

userStore.reqUserRoutes();
</script>
<style>
#app {
  height: 100vh;
}
</style>
