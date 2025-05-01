import { init } from '@github/markdownlint-github'

const options = {
  // See also https://www.npmjs.com/package/@github/markdownlint-github
  config: init({
    // ... Custom overrides
  }),
  customRules: [
    '@github/markdownlint-github'
  ],
  outputFormatters: [
    [
      'markdownlint-cli2-formatter-pretty',
      {
        appendLink: true // ensures the error message includes a link to the rule documentation
      }
    ]
  ]
}

export default options
