//统一管理咱们项目用户相关的接口
import request from "@/utils/request";
import type { loginFormData, loginResponseData } from "./type";

enum API {
  LOGIN_URL = "/api/user/login",
  USERINFO_URL = "/admin/acl/index/info",
  LOGOUT_URL = "/admin/acl/index/logout",
}

export function reqLogin(data: loginFormData) {
  return request<loginResponseData, loginFormData>({
    url: API.LOGIN_URL,
    method: "POST",
    data,
  });
}
