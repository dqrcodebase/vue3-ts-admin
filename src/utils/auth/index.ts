/*
 * @Author: dqr
 * @Date: 2025-05-27 21:47:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-27 22:07:03
 * @FilePath: /vue3-ts-admin/src/utils/auth/index.ts
 * @Description: 
 * 
 */
import { CacheKey } from "@/common/cacheKey"
import * as Cookies from "js-cookie"

export function setToken(token: string) {
  Cookies.set(CacheKey.TOKEN, token)
}