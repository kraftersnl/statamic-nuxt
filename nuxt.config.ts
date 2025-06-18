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

  image: {
    quality: 80,
    format: ['avif', 'webp'],
    densities: [1, 2],
    screens: {
      small: 320,
      small2x: 640,
      normal: 480,
      normal2x: 960,
      big: 960,
      big2x: 1920,
    },
  },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
  ],

  css: [join(currentDir, './app/assets/main.css')],

  future: {
    compatibilityVersion: 4,
  },
});
