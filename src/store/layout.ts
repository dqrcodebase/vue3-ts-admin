import { defineStore } from 'pinia';
import type { AppRouteRecordRaw } from '@/router/type.d.ts';
interface LayoutState {
  isCollapse: boolean;
  openTabs: AppRouteRecordRaw[];
  activeTab: string;
}

export default defineStore('layout', {
  state: (): LayoutState => ({
    isCollapse: false,
    // 打开页面的tab
    openTabs: [],
    activeTab: '',
  }),
  getters: {
    getIsCollapse(): boolean {
      return this.isCollapse;
    },
    getOpenTabs(): AppRouteRecordRaw[] {
      return this.openTabs;
    },
    getActiveTab(): string {
      return this.activeTab;
    },
  },
  actions: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setOpenTabs(route: AppRouteRecordRaw) {
      const index = this.openTabs.findIndex((item) => item.path === route.path);
      if (index === -1 && route.path !== '/home') {
        this.openTabs.push(route);
      }
    },
    setActiveTab(path: string) {
      this.activeTab = path;
    },
  },
});
