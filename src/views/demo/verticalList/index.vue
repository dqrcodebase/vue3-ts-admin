<script setup>
import VerticalList from './components/VerticalList.vue';
</script>

<template>
  <!-- 虚拟列表：固定子项高度 -->
  <div class="vertical-list">
    <VerticalList></VerticalList>
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 200px;
  height: 300px;
  overflow: auto;
  background-color: aqua;
  -webkit-overflow-scrolling: touch;
}

.content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: yellow;
}

.content-item {
  box-sizing: border-box;
  color: #333;
  text-align: center;
  border: 1px solid #ddd;
}
</style>
