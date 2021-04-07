module.exports = {
  '*.{js,ts}': ['cross-env NODE_ENV=development eslint --cache'],
  '{*.json,.{eslintrc,prettierrc}}': [
    'prettier --ignore-path .eslintignore --parser json --write',
  ],
  '*.{html,md,yml}': [
    'prettier --ignore-path .eslintignore --single-quote --write',
  ],
}
