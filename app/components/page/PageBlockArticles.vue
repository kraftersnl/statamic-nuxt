<script setup lang="ts">
defineProps<{ data?: ArticlesBlock }>();
</script>

<template>
  <section class="page-block articles-block">
    <slot />

    <ContentBlockMapper :content="data?.content" />

    <ul v-if="data?.entries?.length" class="entries-list" role="list">
      <li v-for="entry in data.entries" :key="entry.id">
        <StatamicArticleCard :data="entry" />
      </li>
    </ul>
  </section>
</template>

<style>
.articles-block {
  .page-block-content {
    min-width: 100%;
    max-width: 800px;
    display: grid;
    justify-content: center;
    justify-items: center;
    gap: 4rem;
    text-align: center;
  }

  .entries-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-inline: auto;
    padding-inline: var(--app-padding-inline);
    max-width: var(--app-max-width);

    > * {
      flex-basis: calc(420px - var(--app-padding-inline, 2rem));

      @media (min-width: 1024px) {
        flex-basis: 100%;
      }
    }
  }
}
</style>
