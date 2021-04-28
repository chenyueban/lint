const path = require('path')

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['airbnb-typescript', 'prettier'],
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  parserOptions: {
    project: path.resolve(process.cwd(), 'tsconfig.json'),
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    '@typescript-eslint/ban-ts-comment': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
}
