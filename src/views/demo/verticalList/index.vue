<script setup>
import VerticalList from './components/VerticalList.vue';
import { faker } from 'https://esm.sh/@faker-js/faker';

const defaultSlotHeight = ref(0);
const listData = ref(
  new Array(20)
    .fill({})
    .map((item, index) => ({ index, text: faker.lorem.sentences() })),
);
const slotRef = ref(null);
const slotHeight = ref(0);
const itemRefs = ref(null);

onMounted(() => {
  defaultSlotHeight.value = slotRef.value.clientHeight;
});
onUpdated(() => {
  console.log('33333');
});

function scrollBottom(e) {
  listData.value.push(
    ...new Array(5).fill({}).map((item, index) => ({
      index: listData.value.length + index,
      text: faker.lorem.sentences(),
    })),
  );
}

function slotUpdate() {
  slotHeight.value = slotRef.value.clientHeight;
}
</script>

<template>
  <!-- 虚拟列表：固定子项高度 -->
  <div class="vertical-list">
    <!-- <div v-for="item in listData" :key="item.index">{{ item.text }}</div> -->
    <VerticalList
      :listData="listData"
      :slotHeight="slotHeight"
      :itemRefs="itemRefs"
      @scrollBottom="scrollBottom"
      @slotUpdate="slotUpdate"
    >
      <template #default="{ visibleData }">
        <div ref="slotRef">
          <div
            v-for="item in visibleData"
            :key="item.index"
            class="content-item"
            ref="itemRefs"
            :id="item.index"
          >
            {{ item.text }}
          </div>
        </div>
      </template>
    </VerticalList>
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
