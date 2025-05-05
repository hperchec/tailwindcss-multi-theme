/// <reference types="vitest" />
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

import { aliases, buildConfig } from './build'

export default defineConfig({
  resolve: {
    alias: aliases
  },
  plugins: [
    dts({
      exclude: [
        './tests/**'
      ]
    })
  ],
  build: buildConfig,
  test: {
    alias: aliases,
    // environment: 'happy-dom',
    setupFiles: [
      './tests/unit/setup.unit.ts'
    ],
    include: [
      './tests/**/*.spec.ts'
    ],
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: [ 'text', 'json', 'html' ],
      reportsDirectory: './tests/unit/.coverage',
      include: [
        'src/**'
      ]
    }
  }
})
