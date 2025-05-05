/** @type {import('juisy/cli').Command} */
export default class TestCommand extends CLI.Command {
  /**
   * The command signature
   */
  command = 'test'

  /**
   * The command description
   */
  describe = 'Run project tests with vitest. Accepts all arguments of vitest command.'

  /**
   * The command meta
   */
  meta = {
    private: true
  }

  /**
   * Command builder
   */
  builder (cli) {
    cli.strict(false) // to forward all arguments
    return cli
  }

  /**
   * Command handler
   */
  async handler (args) {
    const { run } = CLI.InterfaceUtils

    // Forward arguments to vitest command
    const testCommandArgs = this.getProcessArgv().slice(1)

    /**
     * Run tests
     */
    await run('npx', [
      'vitest',
      ...testCommandArgs
    ])
      // Prevent an error be thrown when Ctrl+C is pressed in watch mode
      .catch((err) => {
        if (err.exitCode !== 130) throw err
      })
  }
}
