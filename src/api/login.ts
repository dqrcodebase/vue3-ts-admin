/*
 * @Author: dqr
 * @Date: 2025-05-26 22:29:32
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-02-28 15:12:58
 * @FilePath: /vue3-ts-admin/src/api/login.ts
 * @Description:
 *
 */
import service from '@/utils/service';
import { type ApiResponse } from '@/utils/service/type';
import { type UserResult } from '~/user';

export const getLogin = (data: any): Promise<ApiResponse<UserResult>> => {
  return service({
    url: '/login',
    method: 'post',
    data,
  });
};
