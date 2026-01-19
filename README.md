# Nuxt Layer for Statamic CMS

This project is a [Nuxt Layer](https://nuxt.com/docs/getting-started/layers) for [Statamic](https://statamic.dev). You can extend from the [GitHub repository](https://github.com/kraftersnl/statamic-nuxt).

## Installation

### Extend from GitHub repository

Refer to the layer with `extends` in nuxt.config.ts:

```ts
defineNuxtConfig({
  extends: ['github:kraftersnl/statamic-nuxt'],
});
```

### Extend from local folder

Refer to a local directory with `extends` in nuxt.config.ts:

```ts
defineNuxtConfig({
  $development: {
    extends: ['../statamic-nuxt'],
  },
});
```

## Configuration

Components access `useRuntimeConfig().public` for various purposes, like SEO and error handling.

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: import.meta.env.NUXT_PUBLIC_SITE_URL,
      statamicUrl: import.meta.env.NUXT_PUBLIC_STATAMIC_URL,
    },
  },
});
```

### Environment variables

You can override these values with .env variables:

```bash
NUXT_PUBLIC_SITE_URL = http://localhost:3000
NUXT_PUBLIC_STATAMIC_URL = http://localhost:8000
```

## Components & Slots

Content can be customised by using slots with `<TheLayout>` component in `app.vue`.

```html
<template>
  <TheLayout>
    <template #logo>
      <KraftersLogo />
    </template>

    <template #favicon>
      <NuxtImg src="/favicon.svg" alt="" width="120" height="120" />
    </template>

    <template #copyright>
      <span>Website door Krafters</span>
    </template>
  </TheLayout>
</template>
```
