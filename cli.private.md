# CLI

## Table of contents

* [Usage](#usage)
* [Commands](#commands)
  * [`docs`](#docs)
    * [`docs generate:cli`](#docs-generatecli)
    * [`docs generate:readme`](#docs-generatereadme)
    * [`docs generate:api`](#docs-generateapi)
  * [`test`](#test)
  * [`bump-version`](#bump-version)
  * [`changelog`](#changelog)
  * [`git-hooks`](#git-hooks)
    * [`git-hooks reset`](#git-hooks-reset)
    * [`git-hooks sync`](#git-hooks-sync)
  * [`lint`](#lint)
  * [`lint:commit`](#lintcommit)
  * [`lint:markdown`](#lintmarkdown)
  * [`lint:staged`](#lintstaged)
  * [`release`](#release)

## Usage

```console
----------------
Built with Juisy
----------------
Made with ❤  by Hervé Perchec

Usage: ./bin/cli <command> [<options>]

Commands:
  ./bin/cli docs <command>                Manage project documentation
  ./bin/cli test                          Run project tests with vitest. Accepts
                                          all arguments of vitest command.
  ./bin/cli bump-version [targetVersion]  Bump version in package.json file
  ./bin/cli changelog                     Generate CHANGELOG file
  ./bin/cli git-hooks <command>           Git relative commands
  ./bin/cli lint [files]                  Lint source code
  ./bin/cli lint:commit [input]           Lint commit message with commitlint.
                                          Accepts all options of native
                                          commitlint. See also https://github.co
                                          m/conventional-changelog/commitlint
  ./bin/cli lint:markdown                 Lint markdown files with
                                          markdownlint-cli2. See also https://gi
                                          thub.com/DavidAnson/markdownlint-cli2
  ./bin/cli lint:staged                   Lint staged files with lint-staged.
                                          Accepts all options of native
                                          lint-staged command. See also
                                          https://github.com/okonet/lint-staged
  ./bin/cli release                       Make a release

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

## Commands

### `docs`

```
./bin/cli docs <command>

Manage project documentation

Commands:
  ./bin/cli docs generate:cli     Generate CLI docs
  ./bin/cli docs generate:readme  Generate README.md
  ./bin/cli docs generate:api     Generate API docs from source code

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

#### `docs generate:cli`

```
./bin/cli docs generate:cli

Generate CLI docs

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -c, --config   Path to config file  [string] [default: "./docs/cli/config.js"]
```

#### `docs generate:readme`

```
./bin/cli docs generate:readme

Generate README.md

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -c, --config   Path to config file
                                   [string] [default: "./docs/readme/config.js"]
```

#### `docs generate:api`

```
./bin/cli docs generate:api

Generate API docs from source code

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### `test`

```
./bin/cli test

Run project tests with vitest. Accepts all arguments of vitest command.

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### `bump-version`

```
./bin/cli bump-version [targetVersion]

Bump version in package.json file

Positionals:
  targetVersion  The target version to set manually                     [string]

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -p, --preid    Pre-release id                                         [string]
  -f, --file     Path to package.json file                              [string]
      --indent   Number of indent spaces used by JSON.stringify. Default: 2
                                                           [number] [default: 2]
```

### `changelog`

```
./bin/cli changelog

Generate CHANGELOG file

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### `git-hooks`

```
./bin/cli git-hooks <command>

Git relative commands

Commands:
  ./bin/cli git-hooks reset  Reset git hooks
  ./bin/cli git-hooks sync   Sync git hooks

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

#### `git-hooks reset`

```
./bin/cli git-hooks reset

Reset git hooks

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

#### `git-hooks sync`

```
./bin/cli git-hooks sync

Sync git hooks

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
```

### `lint`

```
./bin/cli lint [files]

Lint source code

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -f, --fix      Automatically fix problems           [boolean] [default: false]
  -c, --config   Provide configuration file path                        [string]
```

### `lint:commit`

```
./bin/cli lint:commit [input]

Lint commit message with commitlint. Accepts all options of native commitlint.
See also https://github.com/conventional-changelog/commitlint

Options:
  --version  Show version number                                       [boolean]
  --help     Show help                                                 [boolean]
  --config   Provide configuration file path                            [string]
```

### `lint:markdown`

```
./bin/cli lint:markdown

Lint markdown files with markdownlint-cli2. See also
https://github.com/DavidAnson/markdownlint-cli2

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -f, --fix      Fix the problems                                      [boolean]
```

### `lint:staged`

```
./bin/cli lint:staged

Lint staged files with lint-staged. Accepts all options of native lint-staged
command. See also https://github.com/okonet/lint-staged

Options:
      --version  Show version number                                   [boolean]
      --help     Show help                                             [boolean]
  -c, --config   Provide configuration file path                        [string]
```

### `release`

```
./bin/cli release

Make a release

Options:
      --version          Show version number                           [boolean]
      --help             Show help                                     [boolean]
  -d, --dry-run          Do not touch or write anything, but show the commands
                                                                       [boolean]
  -i, --increment        Increment "major", "minor", "patch", or "pre*" version;
                         or specify version          [string] [default: "patch"]
      --preRelease       Same as release-it --preRelease option. See:
                         https://github.com/release-it/release-it/blob/main/docs
                         /pre-releases.md                               [string]
      --ci               No prompts, no user interaction; activated
                         automatically in CI environments              [boolean]
      --only-version     Prompt only for version, no further interaction
                                                                       [boolean]
      --release-version  Print version number to be released           [boolean]
      --changelog        Print changelog for the version to be released[boolean]
  -v, --verbose          Verbose output (user hooks output)            [boolean]
  -V, --extra-verbose    Extra verbose output (also internal commands output)
                                                                       [boolean]
```

***

<!-- markdownlint-disable-next-line line-length -->

*cli.private.md - this file was auto generated with [juisy](https://www.npmjs.com/package/juisy) README templater. Don't edit it.*
