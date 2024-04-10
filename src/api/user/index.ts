//统一管理咱们项目用户相关的接口
import request from '@/utils/request';
import type {
  loginFormData,
  loginResponseData,
  userInfoResponseData,
} from './type';

enum API {
  LOGIN_URL = '/api/user/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout',
  USER_ROUTES = '/api/user/routes',
}

export function reqLogin(data: loginFormData) {
  return request<any, loginResponseData>({
    url: API.LOGIN_URL,
    method: 'POST',
    data,
  });
}

export function reqUserInfo() {
  return request<any, userInfoResponseData>({ url: API.USERINFO_URL });
}

export function reqLogout() {
  return request<any>({ url: API.LOGOUT_URL });
}

export function reqUserRoutes() {
  return request<any>({ url: API.USER_ROUTES });
}
