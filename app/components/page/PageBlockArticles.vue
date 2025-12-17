<script setup lang="ts">
defineProps<{ data?: ArticlesBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block articles-block">
    <div class="page-block-content">
      <slot />

      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ContentBlockMapper :content="data?.content" />

      <StatamicArticleList
        v-if="data?.entries?.length"
        :entries="data.entries"
      />
      <StatamicBlog v-else />
    </div>
  </section>
</template>

<style>
.articles-block {
  .page-block-content {
    margin-inline: auto;
    padding-inline: var(--app-padding-inline);
    max-width: var(--app-max-width);
    padding-block-start: 4rem;
    padding-block-end: 8rem;
  }

  .double-title {
    text-align: center;

    .title {
      margin-inline: auto;
    }
  }

  .entries-list {
    margin-block-start: 3.5rem;
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fill, minmax(min(100%, 380px), 1fr));

    :nth-of-type(odd) .card {
      background-color: var(--color-grey-bg);
    }
  }
}
</style>
