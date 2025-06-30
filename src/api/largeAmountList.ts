import service from '@/utils/service';
import { type ApiResponse } from '@/utils/service/type';

// 获取大数据列表
export const getLargeAmountList = (): Promise<ApiResponse<object[]>> => {
  return service({
    url: '/get-large-amount-list',
    method: 'post',
  });
};
