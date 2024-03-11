<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import useUserStore from "@/store/user";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";
import { AppRouteRecordRaw } from "./router/type";
// const viewsComponent: Record<string, any> = import.meta.glob(
//   "/src/views/**/*.vue",
//   { eager: true },
// );
// const layoutComponent: Record<string, any> = import.meta.glob(
//   "/layouts/default/index.vue",
//   { eager: true },
// );
const userStore = useUserStore();
// const { userRoutes } = storeToRefs(userStore);
// const router = useRouter();
// watch(userRoutes, (newVal) => {
//   formatRoutes(newVal);
// });

// function formatRoutes(newVal) {
//   console.log("🚀 ~ formatRoutes ~ newVal:", newVal);
//   for (let i = 0; i < newVal.length; i++) {
//     if (!newVal[i].component) return;
//     console.log(
//       "🚀 ~ formatRoutes ~ newVal[i].component:",
//       newVal[i].component,
//     );

//     if (newVal[i].children) {
//       const component = layoutComponent[newVal[i].component];
//       if (component && component.default) {
//         newVal[i] = {
//           ...newVal[i],
//           component: component.default,
//         };
//       }
//       router.addRoute(newVal[i]);

//       formatRoutes(newVal[i].children);
//     } else if (newVal[i].component) {
//       const component = viewsComponent[newVal[i].component];

//       if (component && component.default) {
//         newVal[i] = {
//           ...newVal[i],
//           component: component.default,
//         };
//       }
//       router.addRoute(newVal[i]);
//     }
//   }
// }
userStore.reqUserRoutes();
</script>
<style>
#app {
  height: 100vh;
}
</style>
