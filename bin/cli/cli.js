import { CLIFactory } from 'juisy/cli'

import { commands } from './cmds/index.js'

const { $style } = CLI.OutputUtils

function getBanner () {
  let str = ''
  const title = 'Built with Juisy'
  const length = title.length
  str += $style.cyan('-'.repeat(length) + '\n')
  str += $style.cyan(title + '\n')
  str += $style.cyan('-'.repeat(length) + '\n')
  str += $style.italic('Made with') + ' ' + $style.red('❤') + '  ' + $style.italic('by ') + $style.bold('Hervé Perchec') + '\n'
  return str
}

export default await CLIFactory(cli => cli
  .scriptName('./bin/cli')
  .usage(`${getBanner()}\nUsage: $0 <command> [<options>]`)
  .disableDefaultCommand('docs generate:api')
  .disableDefaultCommand('test')
  .command(commands)
  .demandCommand(1, ('Command is missing. See help to learn more.').red)
)
