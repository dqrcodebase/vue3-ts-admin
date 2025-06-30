/*
 * @Author: dqr
 * @Date: 2025-05-29 17:53:00
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-20 17:35:54
 * @FilePath: /vue3-ts-admin/src/store/modules/menu.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia';
import { setStorage, clearStorage } from '@/utils/auth/index';
import { store } from '../index';

interface MenuState {
  rootSubmenuKeys: string[];
  menuList: RouterType[];
  collapsed: boolean;
  openKeys: (string | never)[];
  preOpenKeys: (string | never)[];
  selectedKeys: (string | never)[];
  visitedViews: MenuItem[];
  activeViewKey: string;
}

export interface MenuItem {
  path: string;
  menuKey: Array<string>;
  title: string;
  children?: MenuItem[];
  icon?: any;
  closable?: boolean;
  parentPath?: string;
  isTopMenu?: boolean;
}

const initVisitedViews: MenuItem[] = [
  { path: '/home', title: '首页', closable: false, menuKey: ['/'] },
];
const initActiveViewKey: string = '/home';

export const useMenuStore = defineStore('menu', {
  state: (): MenuState => {
    const initState: MenuState = {
      rootSubmenuKeys: [], // 根级菜单key
      menuList: [], // 菜单列表
      collapsed: false, // 菜单是否收起
      openKeys: [], // 菜单展开的key
      preOpenKeys: [], // 之前菜单展开的key
      selectedKeys: [], // 菜单选中的key
      visitedViews: initVisitedViews, //  存储访问过的视图
      activeViewKey: initActiveViewKey, // 激活的视图
    };

    // 持久化状态初始话
    try {
      return {
        ...initState,
        openKeys: JSON.parse(
          localStorage.getItem('openKeys') || JSON.stringify([]),
        ),
        visitedViews: JSON.parse(
          localStorage.getItem('visitedViews') ||
            JSON.stringify(initVisitedViews),
        ),
        activeViewKey: localStorage.getItem('activeViewKey') || '',
        selectedKeys: [localStorage.getItem('activeViewKey') || ''],
      };
    } catch {
      return initState;
    }
  },
  actions: {
    getMenuList(): MenuState['menuList'] {
      return this.menuList;
    },
    openView(view: MenuItem) {
      const exists = this.visitedViews.some((v) => v.path === view.path);
      if (!exists) {
        this.visitedViews.push(view);
        this.setVisitedViews(this.visitedViews);
      }
      this.setActiveViewKey(view.path);
      this.setOpenViewKeys(view.menuKey);
      this.tabsViewChange(view.path);
    },
    tabsViewChange(path: string) {
      this.setActiveViewKey(path);
      const view = this.visitedViews.find((v) => v.path === path) as MenuItem;
      this.selectedKeys = [path];
      this.setOpenViewKeys(view.menuKey);
    },
    setVisitedViews(visitedViews: MenuItem[]) {
      setStorage('visitedViews', JSON.stringify(visitedViews));
    },
    setActiveViewKey(path: string) {
      this.activeViewKey = path;

      setStorage('activeViewKey', this.activeViewKey);
    },
    setOpenViewKeys(latestOpenKey: string[]) {
      this.openKeys = latestOpenKey;
      setStorage('openKeys', JSON.stringify(this.openKeys));
    },
    clearView() {
      clearStorage();
    },
  },
});

export const useMenuStoreHook = () => {
  return useMenuStore(store);
};
