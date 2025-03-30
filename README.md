# Nuxt Layer for Statamic CMS

This project is a [Nuxt Layer](https://nuxt.com/docs/getting-started/layers) for [Statamic](https://statamic.dev) in a private repository. You can extend from the [GitHub repository](https://github.com/kraftersnl/statamic-nuxt).

## Installation

Copy example .env file and [create a Personal Access Token at GitHub](https://github.com/settings/tokens?type=beta). See [unjs/giget documentation](https://github.com/unjs/giget/#providing-token-for-private-repositories) for more information.

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

## Development

- Run `pnpm i` to install dependencies
- Run `pnpm run dev` to start the development server on [localhost:3000](http://localhost:3000)
