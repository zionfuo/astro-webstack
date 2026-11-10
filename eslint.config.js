// ESLint 9+ 使用扁平配置；旧的 .eslintrc.json 已不再被读取。
export default [
  {
    ignores: [
      'dist/**',
      '.astro/**',
      'node_modules/**',
      'public/**',
      'design/**',
    ],
  },
  {
    // .ts / .astro 由 `astro check` 覆盖，这里只检查独立 JS 配置与脚本。
    files: ['**/*.{js,mjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        setTimeout: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'prefer-const': 'warn',
    },
  },
];
