/*
 * @Author: dqr
 * @Date: 2025-05-26 16:57:49
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-27 10:14:14
 * @FilePath: /vue3-ts-admin/src/utils/service/index.ts
 * @Description: 
 * 
 */
import Axios from 'axios'
import {
  type AxiosRequestConfig,
  type AxiosInstance,
  type AxiosResponse,
} from 'axios'

const defaultConfig: AxiosRequestConfig = {
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
};
const service: AxiosInstance =  Axios.create(defaultConfig)
// 添加请求拦截器
service.interceptors.request.use( (config: AxiosRequestConfig) => {
    // 在发送请求之前做些什么
    return config;
  },  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use( (response:AxiosResponse) => {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default service