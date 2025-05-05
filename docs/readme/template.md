# Tailwind CSS Multi Theme

[![author](https://img.shields.io/static/v1?label=&message=Author:&color=black)](http://herve-perchec.com/)
[![herve-perchec](http://herve-perchec.com/badge.svg)](http://herve-perchec.com/)

This project is a fork of [estevanmaito/tailwindcss-multi-theme](https://github.com/estevanmaito/tailwindcss-multi-theme/).

Please read the [docs](https://github.com/estevanmaito/tailwindcss-multi-theme/) of the parent repository.

> **WARNING**: this plugin is designed for Tailwind v3!

## Table of contents

## Additional features

Based on the original version of [estevanmaito/tailwindcss-multi-theme](https://github.com/estevanmaito/tailwindcss-multi-theme/) plugin, this following has been added:

- migrate to tailwindcss@3.4.17
- plugin now accepts [options](#options)
- support for [special characters](#theme-names) in theme name

## 🚀 Get started

Just install the plugin in your awesome **tailwindcss** project:

```sh
npm install @hperchec/tailwindcss-multi-theme
```

## 🕹️ Usage

In `tailwind.config.js` add `themeVariants` to the `theme` property, with the value(s) of your theme(s), and use the plugin. That's it.

```js
// tailwind.config.js
import multiThemePlugin from '@hperchec/tailwindcss-multi-theme'

export default {
  darkMode: 'false', // ⚠ See the note below
  theme: {
    themeVariants: [
      // Define themes here
      'light',
      'dark',
      'banana'
    ],
    extend: {
      colors: {
        // Here you can add your theme specific colors...
      }
    }
  },
  plugins: [
    // Multi-theme plugin
    multiThemePlugin(),
    // ...
  ]
}
```

It will create a set of classes based on your `variants` and expect a class `.theme-<the name of your themeVariants>` at the top of your HTML document.

For example, you can set attribute `class="theme-banana"` to the `<html>` element to apply *banana* theme. In that case, an element with `banana:bg-yellow-200` will have a yellow background.

> **IMPORTANT**: While a custom theme name like "banana" will not cause conflicts in the generated CSS,
> you probably want to define "dark" theme, for which Tailwind provide support.
> Since this plugin allows you to manage a wide variety of themes, if you want to automatically
> apply a dark theme base on user preference, i recommend you to disable the **dark mode**
> in your `tailwind.config.js`: `darkMode: 'false'` and manually apply
> the corresponding theme in your JavaScript code (see [good practices](#good-practices) section)

### Options

|name              |type              |default                 |
|-                 |-                 |-                       |
|themeClassPrefix  |`String`          |`'theme-'`              |

**Example**:

```js
// tailwind.config.js
plugins: [
  multiThemePlugin({
    /**
     * Overwrite default theme class name themeClassPrefix
     * It will generate:
     * - 'light' class instead of 'theme-light'
     * - 'dark' class instead of 'theme-dark'
     * - 'banana' class instead of 'theme-banana'
     * - ...
     */
    themeClassPrefix: ''
  }),
  // ...
],
```

### Theme names

You can use special characters in your theme names (see also [CSS specification](https://www.w3.org/TR/CSS2/syndata.html#characters) or [this topic](https://stackoverflow.com/questions/2812072/allowed-characters-for-css-identifiers)).

**Example**:

Here, we add `@` prefix to the theme names to easily identify theme in class names:

```js
// tailwind.config.js
import multiThemePlugin from '@hperchec/tailwindcss-multi-theme'

export default {
  darkMode: 'false',
  theme: {
    themeVariants: [
      // Define themes here
      '@light',
      '@dark',
      '@banana'
    ],
    extend: {
      colors: {
        '@light-alabaster':     '#FAFAFA',
        '@dark-tuna':           '#36393F',
        '@banana-sandy-yellow': '#FFEA78',
        // and other theme colors...
      }
    }
  },
  plugins: [
    // Multi-theme plugin
    multiThemePlugin({
      themeClassPrefix: ''
    }),
    // ...
  ]
}
```

In this example, it will generate:

- class names: `@light`, `@dark`, `@banana` (e.g. set attribute `class="@light"` to the `<html>` element to apply *light* theme)
- tailwind variants: `@light`, `@dark`, `@banana` (e.g. set class `@dark:hover:bg-red` to apply a red background on hover for *dark* theme)

### Good practices

Here some good practices I recommend to follow

#### Theme switch

You should use something like a `<select>` and a short JavaScript code to switch between your themes:

```html
<select id="theme-select">
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="banana">Banana</option>
</select>
```

```js
let currentTheme

/**
 * Switch to the given theme by setting the corresponding class on <html> element
 * @param {string} theme - The theme to switch to
 */
function switchToTheme (theme) {
  // Remove the old class
  document.documentElement.classList.remove(`theme-@${currentTheme}`)
  // Set the new theme
  currentTheme = theme
  // Add new class on <html> element
  document.documentElement.classList.add(`theme-@${currentTheme}`)
}

window.onload = function () {
  // Add listener of change event to apply theme with the select
  document.getElementById('theme-select').onchange = function (e) {
    switchToTheme(e.target.value)
  }
}
```

If you want to automatically apply a light or dark theme based on user preference, you can do it like:

```js
window.onload = function () {
  if (!!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    switchToTheme('dark')
  } else {
    switchToTheme('light')
  }
  // Add listener of change event to apply theme with the select
  document.getElementById('theme-select').onchange = function (e) {
    switchToTheme(e.target.value)
  }
}
```

#### Colors

It's suggested to define your theme colors in a separated file (for example `./themes.js` in your project):

> **TIP**: you can use a tool like [color-name-finder](https://colors.artyclick.com/color-name-finder/) to name your colors correctly

```js
// Example: themes.js

const commonColors = {
  // primary, secondary, etc... should be the same for all themes
  "primary": "#3B68CF",
  "secondary": "#36393F",
  // ...
}

export default {
  themes: {
    // 'light' theme specific colors
    'light': {
      ...commonColors,
      'alabaster': '#FAFAFA',
      'text-primary': '#191919'
    },
    // 'dark' theme specific colors
    'dark': {
      ...commonColors,
      'tuna': '#36393F',
      'text-primary': '#F9F9F9'
    },
    // 'banana' theme specific colors
    'banana': {
      ...commonColors,
      'sandy-yellow': '#FFEA78',
      'text-primary': '#121212'
    }
  }
}
```

Then you can dynamically set in `tailwind.config.js`:

```js
// Example: tailwind.config.js
import multiThemePlugin from '@hperchec/tailwindcss-multi-theme'
import themes from './themes.js'

export default {
  darkMode: 'false',
  theme: {
    themeVariants: [
      /**
       * It will generate theme names:
       * - '@light'
       * - '@dark'
       * - '@banana'
       */
      ...Object.keys(themes).map((theme) => {
        return `@${theme}`
      })
    ],
    extend: {
      colors: {
        /**
         * It will generate colors:
         * - '@light-primary'
         * - '@light-secondary'
         * - '@light-alabaster'
         * - '@light-text-primary'
         * - '@dark-primary'
         * - '@dark-secondary'
         * - '@dark-tuna'
         * - '@dark-text-primary'
         * - '@banana-primary'
         * - '@banana-secondary'
         * - '@banana-sandy-yellow'
         * - '@banana-text-primary'
         */
        ...Object.keys(themes).reduce((colors, themeName) => {
          // Loop on theme colors
          for (const color in themes[themeName]) {
            const colorName = `@${themeName}-${color}`
            const colorValue = themes[themeName][color]
            obj[colorName] = colorValue
          }
          return obj
        }, {})
      }
    }
  },
  plugins: [
    // Multi-theme plugin
    multiThemePlugin({
      themeClassPrefix: ''
    }),
    // ...
  ],
  //...
}
```

So, you can use the generated theme colors:

```html
<!--
  Example: apply a background color and a text color to the <body> element
  depending on what theme is applied
-->
<body
  class="
    @light:bg-@light-alabaster
    @light:text-@light-text-primary
    @dark:bg-@dark-tuna
    @dark:text-@dark-text-primary
    @banana:bg-@banana-sandy-yellow
    @banana:text-@banana-text-primary
  "
>
  ...
</body>
```

OR (in style):

```scss
body {
  // 'light' theme rules
  @apply @light:bg-@light-alabaster;
  @apply @light:text-@light-text-primary;
  // 'dark' theme rules
  @apply @dark:bg-@dark-tuna;
  @apply @dark:text-@dark-text-primary;
  // 'banana' theme rules
  @apply @banana:bg-@banana-sandy-yellow;
  @apply @banana:text-@banana-text-primary;
}
```

### Examples

You can take a look at the examples in the [./examples](./examples/) folder.

## 🤝 Contribute

See the [CONTRIBUTING.md](./CONTRIBUTING.md) file.

## /┆\ Roadmap

- [ ] Rewrite examples
- [ ] Migrate from **jest** to **vitest** for tests

## ✍ Authors

- <%= $utils.link(author.name, author.url) %>
- <%= $utils.link(contributors[0].name, contributors[0].url) %>

## 📄 License

<%= license %>

## 🧬 Changelog

See all changes to this project in the [CHANGELOG.md](./CHANGELOG.md) file.

----

Made with ❤ by <%= $utils.link(author.name, author.url) %> & <%= $utils.link(contributors[0].name, contributors[0].url) %>
