/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2025-11-06 15:00:07
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-02-28 15:18:21
 * @FilePath: /vue3-ts-admin/mock/login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// 根据角色动态生成路由
import { defineFakeRoute } from 'vite-plugin-fake-server/client';
import  { UserResult } from '../types/user';

const ADMIN_INFO: UserResult = {
  avatar: 'https://avatars.githubusercontent.com/u/44761321',
  username: 'admin',
  nickname: '小铭',
  // 一个用户可能有多个角色
  roles: ['admin'],
  // 按钮级别权限
  permissions: ['*:*:*'],
  accessToken: 'eyJhbGciOiJIUzUxMiJ9.admin',
  refreshToken: 'eyJhbGciOiJIUzUxMiJ9.adminRefresh',
  expires: '2030/10/30 00:00:00',
  permissions: {
    menu: ['dashboard', 'order', 'order-list'],
    route: ['dashboard', 'order-list', 'order-detail'],
    button: ['order-add', 'order-delete'],
  },
};
const COMMON_INFO: UserResult = {
  avatar: 'https://avatars.githubusercontent.com/u/52823142',
  username: 'common',
  nickname: '小林',
  roles: ['common'],
  accessToken: 'eyJhbGciOiJIUzUxMiJ9.common',
  refreshToken: 'eyJhbGciOiJIUzUxMiJ9.commonRefresh',
  expires: '2030/10/30 00:00:00',
  permissions: {
    menu: ['dashboard', 'order', 'order-list'],
    route: ['dashboard', 'order-list', 'order-detail'],
    button: ['order-add', 'order-delete'],
  },
};
export default defineFakeRoute([
  {
    url: '/login',
    method: 'post',
    response: ({ body }) => {
      if (body.username === 'admin') {
        return {
          success: true,
          data: ADMIN_INFO,
        };
      } else {
        return {
          success: true,
          data: COMMON_INFO,
        };
      }
    },
  },
]);
