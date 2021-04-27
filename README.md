# lint

[![NPM Version](https://badge.fury.io/js/%40chenyueban%2Flint.svg)](https://www.npmjs.com/package/@chenyueban/lint)
[![NPM](https://github.com/chenyueban/lint/workflows/NPM/badge.svg)](https://github.com/chenyueban/lint/actions?query=workflow%3ANPM)

## USAGE

1. Install `@chenyueban/lint`

```sh
npm install --save-dev @chenyueban/lint
# or
yarn add @chenyueban/lint -D
```

2. It will automatically generate a .eslintrc.js/.prettierrc.js/lint-staged.config.js/.husky/commitlint.config.js for you (if there's no such file before)

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

in `lint-staged.config.js`

```js
module.exports = {
  '*.{less,sass,scss,md,json,yml}': ['prettier --write', 'git add'],
  '*.{js,jsx,html}': ['prettier --write', 'eslint --fix', 'git add'],
  '*.ts?(x)': [
    'prettier --parser=typescript --write',
    'eslint --fix',
    'git add',
  ],
}
```

Mac os may not execute lint, please execute the following command:

```bash
chmod ug+x .husky/*
chmod ug+x .git/hooks/*
```
