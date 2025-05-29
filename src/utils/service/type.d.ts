/*
 * @Author: dqr
 * @Date: 2025-05-27 09:54:52
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-27 10:13:57
 * @FilePath: /vue3-ts-admin/src/utils/service/type.d.ts
 * @Description: 
 * 
 */
import {
  type AxiosResponse,
} from 'axios'

export interface ApiResponse<T> extends AxiosResponse<T>  {
  data: T;
  success: boolean;
};