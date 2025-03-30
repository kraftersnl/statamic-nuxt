export default defineNuxtConfig({
  extends: ['..'],

  runtimeConfig: {
    public: {
      siteTitle: 'Demo',
      contactEmail: 'info@krafters.nl',
    },
  },

  app: {
    head: {
      title: 'Demo',
    },
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,
      icons: [
        'heroicons-solid:sun',
        'heroicons-solid:moon',
        'heroicons-solid:menu-alt-2',
        'heroicons-solid:x',
      ],
    },
  },

  compatibilityDate: '2025-03-30',

  future: {
    compatibilityVersion: 4,
  },
});
