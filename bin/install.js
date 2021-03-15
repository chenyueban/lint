#!/usr/bin/env node
/* eslint-disable no-console */

const fs = require('fs')
const path = require('path')

const pkgUp = require('pkg-up')

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

async function main() {
  const cwd = path.join(__dirname, '..', '..')
  const pkgFile = await pkgUp({ cwd })
  if (!pkgFile) {
    return 0
  }
  const pkgDir = path.dirname(pkgFile)

  const editorConfigFile = path.join(pkgDir, '.editorconfig')
  const eslintRcJsFile = path.join(pkgDir, '.eslintrc.js')
  const prettierRcJsFile = path.join(pkgDir, '.prettierrc.js')

  if (!fs.existsSync(editorConfigFile)) {
    console.info(`@chenyueban/lint: auto generated ${editorConfigFile}`)
    fs.writeFileSync(editorConfigFile, EDITOR_CONFIG_CONTENT)
  }
  if (!fs.existsSync(eslintRcJsFile)) {
    console.info(`@chenyueban/lint: auto generated ${eslintRcJsFile}`)
    fs.writeFileSync(eslintRcJsFile, ESLINTRC_CONTENT)
  }
  if (!fs.existsSync(prettierRcJsFile)) {
    console.info(`@chenyueban/lint: auto generated ${prettierRcJsFile}`)
    fs.writeFileSync(prettierRcJsFile, PRETTIERRC_CONTENT)
  }
  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    console.info(e)
    process.exit(1)
  })
