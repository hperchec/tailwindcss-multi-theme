/**
 * ReadmeTemplater configuration file
 */

import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

import baseConfig from '../private/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Force process.env.CLI_ENV to "public"
process.env.CLI_ENV = 'public'

/** @type {import('juisy/templater').ReadmeTemplaterUserConfig} */
export default {
  ...baseConfig,
  fileName: 'cli.public.md',
  templatePath: path.resolve(__dirname, './template.md')
}
