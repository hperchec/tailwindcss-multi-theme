/** @type {import('juisy/cli').Command} */
export default new CLI.Command({
  command: 'test',
  describe: 'Run project tests',
  meta: {
    private: true
  },
  builder (cli) {
    cli.option('watch', {
      alias: 'w',
      type: 'boolean',
      default: false,
      describe: 'Run vitest in watch mode'
    })
    cli.option('ui', {
      type: 'boolean',
      default: false,
      describe: 'Launch vitest UI'
    })
    return cli
  },
  async handler (args) {
    const watchMode = args.watch || args.ui
    const { run } = CLI.InterfaceUtils
    /**
     * Run tests
     */
    await run('vitest', [
      ...(watchMode ? [] : [ 'run' ]),
      ...(args.ui ? [ '--ui' ] : [])
    ], { stdio: 'inherit' })
  }
})
