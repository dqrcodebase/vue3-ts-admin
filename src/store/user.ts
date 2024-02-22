import type { UserInfo } from "types/store";
import { defineStore } from "pinia";
import { getLocalStorage, setLocalStorage } from "@/utils";
import { reqLogin, reqUserInfo } from "@/api/user";
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from "@/api/user/type";
interface UserState {
  token?: string;
  userInfo: Nullable<UserInfo>;
}
export default defineStore("user", {
  state: (): UserState => ({
    token: undefined,
    userInfo: null,
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
    async userInfo() {
      const result: userInfoResponseData = await reqUserInfo();
      this.setUserInfo(result.data);
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
