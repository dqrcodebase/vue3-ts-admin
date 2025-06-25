// @ts-check

/** @type {import("stylelint").Config} */
export default {
  extends: [
    'stylelint-config-standard', // 基础规则
    'stylelint-config-html/vue', // Vue 特定规则
    'stylelint-config-recess-order', // 顺序规则
  ],
  plugins: [
    'stylelint-scss', // SCSS 规则
    'stylelint-order', // 顺序规则
    'stylelint-prettier', // Prettier 集成
  ],
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      extends: [
        'stylelint-config-standard-scss', // SCSS 规则
        'stylelint-config-recommended-vue/scss', // Vue 特定规则
      ],
    },
  ],
  rules: {
    'prettier/prettier': true, // Prettier 集成规则
    'selector-class-pattern': null, // 类选择器命名规则
    'no-descending-specificity': null, // 禁止后代选择器
    'scss/dollar-variable-pattern': null, // SCSS 变量命名规则
    'selector-pseudo-class-no-unknown': [
      // 未知的伪类选择器规则
      true,
      {
        ignorePseudoClasses: ['deep', 'global'], // 忽略未知的伪类选择器
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'v-global', 'v-slotted'], // 忽略未知的伪元素选择器
      },
    ],
    // 关闭原始规则（或你之前设置的）
    'at-rule-no-unknown': null,
    // 使用 scss 插件提供的规则，并设置允许的 at-rules
    'scss/at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'use',
        ],
      },
    ],
    'rule-empty-line-before': [
      // 空行规则
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }], // 未知单位规则
    'order/order': [
      // 顺序规则
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'warning' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx', 'report.html'],
};
