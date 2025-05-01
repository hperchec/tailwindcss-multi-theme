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
 * Pre commit git hook
 */
;(async function () {
  step('Git hook: pre-commit')

  try {
    // Lint staged files
    await run('node', [ './bin/cli', 'lint:staged' ])
    // Test coverage
    await run('npm', [ 'run', 'test:coverage' ])
  } catch (e) {
    substep($style.red('❌ Git hook: "pre-commit" failed.'), { last: true })
    error('Error:', e)
    abort(1) // Abort with error
  }

  // Everything is okay
  substep($style.green('✔ Git hook: "pre-commit" passed'), { last: true })

  log() // blank line
})()
