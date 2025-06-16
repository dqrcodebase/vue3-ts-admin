/*
 * @Author: dqr
 * @Date: 2025-05-22 10:08:03
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-06-16 16:50:20
 * @FilePath: /vue3-ts-admin/vite.config.ts
 * @Description:
 *
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { vitePluginFakeServer } from 'vite-plugin-fake-server'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from "unplugin-auto-import/vite"
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';

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
     tailwindcss(),
     AutoImport ({
      imports: ["vue", "vue-router"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
      dts: 'src/auto-import.d.ts', //自动引入类型定义文件
      eslintrc: {
        enabled: true, // 是否生成ESLint配置
        filepath: './.eslintrc-auto-import.json', // 默认'eslint-import-resolver-auto-import.config.js'
        globalsPropValue: true, // 默认false
      },
    }),
    // 自动注册图标组件
    Icons({
      autoInstall: true, // 自动安装缺失的 iconify 图标包
      compiler: 'vue3',
    }),

    // 自动引入组件（包括图标）
    Components({
      resolvers: [
        // 自动引入 icon 组件，前缀 i
        IconsResolver({
          prefix: 'i',
          customCollections: ['ant-design'], // 指定只使用 ant-design 图标集
        }),
      ],
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
