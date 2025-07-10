<script lang="ts" setup>
import { useMenuStore } from '@/store/modules/menu';
import { MenuItem } from '@/store/modules/menu';
import type { MenuProps } from 'ant-design-vue';
import {
  clearLocalStorage,
  clearSessionStorage,
  clearToken,
} from '@/utils/auth/index';
const router = useRouter();
const emit = defineEmits(['collapsed']);
const route = useRoute();
const menuStore = useMenuStore();
const visitedViews = computed(() => menuStore.visitedViews);
const panes = ref<MenuItem[]>(visitedViews.value);

let remove = (targetPath: string) => {
  let lastIndex = 0;
  panes.value.forEach((pane, i) => {
    if (pane.path === targetPath) {
      lastIndex = i - 1;
    }
  });
  panes.value = panes.value.filter((pane) => pane.path !== targetPath);
  if (panes.value.length) {
    if (lastIndex < 0) {
      lastIndex = 0;
    }
    menuStore.visitedViews = panes.value;
    const pane = panes.value[lastIndex];
    menuStore.setVisitedViews(panes.value);
    if (targetPath === menuStore.activeViewKey) {
      router.push({ path: pane.path });
      // menuStore.tabsViewChange(pane.path);
    }
  }
};

const onEdit = (targetPath: string | MouseEvent, action: string) => {
  if (action === 'remove') {
    remove(targetPath as string);
  }
};

const toggleCollapsed = () => {
  emit('collapsed');
};
const onChangeTabs = (path: string) => {
  router.push({ path: path });
  // menuStore.tabsViewChange(path);
};

const visible = ref(false);
const handleMenuClick: MenuProps['onClick'] = (e) => {
  if (e.key === '3') {
    clearLocalStorage();
    clearSessionStorage();
    clearToken();
    // 拼接地址需要转译一下
    window.location.href = '/login?redirect=' + encodeURIComponent(route.path);
  }
};
</script>
<template>
  <div class="lay-top">
    <span class="pr-[10px]">
      <Iconify
        icon="foundation:indent-more"
        width="24"
        height="24"
        v-if="menuStore.collapsed"
        @click="toggleCollapsed"
      />
      <Iconify
        icon="foundation:indent-less"
        width="24"
        height="24"
        v-else
        @click="toggleCollapsed"
      />
    </span>
    <a-tabs
      class="flex-1"
      v-model:activeKey="menuStore.activeViewKey"
      hide-add
      type="editable-card"
      @edit="onEdit"
      @tabClick="onChangeTabs"
    >
      <a-tab-pane
        v-for="pane in panes"
        :key="pane.path"
        :tab="pane.title"
        :closable="pane.closable"
      ></a-tab-pane>
    </a-tabs>
    <div class="ml-[12px]">
      <a-dropdown v-model:open="visible">
        <a-avatar class="cursor-pointer">
          <template #icon>
            <img
              src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg3.doubanio.com%2Fview%2Fgroup_topic%2Fl%2Fpublic%2Fp671761172.jpg&refer=http%3A%2F%2Fimg3.doubanio.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1753411424&t=425c09418b152ffa5fda0043a08206da"
              alt=""
            />
          </template>
        </a-avatar>
        <template #overlay>
          <a-menu @click="handleMenuClick">
            <a-menu-item key="1">首页</a-menu-item>
            <a-menu-item key="2">用户中心</a-menu-item>
            <a-menu-item key="3">退出登录</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </div>
</template>

<style scoped lang="scss">
.lay-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  line-height: 1;
  background-color: #fff;

  :deep(.ant-tabs-nav) {
    margin: 0;
  }

  .cursor-pointer {
    line-height: 34px;
  }
}
</style>
