<script setup lang="ts">
const { data: nav } = await useAsyncData<{ data: NavTreeItem[] }>(
  'sitemap',
  () =>
    $fetch('/api/navs/sitemap/tree', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    })
);

useHead({ title: 'Sitemap' });
</script>

<template>
  <div class="sitemap-page">
    <h1>Sitemap</h1>

    <nav aria-label="Sitemap navigatie">
      <ul>
        <li v-for="page in nav?.data" :key="page.page.id">
          <NuxtLink :to="page.page.link || page.page.url">
            {{ page.page.title }}
          </NuxtLink>

          <ul v-if="page.children.length">
            <li v-for="childPage in page.children" :key="childPage.page.id">
              <NuxtLink :to="childPage.page.link || childPage.page.url">
                {{ childPage.page.title }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
.sitemap-page {
  padding-block: 4rem;
  margin-inline: auto;
  width: 100%;
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);

  h1 {
    font-size: var(--font-size-xl);
    margin-block-end: 2rem;
  }

  a {
    &:hover {
      color: var(--color-accent-text);
    }
  }

  li {
    margin-block-end: 0.25em;

    &::marker {
      color: var(--color-accent-graphic);
    }

    > ul {
      margin-block-start: 0.25em;
    }
  }
}
</style>
