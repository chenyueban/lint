#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const pkgUp = require('pkg-up')
const execa = require('execa')
const chalk = require('chalk')

const {
  EDITOR_CONFIG_CONTENT,
  ESLINTRC_CONTENT,
  PRETTIERRC_CONTENT,
  LINT_STAGED_CONFIG_CONTENT,
} = require('./raw')

function log(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow('[@chenyueban/lint]: '), chalk.cyan(args))
}
function error(...args) {
  // eslint-disable-next-line no-console
  console.error(chalk.yellow('[@chenyueban/lint]: '), chalk.red(args))
}

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
  const lintStagedConfigFile = path.join(pkgDir, 'lint-staged.config.js')

  // generate config files
  if (!fs.existsSync(editorConfigFile)) {
    fs.writeFileSync(editorConfigFile, EDITOR_CONFIG_CONTENT)
    log(`auto generated ${editorConfigFile}`)
  }
  if (!fs.existsSync(eslintRcJsFile)) {
    fs.writeFileSync(eslintRcJsFile, ESLINTRC_CONTENT)
    log(`auto generated ${eslintRcJsFile}`)
  }
  if (!fs.existsSync(prettierRcJsFile)) {
    fs.writeFileSync(prettierRcJsFile, PRETTIERRC_CONTENT)
    log(`auto generated ${prettierRcJsFile}`)
  }

  // install husky
  await execa('npm set-script prepare "husky install" && npm run prepare')
  await execa('npx husky add .husky/pre-commit "npx lint-staged"')
  // generate lint-staged config file
  if (!fs.existsSync(lintStagedConfigFile)) {
    fs.writeFileSync(lintStagedConfigFile, LINT_STAGED_CONFIG_CONTENT)
    log(`auto generated ${lintStagedConfigFile}`)
  }
  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    error(e)
    process.exit(1)
  })
