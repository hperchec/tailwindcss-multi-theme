/**
 * ReadmeTemplater EJS data file
 */

import { getPackageInfo } from 'juisy'

// Based on the package.json file, get some data and informations
const pkg = getPackageInfo()

/**
 * Export data for readme file templating
 */
export const packageName = pkg.name
export const packageUrl = `https://www.npmjs.com/package/${packageName}`
export const dependencies = pkg.dependencies || {}
export const devDependencies = pkg.devDependencies || {}
export const peerDependencies = pkg.peerDependencies || {}
export const projectUrl = pkg.repository.url.match(/^git\+(.*)\.git$/)[1] // find string between 'git+' and '.git'
export const projectPath = projectUrl.replace('https://github.com/', '') // remove domain name
export const issuesUrl = pkg.bugs.url
export const license = pkg.license || 'Unknown'
export const author = pkg.author
export const contributors = pkg.contributors
