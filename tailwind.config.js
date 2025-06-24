/*
 * @Author: dqr
 * @Date: 2025-05-28 15:45:26
 * @LastEditors: D Q R 852601818@qq.com
 * @LastEditTime: 2025-05-29 09:54:19
 * @FilePath: /vue3-ts-admin/tailwind.config.js
 * @Description:
 *
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 关闭 TailwindCSS 的预置设置,因为覆盖了ant样式
  },
};
