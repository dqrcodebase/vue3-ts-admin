<!--
 * @Author: dqr
 * @Date: 2025-11-06 15:00:07
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-12-01 15:41:42
 * @FilePath: /vue3-ts-admin/src/views/demo/verticalList/index.vue
 * @Description: 
 * 
-->
<template>
  <div style="height: 100%; width: 100%">
    <VirtualList :listData="data" :itemSize="50" />
  </div>
</template>

<script setup>
import VirtualList from "./components/VerticalList.vue";
import { faker } from "@faker-js/faker";
import { ref } from "vue";

const data = ref([]);
for (let i = 0; i < 1000; i++) {
  data.value.push({
    index: i,
    value: faker.lorem.sentences(),
  });
}
</script>

<style>
html {
  height: 100%;
}
body {
  height: 100%;
  margin: 0;
}
#app {
  height: 100%;
}
</style>
