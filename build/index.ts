import path from 'node:path'
import typescript from '@rollup/plugin-typescript'
import { getProjectGlobals } from 'juisy'
import type { UserConfig } from 'vite'

const PROJECT_GLOBALS = await getProjectGlobals()

// Resolve from root path
const resolve = (...args) => path.join(path.resolve(__dirname, '../'), ...args)

// Project aliases
export const aliases = [
  {
    find: '@',
    replacement: resolve('src')
  }
]

export const buildConfig = {
  // This do the trick for Node specific library
  // See: https://vite.dev/config/build-options#build-ssr
  ssr: true,
  target: 'esnext',
  sourcemap: false,
  outDir: 'dist',
  lib: {
    entry: {
      'index': resolve('src/index.ts')
    },
    formats: [ 'es', 'cjs' ]
  },
  rollupOptions: {
    output: {
      banner: `/*!\n * ${PROJECT_GLOBALS.PACKAGE.NAME} v${PROJECT_GLOBALS.VERSION}\n * Copyright © 2025 ${PROJECT_GLOBALS.AUTHOR.NAME} & ${PROJECT_GLOBALS.CONTRIBUTORS[0].NAME} \n */\n`
    },
    plugins: [
      typescript({
        exclude: [
          'node_modules',
          'tests/**/*'
        ]
      })
    ],
    external: [
      'postcss-selector-parser'
    ]
  }
} satisfies UserConfig['build']
