# Contribution guide

First, please check the [code of conduct](./CODE_OF_CONDUCT.md)

## Commits

Commit messages are linted with `commitlint` in the `commit-msg` git hook, following the **angular** convention. Please check the [commit convention](./COMMIT_CONVENTION.md).

## Build

The distribution code is built with [Vite](https://v5.vite.dev/guide/) (v5). You can check the [configuration file](./vite.config.ts).

To build, run the following command:

```sh
npm run build
```

## Tests

### Units

To run unit tests, run the following command:

```sh
npm run test
# With coverage enabled
npm run test:coverage
# Watch mode
npm run test:watch
# With @vitest/ui
npm run test:ui
```

### Examples

There are example folders to test usage cases.

In an example folder (eg: `./examples/simple`), run the following commands:

```sh
# Install dependencies
npm install
# Build source code
npm build
```

Then, you can open the `index.html` in your browser.

## Releases

Run the following command to make a release:

```sh
# Show help
npm run release --help
# Release a patch
npm run release --increment patch
# Release a specific version
npm run release -i 2.0.0
# To increment the current prerelease. For example:
# from   1.0.0-beta.1
# to     1.0.0-beta.2
npm run release -i pre
```

> 💡 See also:
>
> - the **juisy** [release tool documentation](<%= __JUISY_DOCS_HOMEPAGE__ %>)
> - the **release-it** [package documentation](https://github.com/release-it/release-it)

## Documentation

Run the following command to generate project documentation:

```sh
npm run docs
```
