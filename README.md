# lint

[![NPM Version](https://badge.fury.io/js/%40chenyueban%2Flint.svg)](https://www.npmjs.com/package/@chenyueban/lint)
[![npm (tag)](https://img.shields.io/npm/v/%40chenyueban/lint/next.svg)](https://www.npmjs.com/package/@chenyueban/lint?activeTab=versions)
[![NPM](https://github.com/chenyueban/lint/workflows/NPM/badge.svg)](https://github.com/chenyueban/lint/actions?query=workflow%3ANPM)

## USAGE

1. Install `@chenyueban/lint`

```sh
npm install --save-dev @chenyueban/lint eslint prettier husky lint-staged
# or
yarn add @chenyueban/lint eslint prettier husky lint-staged -D
```

2. It will automatically generate a .eslintrc.js/.prettierrc.js for you (if there's no such file before)

3. You can customize the rules

in `.eslintrc.js`

```js
module.exports = {
  extends: [require.resolve('@chenyueban/lint/src/eslint')],

  rules: {
    // your rules
  },
}
```

in `.prettierrc.js`

```js
const config = require('@chenyueban/lint')

module.exports = {
  ...config.prettier,
}
```
