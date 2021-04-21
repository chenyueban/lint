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
}
`

const COMMITLINT_CONFIG_CONTENT = `module.exports = {
  extends: ['@commitlint/config-conventional'],
}
`

const HUSKY_SH_CONTENT = `#!/bin/sh
if [ -z "$husky_skip_init" ]; then
  debug () {
    [ "$HUSKY_DEBUG" = "1" ] && echo "husky (debug) - $1"
  }

  readonly hook_name="$(basename "$0")"
  debug "starting $hook_name..."

  if [ "$HUSKY" = "0" ]; then
    debug "HUSKY env variable is set to 0, skipping hook"
    exit 0
  fi

  if [ -f ~/.huskyrc ]; then
    debug "sourcing ~/.huskyrc"
    . ~/.huskyrc
  fi

  export readonly husky_skip_init=1
  sh -e "$0" "$@"
  exitCode="$?"

  if [ $exitCode != 0 ]; then
    echo "husky - $hook_name hook exited with code $exitCode (error)"
    exit $exitCode
  fi

  exit 0
fi
`

const HUSKY_PRE_COMMIT_CONTENT = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
`

const HUSKY_COMMIT_MSG_CONTENT = `#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
`

module.exports = {
  EDITOR_CONFIG_CONTENT,
  ESLINTRC_CONTENT,
  PRETTIERRC_CONTENT,
  LINT_STAGED_CONFIG_CONTENT,
  COMMITLINT_CONFIG_CONTENT,
  HUSKY_SH_CONTENT,
  HUSKY_PRE_COMMIT_CONTENT,
  HUSKY_COMMIT_MSG_CONTENT,
}
