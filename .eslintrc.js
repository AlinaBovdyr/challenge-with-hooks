module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
  },
  extends: ['standard', 'plugin:json/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'comma-dangle': 0,
    'no-empty': 2,
    'no-var': 2,
    'no-extra-semi': 2,
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'jsx-quotes': [2, 'prefer-double'],
    'react/display-name': 0,
    'react/jsx-boolean-value': 1,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-prop-types': 0,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/no-did-mount-set-state': [2, 'allow-in-func'],
    'react/no-did-update-set-state': 2,
    'react/no-multi-comp': 2,
    'react/no-unknown-property': 2,
    'react/prop-types': 2,
    'react/react-in-jsx-scope': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/wrap-multilines': 2
  }
}