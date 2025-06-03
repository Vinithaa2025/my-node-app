// eslint.config.js
export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module', // 👈 This line tells ESLint to parse ES modules correctly
    },
    rules: {
      semi: 'error',
      quotes: ['error', 'single'],
    },
  },
];
