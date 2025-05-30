/*
 * @Author: dqr
 * @Date: 2025-05-29 17:53:00
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 09:36:00
 * @FilePath: /vue3-ts-admin/src/store/modules/menu.ts
 * @Description: 
 * 
 */
import {defineStore} from 'pinia'

export const  useMenuStore = defineStore('menu', {
  state: () => ({
    menuList: [],
    collapsed:  false,
    openKeys: [],
    preOpenKeys: [],
    selectedKeys: ''
  }),
  actions: {
    setMenuList(data: any) {
      this.menuList = data
    }
  }
})