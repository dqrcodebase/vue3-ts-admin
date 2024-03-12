import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//引入svg需要用到插件
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import AutoImport from "unplugin-auto-import/vite";
import UnoCSS from "unocss/vite";
// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
        symbolId: "icon-[name]",
      }),
      AutoImport({
        imports: ["vue"],
        dts: "src/auto-import.d.ts",
      }),
      UnoCSS(),
    ],
    server: {
      host: "0.0.0.0",
      port: 8088,
      proxy: {
        "/api": {
          target: "http://localhost:8080/",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "#": path.resolve("./types"),
        layouts: path.resolve("./layouts"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable.scss";',
        },
      },
    },
  };
});
