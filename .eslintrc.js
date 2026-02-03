module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module',
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', {
      js: 'always',
    }],
  },
};
