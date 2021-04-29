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
    // prettier 相关作为 error 体现
    'prettier/prettier': 'error',
    // console 只允许 warn error
    'no-console': ['error', { allow: ['warn', 'error'] }],
    // 不允许使用 @ts-ignore 等
    '@typescript-eslint/ban-ts-comment': 'off',
    // 函数返回值和参数必需显式标注类型
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // 强制onClick伴随以下至少一项：onKeyUp，onKeyDown，onKeyPress
    'jsx-a11y/click-events-have-key-events': 'off',
    // react 需要写 prop types
    'react/prop-types': 'off',
    // 需要显示引用 React
    'react/jsx-uses-react': 'off',
    // 需要显示引用 React
    'react/react-in-jsx-scope': 'off',
    // react jsx 不允许使用 spreading
    'react/jsx-props-no-spreading': 'off',
    // class 方法内必须使用 this
    'class-methods-use-this': 'off',
    // 若一个文件内只有一个导出 使用 export default
    'import/prefer-default-export': 'off',
    // function 中必须 return
    'consistent-return': 'off',
    // 单文件最大 class 数量限制
    'max-classes-per-file': 'off',
    // for of 限制
    'no-restricted-syntax': 'off',
  },
}
