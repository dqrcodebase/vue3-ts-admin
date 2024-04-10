import {
  defineConfig,
  presetAttributify,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss';

export default defineConfig({
  shortcuts: {
    'wh-full': 'w-full h-full',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center',
  },
  rules: [
    [/^font-(\d+)$/, ([, d]) => ({ 'font-size': `${d}px` })],
    ['theme-color', { color: `#1890ff` }],
    [/^border-radius-(\d+)$/, ([, d]) => ({ 'border-radius': `${d}px` })],
    [/^color-(\d+)$/, ([, d]) => ({ color: `#${d}` })],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
});
