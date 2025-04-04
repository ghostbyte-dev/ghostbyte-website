import {defineRouting} from 'next-intl/routing';
 
export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['en', 'de'],
 
  // Used when no locale matches
  defaultLocale: 'en',
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/privacy-policy": {
      de: "/datenschutz"
    },
    "/imprint": {
      de: "/impressum"
    }
  }
});