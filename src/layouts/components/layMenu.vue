<!--
 * @Author: dqr
 * @Date: 2025-06-04 11:32:09
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-16 17:58:32
 * @FilePath: /vue3-ts-admin/src/layouts/components/layMenu.vue
 * @Description: 
 * 
-->

<script lang="ts" setup>
import { useMenuStore } from '@/store/modules/menu'
import { type MenuItem } from '@/store/modules/menu';



// 注册自身为递归组件
const LayMenu = defineAsyncComponent(() => import('./layMenu.vue'))
interface LayMenuProps {
  info: MenuItem
}

const menuStore = useMenuStore()
const props = defineProps<LayMenuProps>()
const { info } = props
const router = useRouter()
// 这个 computed 确保 info.children 是非空数组才渲染 sub-menu
const hasChildren = computed(() => {
  return Array.isArray(info.children) && info.children.length > 0
})

const handleClick = () => {
  router.push(info.key)
  menuStore.openView(info)

}
</script>
<template>
  <template v-if="hasChildren">
    <a-sub-menu :title="info.title" :key="info.key" :icon="info.icon">
      <template #icon>
        <component :is="info.icon" />
        <i-ant-design-user-outlined />
      </template>
      <i-ant-design-user-outlined />
      <component :is="info.icon"
      <layMenu v-for="item in info.children" :key="item.key" :info="item" />
    </a-sub-menu>
  </template>
  <template v-else>
    <a-menu-item :key="info.key" @click="handleClick" :icon="info.icon">
      {{ info.title }}
    </a-menu-item>
  </template>
</template>
<style lang="less" scoped></style>