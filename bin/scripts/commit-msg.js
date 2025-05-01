import { InterfaceUtils, OutputUtils } from 'juisy/cli'

const {
  abort,
  run
} = InterfaceUtils

const {
  $style,
  log,
  error,
  step,
  substep
} = OutputUtils

/**
 * commit-msg git hook
 */
;(async function () {
  step('Git hook: commit-msg')

  // Get git commit msg path from args
  // We call this script as: node ./bin/scripts/commit-msg $1
  const gitMsgPath = process.argv[2]

  try {
    await run('node', [ './bin/cli', 'lint:commit', '--edit', gitMsgPath ])
  } catch (e) {
    substep($style.red('❌ Git hook: "commit-msg" failed. Please check ./COMMIT_CONVENTION.md for more informations.'), { last: true })
    error('Error:', e)
    abort(1) // Abort with error
  }

  // Everything is okay
  substep($style.green('✔ Git hook: "commit-msg" passed'), { last: true })
  log() // blank line
})()
