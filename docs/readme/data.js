/**
 * ReadmeTemplater EJS data file
 */

import { getPackageInfo } from 'juisy'

// Based on the package.json file, get some data and informations
const pkg = getPackageInfo()

/**
 * Return author link
 * @param {Object} author
 * @return {string}
 */
function getMdAuthor (author) {
  return '[' + author.name + '](' + author.url + ')'
}

/**
 * Return markdown list of persons
 * @param {Array} contributors
 * @return {String}
 */
function getMdContributors (contributors) {
  let mdString = ''
  contributors.forEach((person) => {
    mdString += '- [' + person.name + '](' + person.url + ')\n'
  })
  return mdString
}

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
export const author = getMdAuthor(pkg.author)
export const contributors = getMdContributors(pkg.contributors || [])
