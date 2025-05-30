<!--
 * @Author: dqr
 * @Date: 2025-05-28 11:32:52
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 16:24:39
 * @FilePath: /vue3-ts-admin/src/layouts/index.vue
 * @Description: 
 * 
-->
<script setup>
import layLeft from './components/layLeft.vue';
import layTop from './components/layTop.vue';
import layContent from './components/layContent.vue';
</script>

<template>
  <div class="common-layout flex w-full h-full">
    <layLeft class="flex flex-col h-full"/>
    <div class="flex-1 h-full flex flex-col">
      <layTop />
      <layContent/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-layout {
  background-color: #eee;
}
</style>
