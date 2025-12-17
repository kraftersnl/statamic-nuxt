<script setup lang="ts">
const { entries } = defineProps<{ entries?: StatamicArticleEntry[] }>();
</script>

<template>
  <ul role="list" class="statamic-articles-list">
    <li v-for="entry in entries" :key="entry.id" class="article-list-item">
      <StatamicArticleCard :data="entry" />
    </li>
  </ul>
</template>

<style>
.statamic-articles-list {
  display: grid;
  row-gap: 4rem;
  column-gap: 2.5rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));

  .article-list-item {
    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }
  }
}
</style>
