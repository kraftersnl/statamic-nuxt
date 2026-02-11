import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $production: {
    extends: ['github:kraftersnl/krafters-ui'],
  },

  $test: {
    extends: ['github:kraftersnl/krafters-ui'],
  },

  $development: {
    extends: ['../krafters-ui'],
    ssr: false,
  },

  runtimeConfig: {
    public: {
      ogImage: '/og.png',
      siteUrl: import.meta.env.NUXT_PUBLIC_SITE_URL,
      statamicUrl: import.meta.env.NUXT_PUBLIC_STATAMIC_URL,
    },
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

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

  image: {
    quality: 80,
    densities: [1, 2],
    screens: {
      sm: 320,
      md: 640,
      lg: 1200,
    },
  },

  site: {
    url: import.meta.env.NUXT_PUBLIC_SITE_URL,
    name: import.meta.env.NUXT_PUBLIC_SITE_NAME,
  },

  css: [join(currentDir, './app/assets/main.css')],

  compatibilityDate: '2026-02-11',

  future: {
    compatibilityVersion: 4,
  },
});
