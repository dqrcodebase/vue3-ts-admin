/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2026-03-02 13:23:19
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-03-03 15:30:19
 * @FilePath: /vue3-ts-admin/src/api/routes.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import service from '@/utils/service';
import { type ApiResponse } from '@/utils/service/type';
type Result = {
  data: Array<any>;
};

export const getAsyncRoutes = (data: any): Promise<ApiResponse<Result>> => {
  return service({
    url: '/get-async-routes',
    method: 'get',
  });
};
