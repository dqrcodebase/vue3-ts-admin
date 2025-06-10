<!--
 * @Author: dqr
 * @Date: 2025-05-30 16:23:11
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-10 15:33:23
 * @FilePath: /vue3-ts-admin/src/layouts/components/layContent.vue
 * @Description: 
 * 
-->
<script setup>
</script>

<template>
  <div class="lay-content">
    <div class="flex flex-1 overflow-auto">
    <RouterView class="flex-1"></RouterView>

    </div>
  </div>
</template>

<style scoped lang="scss">
.lay-content {
  background-color: #fff;
  border-radius: 8px;
  margin: 10px;
}
</style>
