/**
 * ReadmeTemplater configuration file
 */

import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import('juisy/templater').ReadmeTemplaterUserConfig} */
export default {
  /**
   * Output file name: 'README.md' by default
   */
  fileName: 'cli.private.md',
  /**
   * Change destination folder
   */
  destFolder: path.resolve(__dirname, '../../..'),
  /**
   * Template entry file path
   */
  templatePath: path.resolve(__dirname, './template.md'),
  /**
   * EJS data file
   */
  ejsDataPath: path.resolve(__dirname, './data.js'),
  /**
   * EJS options
   */
  ejsOptions: {
    views: [
      path.resolve(__dirname, './partials')
    ]
  }
}
