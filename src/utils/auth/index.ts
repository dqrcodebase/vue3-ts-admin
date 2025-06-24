/*
 * @Author: dqr
 * @Date: 2025-05-27 21:47:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-03 11:22:52
 * @FilePath: /vue3-ts-admin/src/utils/auth/index.ts
 * @Description:
 *
 */
// import { CacheKey } from "@/common/cacheKey"
import Cookies from 'js-cookie';

export const TokenKey = 'authorized-token';

export function setToken(token: string) {
  Cookies.set(TokenKey, token);
}
export function getToken() {
  return Cookies.get(TokenKey);
}
export function clearToken() {
  Cookies.remove(TokenKey);
}
export function setStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}
export function getStorage(key: string) {
  return localStorage.getItem(key);
}
export function clearStorage() {
  localStorage.clear();
}
