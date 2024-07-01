import eslintPluginTS from '@typescript-eslint/eslint-plugin';
import eslintParserTS from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: eslintParserTS,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': eslintPluginTS,
      prettier: prettierPlugin,
    },
    rules: {
      ...eslintPluginTS.configs.recommended.rules,
      ...prettierConfig.rules,
      'prettier/prettier': 'error',
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
];
