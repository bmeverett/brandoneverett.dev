// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Brandon Everett'
export const SITE_DESCRIPTION = "Brandon Everett's Site"
export const TWITTER_HANDLE = '@bme2010'
export const MY_NAME = 'Brandon Everett'

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE)
export const SITE_URL = BASE_URL.origin
