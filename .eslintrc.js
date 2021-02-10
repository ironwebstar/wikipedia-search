module.exports = {
  env: {
    browser: true
  },
  overrides: [
    {
      extends: ['vuetify', 'plugin:vue/recommended'],
      files: '*.vue',
      rules: {
        'no-console': process.env.VUE_APP_RUNTIME === 'build' ? 'error' : 'off'
      }
    },
    {
      env: {
        node: true
      },
      extends: ['plugin:jest/recommended'],
      files: 'test/*.test.js',
      plugins: ['jest']
    },
    {
      env: {
        'cypress/globals': true,
        node: true
      },
      extends: ['standard', 'eslint:recommended', 'plugin:cypress/recommended'],
      files: '*.js',
      plugins: ['sort-keys-fix', 'import'],
      rules: {
        'import/group-exports': 'warn',
        'sort-keys-fix/sort-keys-fix': ['error', 'asc'],
        'sort-vars': 'warn'
      }
    }
  ],
  parser: 'babel-eslint',
  parserOptions: {
    parser: 'babel-eslint'
  },
  root: true
}
