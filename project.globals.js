import { defineGlobals } from 'juisy'

export default defineGlobals(
  {
    // The environment variables to auto includes in "ENV" property
    env: { map: [ 'NODE_ENV' ] }
  },
  // Access to all environment variables and package.json info
  ({ env, pkg }) => {
    return {
      CONTRIBUTORS: pkg.contributors.map(contributor => ({
        EMAIL: contributor.email,
        NAME: contributor.name,
        URL: contributor.url
      })),
      // Define your brand specific constants
      BRAND: {
        NAME: 'My brand',
        COLORS: {
          /**
           * Example
           * GERALDINE: '#FF8E92',
           * SAND: '#FFC17A'
           */
        }
      }
    }
  }
)
