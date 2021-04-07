const EDITOR_CONFIG_CONTENT = `root = true

[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true

[*.md]
trim_trailing_whitespace = false
`

const ESLINTRC_CONTENT = `module.exports = {
  extends: [require.resolve('@chenyueban/lint/src/eslint')],
}
`

const PRETTIERRC_CONTENT = `const config = require('@chenyueban/lint')

module.exports = {
  ...config.prettier,
}
`

const LINT_STAGED_CONFIG_CONTENT = `module.exports = {
  '*.{js,jsx,less,sass,scss,md,json,yml,html}': ['prettier --write', 'git add'],
  '*.ts?(x)': ['prettier --parser=typescript --write', 'git add'],
}`

module.exports = {
  EDITOR_CONFIG_CONTENT,
  ESLINTRC_CONTENT,
  PRETTIERRC_CONTENT,
  LINT_STAGED_CONFIG_CONTENT,
}
