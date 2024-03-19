<template>
  <div>
    <el-tabs v-model="editableTabsValue" type="card">
      <el-tab-pane label="首页" name="home">
        <template #label>
          <el-dropdown trigger="contextmenu">
            <span class="flex flex-bc">
              <span class="mr-10px theme-color">首页</span>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tab-pane>
      <el-tab-pane
        v-for="item in openTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
        closable
      >
        <template #label>
          <el-dropdown trigger="contextmenu">
            <span class="flex flex-bc">
              <span class="mr-10px">{{ item.meta.title }}</span>
              <el-icon v-if="editableTabsValue === item.name" class="font-18"
                ><RefreshRight
              /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck"
                  >Action 5</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-tab-pane>
    </el-tabs>
    <RouterView />
  </div>
</template>
<script setup lang="ts">
import {
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from "@element-plus/icons-vue";
import useLayoutStore from "@/store/layout";
import { storeToRefs } from "pinia";
const layoutStore = useLayoutStore();
const { openTabs } = storeToRefs(layoutStore);

const editableTabsValue = ref("home");

watch(
  () => editableTabsValue.value,
  (val) => {
    console.log(val);
  },
);
</script>
