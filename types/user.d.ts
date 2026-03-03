/*
 * @Author: D Q R 852601818@qq.com
 * @Date: 2026-02-28 11:32:53
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2026-02-28 14:32:56
 * @FilePath: /vue3-ts-admin/types/user.d.ts
 */
export interface UserResult {
  /** 头像 */
  avatar: string;
  /** 用户名 */
  username: string;
  /** 昵称 */
  nickname: string;
  /** 当前登录用户的角色 */
  roles: Array<string>;
  /** 权限 */
  permissions: {
    menu: Array<string>;
    route: Array<string>;
    button: Array<string>;
  };
  /** `token` */
  accessToken: string;
  /** 用于调用刷新`accessToken`的接口时所需的`token` */
  refreshToken: string;
  /** `accessToken`的过期时间（格式'xxxx/xx/xx xx:xx:xx'） */
  expires: Date;
}
