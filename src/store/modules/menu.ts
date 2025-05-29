/*
 * @Author: dqr
 * @Date: 2025-05-29 17:53:00
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-29 17:57:56
 * @FilePath: /vue3-ts-admin/src/store/modules/menu.ts
 * @Description: 
 * 
 */
import {defineStore} from 'pinia'

export const  menuStore = defineStore('menu', {
  state: () => ({
    menuList: []
  }),
  actions: {
    setMenuList(data: any) {
      this.menuList = data
    }
  }
})