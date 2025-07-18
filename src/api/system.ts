/*
 * @Author: dqr
 * @Date: 2025-05-26 22:29:32
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-28 11:06:27
 * @FilePath: /vue3-ts-admin/src/api/system.ts
 * @Description:
 *
 */
import service from '@/utils/service';
import { type ApiResponse } from '@/utils/service/type';

// 获取菜单权限
export const getRoleMenuList = (): Promise<ApiResponse<object[]>> => {
  return service({
    url: '/role-menu',
    method: 'post',
  });
};
