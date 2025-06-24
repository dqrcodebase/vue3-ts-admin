/*
 * @Author: dqr
 * @Date: 2025-05-27 22:01:43
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-30 18:02:17
 * @FilePath: /vue3-ts-admin/src/common/cacheKey.ts
 * @Description:
 *
 */
const SYSTEM_NAME = 'vue3-ts-admin';

/** 缓存数据时用到的 Key */
export class CacheKey {
  static readonly TOKEN = `${SYSTEM_NAME}-token-key`;
  static readonly CONFIG_LAYOUT = `${SYSTEM_NAME}-config-layout-key`;
  static readonly SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`;
  static readonly ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`;
  static readonly VISITED_VIEWS = `${SYSTEM_NAME}-visited-views-key`;
  static readonly CACHED_VIEWS = `${SYSTEM_NAME}-cached-views-key`;
}
