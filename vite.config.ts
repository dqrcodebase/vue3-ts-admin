/*
 * @Author: dqr
 * @Date: 2025-05-22 10:08:03
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-26 23:10:49
 * @FilePath: /vue3-ts-admin/vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginFakeServer({
      logger: false,
      include: 'mock',
      infixName: false,
      enableProd: true,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  // 服务端渲染
  server: {
    // 端口号
    host: '0.0.0.0',
  },
})
