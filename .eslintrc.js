'use strict';

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/component-definition-name-casing': ['warn', 'kebab-case'],
    'vue/component-name-in-template-casing': [
      'warn',
      'kebab-case',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
  overrides: [
    {
      files: ['**/mock/*.*'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
    },
  ],
  ignorePatterns: ['node_modules/', 'dist/'],
};
