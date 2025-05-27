/*
 * @Author: dqr
 * @Date: 2025-05-26 16:43:39
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-27 10:07:32
 * @FilePath: /vue3-ts-admin/src/store/modules/login.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia'
import { type userType } from '../type.d.ts'
import { getLogin } from '@/api/login'

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
    async loginByUsername(data) {
      return new Promise<UserResult>((resolve, reject) => {
        getLogin(data)
          .then((data) => {
            console.log("🚀 ~ .then ~ data:", data)
            if (data?.success) setToken(data.data)
            resolve(data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
  },
})
