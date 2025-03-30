import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $production: {
    extends: [
      'github:kraftersnl/krafters-ui',
      { auth: process.env.GIGET_AUTH },
    ],
  },

  $development: {
    extends: ['../krafters-ui'],
  },

  $test: {
    extends: [
      'github:kraftersnl/krafters-ui',
      { auth: process.env.GIGET_AUTH },
    ],
  },

  runtimeConfig: {
    public: {
      siteTitle: 'Statamic Nuxt Layer',
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

  app: {
    head: {
      link: [{ rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    },
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: ['heroicons-solid:sun', 'heroicons-solid:moon'],
    },
  },

  // eslint: {
  //   config: {
  //     rootDir: fileURLToPath(new URL('..', import.meta.url)),
  //   },
  // },

  modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/robots'],

  css: [join(currentDir, './app/assets/main.css')],

  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
});
