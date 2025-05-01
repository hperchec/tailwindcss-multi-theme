// Tailwind plugin
import plugin from 'tailwindcss/plugin.js'

type PluginOptions = {
  themeClassPrefix?: string
}

// Function to escape special characters in variant name
function escapeSpecialCharacters (str: string) {
  const regex = /([^(A-Za-z0-9-_ )])/g
  return str.replace(regex, '\\\$&') // eslint-disable-line
}

// Default options
const defaultOptions: PluginOptions = {
  themeClassPrefix: 'theme-'
}

// Enable plugin options
export default plugin.withOptions(function (options: PluginOptions = {}) {
  // First, merge options object
  options = Object.assign(defaultOptions, options)
  // The plugin function
  return function ({ addVariant, theme }) {
    const themeVariants = theme('themeVariants')
    if (!themeVariants) {
      throw new Error('tailwindcss-multi-theme expects a themeVariants property in theme.')
    }

    if (!Array.isArray(themeVariants)) {
      throw new Error('tailwindcss-multi-theme expects themeVariants to be an Array.')
    }

    if (themeVariants.length === 0) {
      throw new Error(
        'tailwindcss-multi-theme found themeVariants but it is empty. Pass it a list of strings or remove it.'
      )
    }

    function generateVariant (themeVariant: string) {
      const cssClassName = escapeSpecialCharacters(`${options.themeClassPrefix}${themeVariant}`)
      addVariant(`${themeVariant}`, `${cssClassName} &`)
    }

    // Generate variants for each theme
    themeVariants.forEach((tv) => {
      generateVariant(tv)
    })
  }
})
