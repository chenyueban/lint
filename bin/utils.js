const chalk = require('chalk')

function log(...args) {
  // eslint-disable-next-line no-console
  console.log(chalk.yellow('[@chenyueban/lint]: '), chalk.cyan(args))
}

function error(...args) {
  // eslint-disable-next-line no-console
  console.error(chalk.yellow('[@chenyueban/lint]: '), chalk.red(args))
}

module.exports = {
  log,
  error,
}
