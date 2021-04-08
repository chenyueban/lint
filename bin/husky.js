const fs = require('fs')
const cp = require('child_process')
const path = require('path')

const {
  HUSKY_SH_CONTENT,
  HUSKY_PRE_COMMIT_CONTENT,
  LINT_STAGED_CONFIG_CONTENT,
} = require('./raw')
const { log, error } = require('./utils')

function install(dir = '.husky') {
  // Custom dir help
  const url = 'https://typicode.github.io/husky/#/?id=custom-directory'

  // Ensure that cwd is git top level
  if (!fs.existsSync('.git')) {
    throw new Error(`.git can't be found (see ${url})`)
  }

  try {
    // Create .husky/_
    fs.mkdirSync(path.join(dir, '_'), { recursive: true })

    // Create .husky/.gitignore
    fs.writeFileSync(path.join(dir, '.gitignore'), '_\n')

    // Create .husky/_/husky.sh
    fs.writeFileSync(path.join(dir, '_/husky.sh'), HUSKY_SH_CONTENT, {
      encoding: 'utf-8',
    })

    // Create .husky/pre-commit
    fs.writeFileSync(path.join(dir, 'pre-commit'), HUSKY_PRE_COMMIT_CONTENT, {
      encoding: 'utf-8',
    })

    // Configure repo
    const { error } = cp.spawnSync('git', ['config', 'core.hooksPath', dir])
    if (error) {
      throw error
    }
  } catch (e) {
    error('Git hooks failed to install')
    throw e
  }
  log('Git hooks installed')

  const lintStagedConfigFile = path.join(dir, 'lint-staged.config.js')
  // generate lint-staged config file
  if (!fs.existsSync(lintStagedConfigFile)) {
    fs.writeFileSync(lintStagedConfigFile, LINT_STAGED_CONFIG_CONTENT)
    log(`auto generated ${lintStagedConfigFile}`)
  }
}

module.exports = install
