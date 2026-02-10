<script setup lang="ts">
defineProps<{ data?: ArticlesBlock }>();
</script>

<template>
  <section :id="data?.anchor" class="page-block articles-block">
    <div class="page-block-content">
      <slot />

      <ContentBlockMapper :content="data?.content" />

      <StatamicArticleList
        v-if="data?.entries?.length"
        :entries="data.entries"
      />
      <StatamicBlog v-else :limit="data?.limit" />

      <Button
        v-if="data?.link?.url"
        :to="data?.link?.url"
        :label="data?.link_label"
        icon="material-symbols:arrow-right-alt-rounded"
        icon-pos="end"
        variant="topbar"
        font-size="sm"
        class="articles-link"
      />
    </div>
  </section>
</template>

<style>
.articles-block {
  .page-block-content {
    margin-inline: auto;
    padding-inline: var(--app-padding-inline);
    max-width: var(--app-max-width);
    padding-block-start: 5rem;
    padding-block-end: 8rem;
    display: grid;
  }

  .bard-content h2 {
    margin-block-end: 4rem;
  }

  .double-title {
    text-align: center;

    .title {
      margin-inline: auto;
    }
  }

  .articles-link {
    --button-hover-color: var(--color-accent-text);
    --button-underline-color: var(--color-accent-graphic);
    --button-underline-thickness: 1px;

    justify-self: end;
    margin-block-start: 4rem;
    font-weight: var(--font-weight-medium);
  }
}
</style>
