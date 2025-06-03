/*
 * @Author: dqr
 * @Date: 2025-05-27 21:47:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 17:29:41
 * @FilePath: /vue3-ts-admin/src/utils/auth/index.ts
 * @Description: 
 * 
 */
// import { CacheKey } from "@/common/cacheKey"
import Cookies from 'js-cookie'

export const TokenKey = "authorized-token";

export function setToken(token: string) {
  Cookies.set(TokenKey, token)
}
export function getToken() {
  return Cookies.get(TokenKey)
}