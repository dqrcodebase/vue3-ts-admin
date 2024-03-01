// 所有的全局变量都需要在这里声明，否则会报错
// 要确保tsconfig.json 中的 "include": ["src/**/*.d.ts"] 会自动引入这个文件
// 这个文件是用来声明全局变量的，所以不需要导出任何东西
// 例如：在组件中使用$globalStyle.xxx 会报错，需要在这里声明一下
// 要包含至少一个顶级的 import 或 export 即使它只是 export {}

export {};
declare module "vue" {
  interface ComponentCustomProperties {
    $globalStyle: any;
  }
}
