/*
 * @Author: dqr
 * @Date: 2025-05-27 21:47:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 17:32:58
 * @FilePath: /vue3-ts-admin/src/utils/auth/index.ts
 * @Description: 
 * 
 */
// import { CacheKey } from "@/common/cacheKey"
import  Cookies from 'js-cookie'

export function setToken(token: string) {

  Cookies.set('token', '1111')
}
