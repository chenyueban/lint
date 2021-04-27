#!/usr/bin/env node

const path = require('path')
const pkgUp = require('pkg-up')

const installHusky = require('./husky')
const installLint = require('./lint')
const { error } = require('./utils')

async function main() {
  const cwd = path.join(__dirname, '..', '..')
  const pkgFile = await pkgUp({ cwd })
  if (!pkgFile) {
    return 0
  }
  const pkgDir = path.dirname(pkgFile)

  installLint(pkgDir)
  installHusky(pkgDir)

  return 0
}

main()
  .then(process.exit)
  .catch((e) => {
    error(e)
    process.exit(1)
  })
