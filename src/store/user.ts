import type { UserInfo } from "types/store";
import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { reqLogin, reqUserInfo, reqUserRoutes } from "@/api/user";
import { RouteRecordRaw } from "vue-router";
import { constantMenuRoute } from "@/router/routers";
import { formatRoutes } from "@/utils/common";
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
  userRoutesResponseData,
} from "@/api/user/type";

interface UserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
  userRoutes: Array<RouteRecordRaw>;
}
export default defineStore("user", {
  state: (): UserState => ({
    token: undefined,
    userInfo: null,
    userRoutes: [],
  }),
  getters: {
    getToken(): string {
      return this.token || getLocalStorage("token") || "";
    },
    getUserInfo(): UserInfo {
      return this.userInfo || getLocalStorage("userInfo") || {};
    },
  },
  actions: {
    async userLogin(data: loginFormData) {
      // 请求登录
      const res: loginResponseData = await reqLogin({
        username: data.username,
        password: data.password,
      });
      console.log(res);
      this.setToken(res.data.token);
    },
    async reqUserInfo() {
      const result: userInfoResponseData = await reqUserInfo();
      this.setUserInfo(result.data);
    },
    async reqUserRoutes() {
      // 请求路由
      const res: userRoutesResponseData = await reqUserRoutes();
      const routes = formatRoutes(res.data);
      console.log("🚀 ~ reqUserRoutes ~ routes:", routes);
      this.userRoutes = [...constantMenuRoute, ...routes];
    },
    setToken(token: string) {
      this.token = token;
      setLocalStorage("token", token);
    },
    setUserInfo(userInfo: any) {
      this.userInfo = userInfo;
      setLocalStorage("userInfo", userInfo);
    },
  },
});
