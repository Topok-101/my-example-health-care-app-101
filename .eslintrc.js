module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'react-native/react-native': true,
    'jest/globals': true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:jest/recommended',
    '@react-native'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },

  plugins: ['react', 'react-native', '@typescript-eslint'],
  ignorePatterns: ['!.*', 'dist', 'node_modules'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': ['warn', {ignoreRestArgs: true}],
    'linebreak-style': ['error', 'unix'],
    semi: [2, 'never'],
    'no-console': ['error'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        destructuredArrayIgnorePattern: '_',
        argsIgnorePattern: '^_'
      }
    ],
    // camelcase: ['error', {properties: 'always'}],
    'no-undef': 'off',
    'max-lines': ['error', {max: 290}],
    'no-useless-escape': 'off',
    "react/prop-types": "off"
    // "max-lines-per-function": ["error", { "max": 20 }]
    //'no-underscore-dangle': ['error', { allow: ['__typename'] }],
  },

  settings: {
    react: {
      version: 'detect'
    }
  }
}
