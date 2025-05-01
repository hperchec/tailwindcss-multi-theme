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
  fileName: 'README.md',
  /**
   * Change destination folder
   */
  destFolder: path.resolve(__dirname, '../..'),
  /**
   * Template entry file path
   */
  templatePath: path.resolve(__dirname, './template.md'),
  /**
   * EJS data file
   */
  ejsDataPath: path.resolve(__dirname, './data.js'),
  // EJS options (see https://www.npmjs.com/package/ejs#options)
  ejsOptions: {
    /* your ejs options... */
  }
}
