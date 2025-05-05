import type { GlobalSettings } from 'juisy/cli'

export default {
  changelog: {
    infile: 'CHANGELOG.md',
    preset: 'angular',
    sameFile: true
  },
  docs: {
    readme: {
      config: './docs/readme/config.js'
    },
    cli: {
      config: './docs/cli/config.js'
    }
  },
  gitHooks: {
    'pre-commit': 'node ./bin/scripts/pre-commit.js',
    'commit-msg': 'node ./bin/scripts/commit-msg.js ${1}'
  },
  lint: {
    default: {
      config: 'eslint.config.js'
    },
    commit: {
      // See also: https://github.com/conventional-changelog/commitlint
      extends: [
        '@commitlint/config-conventional'
      ]
    },
    markdown: [
      {
        globs: [ 'README.md' ],
        config: './docs/.markdownlint-cli2.mjs'
      },
      {
        globs: [ 'cli.private.md', 'cli.public.md' ],
        config: './docs/.markdownlint-cli2.mjs'
      }
    ],
    staged: {
      '*.{js,cjs,ts}': [
        'node ./bin/cli lint --fix'
      ]
    }
  },
  release: {
    git: {
      requireBranch: 'master'
    },
    hooks: {
      'before:init': [
        // Lint and run tests
        'node ./bin/cli lint --fix',
        'node ./bin/cli test'
      ],
      'after:bump': [
        // Build code and generate docs
        'vite build',
        'node ./bin/cli docs generate:api',
        'node ./bin/cli docs generate:readme',
        'node ./bin/cli docs:cli -c ./docs/cli/private/config.js',
        'node ./bin/cli docs:cli -c ./docs/cli/public/config.js'
      ]
    }
  }
} satisfies GlobalSettings
