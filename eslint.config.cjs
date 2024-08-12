/** @type {import('eslint').FlatConfig} */
const { eslintRecommended } = require('eslint-config-eslint-recommended')
const { prettierRecommended } = require('eslint-config-prettier-recommended')

module.exports = [
  {
    files: ['*.js'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
      },
    },
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      ...eslintRecommended.rules,
      ...prettierRecommended.rules,
      'prettier/prettier': 'error',
    },
  },
]
