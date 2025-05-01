/** @type {import('juisy/cli').Command} */
export default new CLI.Command({
  command: 'generate:api',
  describe: 'Generate API docs from source code',
  builder (cli) {
    cli
  },
  async handler (argv) {
    // Utils
    const { $style, step, substep } = CLI.OutputUtils

    /**
     * Generate api documentation
     */
    step('Generating API documentation')

    substep($style.yellow('⚠ This command does nothing...'), { last: true })
    this.log() // blank line
    this.log($style.yellow('You can use JSDoc or TypeDoc for example. See documentation'))
    this.log() // blank line
  }
})
