/*
 * @Author: dqr
 * @Date: 2025-05-29 17:53:00
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-09 16:11:03
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
  visitedViews: MenuItem[]
  activeView: MenuItem
}

export interface MenuItem {
  key: string;
  title: string;
  children?: MenuItem[];
  icon?: any;
  closable?: boolean;
}

const initVisitedViews: MenuItem[] = [{ key: "/home", title: "首页", closable: false }]
const initActiveView: MenuItem = { key: "/home", title: "首页", closable: false }



export const useMenuStore = defineStore('menu', {
  state: (): MenuState => {

    const initState:MenuState = {
      menuList: menuRoutes, // 菜单列表
      collapsed: false, // 菜单是否收起
      openKeys: [], // 菜单展开的key
      preOpenKeys: [], // 之前菜单展开的key
      selectedKeys: [], // 菜单选中的key
      visitedViews: initVisitedViews, //  存储访问过的视图
      activeView: initActiveView // 激活的视图
    }

    // 持久化状态初始话
    try {
      return {
        ...initState,
        visitedViews: JSON.parse(localStorage.getItem('visitedViews') || JSON.stringify(initVisitedViews)),
        activeView:  JSON.parse(localStorage.getItem('activeView') || JSON.stringify(initActiveView))
      }
    } catch {
      return initState
    }
  },
  actions: {
    getMenuList(): MenuState['menuList'] {
      return this.menuList
    },
    openView(view: MenuItem) {
      this.setVisitedViews(view)
      this.setActiveView(view)

    },
    setVisitedViews(view: MenuItem) {
      const exists = this.visitedViews.some(v => v.key === view.key)
      if (!exists) {
        this.visitedViews.push(view)
        setStorage('visitedViews', JSON.stringify(this.visitedViews))
      }
    },
    setActiveView(view: MenuItem) {
      this.activeView = view
      setStorage('activeView', JSON.stringify(this.activeView))
    }
  }
})