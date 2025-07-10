<script setup>
import VerticalScroll from './components/VerticalScroll.vue';

const verticalScrollRef = ref(null);
const listData = Array.from({ length: 10000 }, (_, i) => ({
  id: Date.now() + i + 1,
  name: `Vue3.0无缝滚动展示数据第${i + 1}条`,
}));
const list = ref(listData);
let num = 0;
setTimeout(() => {
  const data = {
    id: Date.now(),
    name: `新增¥${num}`,
  };
  list.value.push(data);
}, 1000);

const open = ref(false);

const showModal = () => {
  open.value = !open.value;
};

const handleOk = (e) => {
  console.log(e);
  open.value = false;
};
</script>

<template>
  <div>
    <div>
      <a-button type="primary" @click="showModal">Open Modal</a-button>
      <div v-show="open" title="Basic Modal">
        <p v-for="item in listData" :key="item.id">{{ item.name }}</p>
      </div>
    </div>
    <div style="margin-top: 30px">
      <h2>单组件使用</h2>
    </div>
    <el-row justify="space-evenly" style="margin-top: 30px">
      <el-col :span="6">
        <el-card header="向上" style="text-align: center">
          <div class="vertical-scoll">
            <VerticalScroll :list="list" ref="verticalScrollRef">
              <template v-slot="{ data }">
                <span style="display: block; width: 100%; line-height: 30px">
                  <template v-if="data.id % 2 === 0">
                    <div>{{ data.name }}</div>
                  </template>
                  <template v-else>
                    <div>{{ data.name }}</div>
                    <div>{{ data.name }}</div>
                  </template>
                </span>
              </template>
            </VerticalScroll>
          </div>
        </el-card>
      </el-col>
      <!-- <el-col :span="6">
        <el-card header="向下" style="text-align: center">
          <div class="vertical-scoll">
            <VerticalScroll :list="list" direction="down">
              <template v-slot="{ data }">
                <span style="width: 100%; display: block; line-height: 30px">
                  <template v-if="data.id % 2 === 0">
                    <div>{{ data.name }}</div>
                  </template>
                  <template v-else>
                    <div>{{ data.name }}</div>
                    <div>{{ data.name }}</div>
                  </template>
                </span>
              </template>
            </VerticalScroll>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card header="向左">
          <div class="horizonta-scoll">
            <HorizontalScroll :list="list" style="display: flex">
              <template v-slot="{ data }">
                <div class="vertical-text">
                  {{ data.name }}
                </div>
              </template>
            </HorizontalScroll>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card header="向右">
          <div class="horizonta-scoll">
            <HorizontalScroll :list="list" style="display: flex">
              <template v-slot="{ data }">
                <div class="vertical-text">
                  {{ data.name }}
                </div>
              </template>
            </HorizontalScroll>
          </div>
        </el-card>
      </el-col> -->
    </el-row>
    <div style="margin-top: 30px">
      <h2>一个组件使用</h2>
    </div>
    <!-- <el-row justify="space-evenly">
      <el-col :span="6">
        <el-card header="向上" style="text-align: center">
          <div class="vertical-scoll">
            <vue3-seamless-scroll :list="list">
              <template v-slot="{ data }">
                <span style="width: 100%; display: block; line-height: 30px">
                  <template v-if="data.id % 2 === 0">
                    <div>{{ data.name }}</div>
                  </template>
                  <template v-else>
                    <div>{{ data.name }}</div>
                    <div>{{ data.name }}</div>
                  </template>
                </span>
              </template>
            </vue3-seamless-scroll>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card header="向下" style="text-align: center">
          <div class="vertical-scoll">
            <vue3-seamless-scroll :list="list" direction="down">
              <template v-slot="{ data }">
                <span style="width: 100%; display: block; line-height: 30px">
                  <template v-if="data.id % 2 === 0">
                    <div>{{ data.name }}</div>
                  </template>
                  <template v-else>
                    <div>{{ data.name }}</div>
                    <div>{{ data.name }}</div>
                  </template>
                </span>
              </template>
            </vue3-seamless-scroll>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card header="向左" style="text-align: center">
          <div class="horizonta-scoll">
            <vue3-seamless-scroll
              :list="list"
              direction="left"
              style="display: flex"
            >
              <template v-slot="{ data }">
                <div class="vertical-text">
                  {{ data.name }}
                </div>
              </template>
            </vue3-seamless-scroll>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card header="向右" style="text-align: center">
          <div class="horizonta-scoll">
            <vue3-seamless-scroll
              :list="list"
              direction="right"
              style="display: flex"
            >
              <template v-slot="{ data }">
                <div class="vertical-text">
                  {{ data.name }}
                </div>
              </template>
            </vue3-seamless-scroll>
          </div>
        </el-card>
      </el-col>
    </el-row> -->
  </div>
</template>

<style scoped lang="scss"></style>
