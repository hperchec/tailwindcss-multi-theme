/**
 * ReadmeTemplater EJS data file
 */

import stripAnsi from 'strip-ansi'
import cli from '../../../bin/cli/cli.js'

import { extractUsage } from 'juisy/cli'

export const rootDoclet = await extractUsage(cli, true) // recursively extract usage
// Add filters
export const $filters = {
  stripAnsi
}
