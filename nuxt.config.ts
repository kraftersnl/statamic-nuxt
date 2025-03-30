import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $production: {
    extends: ['github:kraftersnl/krafters-ui'],
  },

  $development: {
    extends: ['../krafters-ui'],
  },

  $test: {
    extends: ['github:kraftersnl/krafters-ui'],
  },

  runtimeConfig: {
    public: {
      siteTitle: 'Statamic Nuxt Layer',
      contactEmail: 'info@krafters.nl',
      ogImage: '/og.png',
      siteUrl: import.meta.env.NUXT_PUBLIC_SITE_URL,
      statamicUrl: import.meta.env.NUXT_PUBLIC_STATAMIC_URL,
    },
  },

  routeRules: {
    '/**': {
      isr: 60,
    },
    '/api/forms/**': {
      proxy: import.meta.env.NUXT_PUBLIC_STATAMIC_URL + '/!/forms/**',
      isr: false,
      ssr: false,
    },
  },

  css: [join(currentDir, './app/assets/main.css')],

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/robots'],

  future: {
    compatibilityVersion: 4,
  },
});
