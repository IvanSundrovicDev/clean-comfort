export default defineNuxtConfig({
  compatibilityDate: '2026-06-08',

  devtools: {
    enabled: true
  },

  css: ['./main.css', 'leaflet/dist/leaflet.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}
    }
  },

  modules: ['@nuxtjs/seo'],

  schemaOrg: {
    defaults: false
  },

  site: {
    url: 'https://cleancomfort.hr',
    name: 'Clean Comfort'
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'hr'
      },

      title:
        'Profesionalno čišćenje stanova i poslovnih prostora | Clean Comfort',

      meta: [
        {
          name: 'description',
          content:
            'Profesionalno čišćenje stanova, kuća, poslovnih prostora, stubišta i apartmana u Donjem Miholjcu i okolici.'
        },

        {
          property: 'og:title',
          content: 'Clean Comfort'
        },

        {
          property: 'og:description',
          content:
            'Profesionalno čišćenje stanova i poslovnih prostora.'
        },

        {
          property: 'og:type',
          content: 'website'
        }
      ]
    }
  }
})