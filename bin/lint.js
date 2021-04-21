const fs = require('fs')
const path = require('path')

const {
  EDITOR_CONFIG_CONTENT,
  ESLINTRC_CONTENT,
  PRETTIERRC_CONTENT,
  COMMITLINT_CONFIG_CONTENT,
} = require('./raw')
const { log } = require('./utils')

function install(dir) {
  const editorConfigFile = path.join(dir, '.editorconfig')
  const eslintRcJsFile = path.join(dir, '.eslintrc.js')
  const prettierRcJsFile = path.join(dir, '.prettierrc.js')
  const commitlintConfigJsFile = path.join(dir, 'commitlint.config.js')

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
  if (!fs.existsSync(commitlintConfigJsFile)) {
    fs.writeFileSync(commitlintConfigJsFile, COMMITLINT_CONFIG_CONTENT)
    log(`auto generated ${commitlintConfigJsFile}`)
  }
}

module.exports = install
