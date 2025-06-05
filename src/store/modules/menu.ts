/*
 * @Author: dqr
 * @Date: 2025-05-29 17:53:00
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-05 17:06:47
 * @FilePath: /vue3-ts-admin/src/store/modules/menu.ts
 * @Description: 
 * 
 */
import { defineStore } from 'pinia'
import { menuRoutes } from '@/router/index'
import { setStorage } from '@/utils/auth/index'
interface MenuState {
  menuList: RouterType[]
  collapsed: boolean
  openKeys: (string | number)[]
  preOpenKeys: (string | number)[]
  selectedKeys: (string | number)[]
  visitedViews: object[]
  activeView: string
}

export interface MenuItem {
  key: string;
  title: string;
  children?: MenuItem[];
}



export const useMenuStore = defineStore('menu', {
  state: (): MenuState => ({
    menuList: menuRoutes, // 菜单列表
    collapsed: false, // 菜单是否收起
    openKeys: [], // 菜单展开的key
    preOpenKeys: [], // 之前菜单展开的key
    selectedKeys: [], // 菜单选中的key
    visitedViews: [], //  存储访问过的视图
    activeView: '' // 激活的视图
  }),
  actions: {
    getMenuList(): MenuState['menuList'] {
      return this.menuList
    },
    openView(view: MenuItem) {
      this.setVisitedViews(view)
      this.setActiveView(view.key)

    },
    setVisitedViews(view: MenuItem) {
      this.visitedViews.push(view)
      setStorage('visitedViews', JSON.stringify(this.visitedViews))
    },
    setActiveView(path: string) {
      this.activeView = path
      setStorage('activeView', JSON.stringify(this.visitedViews))
    }
  }
})