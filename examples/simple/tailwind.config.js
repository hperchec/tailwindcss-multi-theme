import multiThemePlugin from '@hperchec/tailwindcss-multi-theme'

export default {
  darkMode: 'false',
  content: [
    'index.html'
  ],
  theme: {
    themeVariants: [
      '@light',
      '@dark',
      '@banana'
    ],
    extend: {
      colors: {
        'bright-sun': '#FBD644',
        'neon-carrot': '#FAA743',
        'bronze-olive': '#554714',
        'grey-blue': '#6390A5'
      }
    }
  },
  plugins: [
    multiThemePlugin({
      themeClassPrefix: 'theme-'
    })
  ]
}
