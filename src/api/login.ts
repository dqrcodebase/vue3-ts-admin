/*
 * @Author: dqr
 * @Date: 2025-05-26 22:29:32
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-27 21:44:10
 * @FilePath: /vue3-ts-admin/src/api/login.ts
 * @Description:
 *
 */
import service from '@/utils/service'
import { type ApiResponse } from '@/utils/service/type'


export type UserResult = {
    /** 头像 */
    avatar: string
    /** 用户名 */
    username: string
    /** 昵称 */
    nickname: string
    /** 当前登录用户的角色 */
    roles: Array<string>
    /** 按钮级别权限 */
    permissions: Array<string>
    /** `token` */
    accessToken: string
    /** 用于调用刷新`accessToken`的接口时所需的`token` */
    refreshToken: string
    /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
    expires: Date
}

export const getLogin = (data: any):Promise< ApiResponse<UserResult>> => {
  return service({
    url: '/login',
    method: 'post',
    data,
  })
}
