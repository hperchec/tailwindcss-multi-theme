const availableThemes = [
  'light',
  'dark',
  'banana'
]

let currentTheme

/**
 * Detects if user prefers dark mode
 * @returns {boolean}
 */
function prefersDark () {
  return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Switch to the given theme by setting the corresponding class on html element
 * @param {string} theme - The theme to switch to
 */
function switchToTheme (theme) {
  if (availableThemes.includes(theme)) {
    // Remove the old class
    document.documentElement.classList.remove(`theme-@${currentTheme}`)
    // Set the new theme
    currentTheme = theme
    // Add new class on HTML element
    document.documentElement.classList.add(`theme-@${currentTheme}`)
  } else {
    console.error('Unknown theme: ', theme)
  }
}

window.onload = function () {
  // Target the theme select element
  const themeSelectElement = document.getElementById('theme-select')

  // Theme to automatically apply based on user preference
  const themeToApply = prefersDark() ? 'dark' : 'light'

  switchToTheme(themeToApply)
  // Manually set select value
  themeSelectElement.value = themeToApply

  // Add listener of change event to apply theme with the select
  themeSelectElement.onchange = function (e) {
    switchToTheme(e.target.value)
  }
}
