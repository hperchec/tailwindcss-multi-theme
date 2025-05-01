import generateAPI from './generate-api.js'

/** @type {import('juisy/cli').Command} */
export default new CLI.Command({
  command: 'docs <command>',
  describe: 'Manage project documentation',
  meta: {
    private: true
  },
  builder (cli) {
    return cli
      .command([
        /**
         * Default command are automatically injected here...
         */
        generateAPI
      ])
      .demandCommand(1, 'Command is missing. See help to learn more.')
  },
  handler (argv) {}
})
