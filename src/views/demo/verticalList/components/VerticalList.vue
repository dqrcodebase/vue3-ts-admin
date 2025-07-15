<script setup lang="ts">
interface Props {
  listData: object[];
  slotHeight: number;
  itemRefs: Ref<HTMLDivElement[]>;
}
const props = withDefaults(defineProps<Props>(), {
  listData: () => [],
});
const { listData, slotHeight, itemRefs } = toRefs(props);
const emit = defineEmits(['scrollBottom', 'slotUpdate']);
// 可视区示例
const containerRef = ref<HTMLDivElement>();
// 内容可见区
const contentRef = ref<HTMLDivElement>();
// 可视区数据
const visibleInfo = reactive({
  startIndex: 0, // 起始索引
  endIndex: 0, // 结束索引
  height: 0, // 可视区高度
  count: 5, // 可视区子项个数
});
// 缓冲区比例（缓冲区数据与可视区数据的比例）
const bufferRatio = 1;
// 起始缓冲数量
const aboveCount = computed(() => {
  return Math.min(visibleInfo.startIndex, visibleInfo.count * bufferRatio);
});
// 终止缓冲数量
const belowCount = computed(() => {
  return Math.min(
    listData.value.length - visibleInfo.endIndex,
    visibleInfo.count * bufferRatio,
  );
});
// 可视区内容
const visibleData = computed(() => {
  const start = visibleInfo.startIndex;
  const end = visibleInfo.startIndex + visibleInfo.count;
  return listData.value.slice(start, end);
});
// 内容区需要被撑开的高度
const phantomHeight = ref(0);
onUpdated(() => {
  console.log('444444');

  emit('slotUpdate');
});
onMounted(() => {
  emit('slotUpdate');
});

watch(listData.value, (newVal, oldVal) => {
  visibleInfo.startIndex += 1;
  visibleInfo.endIndex += 1;
});
watch(slotHeight, (newVal, oldVal) => {
  console.log('🚀 ~ watch ~ slotHeight:', slotHeight);
  if (slotHeight.value < containerRef.value!.clientHeight) {
    visibleInfo.count += 1;
    visibleInfo.endIndex = visibleInfo.startIndex + visibleInfo.count;
  } else {
    phantomHeight.value = computedVisualSize(itemRefs.value);
  }
});
watch(itemRefs.value, (newVal, oldVal) => {
  console.log('🚀 ~ watch ~ itemRefs.value:', itemRefs.value);
  phantomHeight.value += itemRefs.value[visibleInfo.endIndex - 1].clientHeight;
});
function scrollEvent(e) {
  const contentHeight = Math.floor(contentRef.value!.clientHeight);
  if (e.target.scrollTop + containerRef.value!.clientHeight >= contentHeight) {
    if (visibleInfo.endIndex < listData.value.length) {
      visibleInfo.startIndex += 1;
      visibleInfo.endIndex += 1;
    } else {
      emit('scrollBottom');
    }
  }
}
// 计算更新可视区子项位置集合
function computedVisualSize(itemRefs: HTMLDivElement[]) {
  let height = 0;
  itemRefs.map((item) => {
    const curHeight = item.clientHeight;
    height += curHeight;
  });
  return height;
}
</script>

<template>
  <!-- 虚拟列表：固定子项高度 -->
  <div id="app">
    <!-- 可视区(container) -->
    <div ref="containerRef" class="container" @scroll="scrollEvent">
      <!-- 内容虚拟撑开区(phantom) -->
      <div class="phantom" :style="{ height: phantomHeight + 'px' }"></div>
      <!-- 内容可见区(content) -->
      <div
        class="content"
        ref="contentRef"
        :style="{ transform: getTransform }"
      >
        <slot ref="slotRef" :visibleData="visibleData"></slot>
        <!-- <div
          v-for="item in visibleData"
          :key="item.index"
          class="content-item"
          ref="itemRefs"
          :id="item.index"
        >
          {{ item.text }}
        </div> -->
      </div>
    </div>
    <!-- <div v-for="item in listData" :key="item.index">{{ item.text }}</div> -->
  </div>
</template>

<style scoped lang="scss">
.container {
  position: relative;
  width: 300px;
  height: 500px;
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
