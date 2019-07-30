module.exports = {
  root: true,
  env: {
    node: true,
    jest: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        singleQuote: true,
        semi: false,
        trailingComma: 'none',
        quoteProps: 'preserve'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
