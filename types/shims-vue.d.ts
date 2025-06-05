/*
 * @Author: dqr
 * @Date: 2025-06-04 17:47:50
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-04 17:52:31
 * @FilePath: /vue3-ts-admin/types/shims-vue.d.ts
 * @Description: 
 * 
 */
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
