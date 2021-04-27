const chalk = require('chalk')

function log(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow('[@chenyueban/lint]: '), chalk.cyan(args))
}

function warn(...args) {
  // eslint-disable-next-line no-console
  console.warn(chalk.yellow('[@chenyueban/lint]: '), chalk.red(args))
}

module.exports = {
  log,
  warn,
}
