# Nuxt Layer for Statamic CMS

This project is a [Nuxt Layer](https://nuxt.com/docs/getting-started/layers) for [Statamic](https://statamic.dev). You can extend from the [GitHub repository](https://github.com/kraftersnl/statamic-nuxt).

## Installation

Copy example .env file:

```bash
cp .env.example .env
```

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
  extends: ['../statamic-nuxt'],
});
```
