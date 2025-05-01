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
npm run release
```

## Documentation

Run the following command to generate project documentation:

```sh
npm run docs
```
