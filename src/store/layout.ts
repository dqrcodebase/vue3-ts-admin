import { defineStore } from "pinia";
interface LayoutState {
  isCollapse: boolean;
}

export default defineStore("layout", {
  state: (): LayoutState => ({
    isCollapse: false,
  }),
  getters: {
    getIsCollapse(): boolean {
      return this.isCollapse;
    },
  },
  actions: {
    setIsCollapse() {
      this.isCollapse = !this.isCollapse;
    },
  },
});
