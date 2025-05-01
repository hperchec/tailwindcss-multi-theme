import globals from 'globals'
import js from '@eslint/js'
import stylistic from '@stylistic/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    /**
     * If only "ignores" is set on flat config object,
     * it will be applied as global.
     * See: https://eslint.org/docs/latest/use/configure/ignore#ignoring-files
     */
    ignores: [
      '**/dist/**'
    ]
  },
  /**
   * Define some globals
   */
  {
    languageOptions: {
      globals: {
        ...globals.node
      }
    }
  },
  /**
   * See: https://eslint.style/packages/default
   */
  stylistic.configs.customize({
    // ...
  }),
  /**
   * Our rules configuration
   */
  {
    rules: {
      // @eslint/js
      ...js.configs.recommended.rules,
      'no-unused-vars': [ 'error', {
        args: 'none'
      } ],
      // @stylistic/eslint-plugin
      '@stylistic/array-bracket-spacing': [ 'error', 'always' ],
      '@stylistic/brace-style': [ 'error', '1tbs' ],
      '@stylistic/comma-dangle': [ 'error', 'never' ],
      '@stylistic/space-before-function-paren': [ 'error', 'always' ]
    }
  },
  {
    files: [
      '**/bin/cli/**/*.js'
    ],
    languageOptions: {
      globals: {
        CLI: 'readonly'
      }
    }
  }
]
