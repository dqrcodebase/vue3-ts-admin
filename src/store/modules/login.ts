/*
 * @Author: dqr
 * @Date: 2025-05-26 16:43:39
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 17:25:56
 * @FilePath: /vue3-ts-admin/src/store/modules/login.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia'
import { type userType } from '../type'
import { getLogin, type UserResult } from '@/api/login'
import { type ApiResponse } from '@/utils/service/type'
import { setToken } from '@/utils/auth'
export const useLoginStore = defineStore('userStore', {
  state: (): userType => {
    return {
      id: 0,
      name: '',
      permissions: [],
    }
  },
  actions: {
    /** 登入 */
    async loginByUsername(data: object) {
      return new Promise<ApiResponse<UserResult>>((resolve, reject) => {
        getLogin(data)
          .then((data) => {
            if (data?.success) setToken(data.data.accessToken)
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
