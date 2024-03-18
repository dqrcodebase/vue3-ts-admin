import { defineStore } from "pinia";
import type { AppRouteRecordRaw } from "/@/router/types";
interface LayoutState {
  isCollapse: boolean;
  openTabs: AppRouteRecordRaw[];
}

export default defineStore("layout", {
  state: (): LayoutState => ({
    isCollapse: false,
    // 打开页面的tab
    openTabs: [],
  }),
  getters: {
    getIsCollapse(): boolean {
      return this.isCollapse;
    },
    getOpenTabs(): AppRouteRecordRaw[] {
      return this.openTabs;
    },
  },
  actions: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
    setOpenTabs(route: AppRouteRecordRaw) {
      const index = this.openTabs.findIndex((item) => item.path === route.path);
      console.log("🚀 ~ setOpenTabs ~ index:", index, route);
      if (index === -1 && route.path !== "/home") {
        this.openTabs.push(route);
      }
      console.log("🚀 ~ setOpenTabs ~ this.openTabs:", this.openTabs);
    },
  },
});
