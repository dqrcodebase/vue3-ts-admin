/*
 * @Author: dqr
 * @Date: 2025-05-22 10:08:03
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-18 16:11:30
 * @FilePath: /vue3-ts-admin/vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from "unplugin-auto-import/vite"
export default defineConfig({
  plugins: [
    vue(),
    vitePluginFakeServer({
      logger: false,
      include: 'mock',
      infixName: false,
      enableProd: true,
    }),
     tailwindcss(),
     AutoImport ({
      // @iconify/vue 也自动导入
      imports: ["vue", "vue-router"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
      dts: 'src/auto-import.d.ts', //自动引入类型定义文件
      eslintrc: {
        enabled: true, // 是否生成ESLint配置
        filepath: './.eslintrc-auto-import.json', // 默认'eslint-import-resolver-auto-import.config.js'
        globalsPropValue: true, // 默认false
      },
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
