import { describe, it, expect, vi } from 'vitest'
import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import plugin from '@/index'

// ---------------------------------------------------

const generatePluginCss = (config = {}, pluginOptions = {}) => {
  return postcss(
    tailwindcss({
      // @ts-ignore
      darkMode: 'false',
      content: [
        // Set default content to suppress warnings
        {
          raw: String.raw`<div class="font-bold"></div>`,
          extension: 'html'
        }
      ],
      theme: {
        themeVariants: [
          'light',
          'dark',
          'banana'
        ]
      },
      plugins: [
        plugin(pluginOptions)
      ],
      ...config,
    })
  )
    .process('@tailwind components; @tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => {
      return css
    })
}

describe('plugin', () => {
  it('should throw if there is no themeVariants property inside theme', async () => {
    await expect(() => generatePluginCss({
      theme: {}
    }))
      .rejects
      .toThrowError(/tailwindcss-multi-theme expects a themeVariants property in theme./) // try to find this message sample in Error message
  })

  it('should throw if themeVariants is not an Array', async () => {
    await expect(() => generatePluginCss({
      theme: {
        themeVariants: 'dark'
      }
    }))
      .rejects
      .toThrowError(/tailwindcss-multi-theme expects themeVariants to be an Array./) // try to find this message sample in Error message
  })

  it('should throw if themeVariants is empty', async () => {
    await expect(() => generatePluginCss({
      theme: {
        themeVariants: []
      }
    }))
      .rejects
      .toThrowError(/tailwindcss-multi-theme found themeVariants but it is empty. Pass it a list of strings or remove it./) // try to find this message sample in Error message
  })

  it('should generate base classes variants', async () => {
    expect(await generatePluginCss({
      content: [
        {
          raw: String.raw`<div class="dark:bg-white"></div>`,
          extension: 'html'
        }
      ]
    }))
      .toMatchCss(String.raw`
        .theme-dark .dark\:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
        }
      `)
  })

  it('should accept allowed characters for css identifiers in theme variant name and escape it', async () => {
    expect(await generatePluginCss({
      content: [
        {
          raw: String.raw`<div class="@dark:bg-white"></div>`,
          extension: 'html'
        }
      ],
      theme: {
        themeVariants: [
          '@dark'
        ]
      }
    }))
      .toMatchCss(String.raw`
        .theme-\@dark .\@dark\:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
        }
      `)
  })

  it('should generate valid style with combined variants', async () => {
    expect(await generatePluginCss({
      content: [
        {
          raw: String.raw`<div class="dark:md:hover:bg-white"></div>`,
          extension: 'html'
        }
      ]
    }))
      .toMatchCss(String.raw`
        @media (min-width: 768px) {
          .theme-dark .dark\:md\:hover\:bg-white:hover {
            --tw-bg-opacity: 1;
            background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
          }
        }
      `)
  })

  it('should process themeClassPrefix plugin option and adapt class names', async () => {
    expect(await generatePluginCss({
      content: [
        {
          raw: String.raw`<div class="banana:bg-white"></div>`,
          extension: 'html'
        }
      ]
    }, {
      themeClassPrefix: 'prefix_'
    }))
      .toMatchCss(String.raw`
        .prefix_banana .banana\:bg-white {
          --tw-bg-opacity: 1;
          background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
        }
      `)
  })
})
