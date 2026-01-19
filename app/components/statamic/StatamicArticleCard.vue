<script setup lang="ts">
const { hTag = 'h2', loading = 'eager' } = defineProps<{
  data: StatamicArticleEntry;
  hTag?: string;
  loading?: 'lazy' | 'eager';
}>();
</script>

<template>
  <Card
    is="article"
    class="article-card"
    background-color="transparent"
    border-color="transparent"
    :shadow="false"
  >
    <div class="card-content">
      <div class="text-content">
        <component :is="hTag" class="card-title">
          <NuxtLink :to="data.url" class="card-link">
            {{ data.title }}
          </NuxtLink>
        </component>

        <div v-if="data.author" class="card-author">
          Door {{ data.author?.name }}
        </div>

        <!-- <p v-if="data.summary" class="card-description">
          {{ data.summary }}
        </p> -->
      </div>

      <TaxonomyTags :tags="data?.tags" />

      <StatamicImage
        v-if="data?.image?.permalink"
        :data="data.image"
        :loading="loading"
        class="card-image"
      />
      <div v-else class="card-image" />
    </div>
  </Card>
</template>

<style>
.article-card {
  position: relative;
  height: 100%;

  padding: 0 !important;

  .card-content {
    display: grid;
  }

  .text-content {
    margin-block-end: 1rem;
  }

  .card-title {
    font-size: var(--font-size-lg);
    margin-block-end: 1em;

    min-height: 58px;
  }

  .card-link {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &::after {
      /* increase click target */
      z-index: 1;
      position: absolute;
      content: '';
      inset: 0;
    }
  }

  .card-date {
    font-size: var(--font-size-xs);
    color: var(--color-grey-text);
  }

  .card-author {
    font-size: var(--font-size-xs);
    color: var(--color-grey-text);
  }

  .card-description {
    font-size: var(--font-size-sm);
    margin-block-end: 0;
  }

  .card-image {
    order: -1;
    margin-block-end: 1.5rem;
    background-color: var(--color-accent-grey);
    img {
      aspect-ratio: 3 / 2;
    }
  }

  .fake-link {
    margin-block-start: 2.5rem;
    margin-block-end: 0;
    display: flex;
    align-items: center;
    gap: 0.35em;
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-bold);
    text-decoration: underline;
    text-underline-offset: 0.15em;

    .iconify {
      font-size: var(--font-size-md);
    }
  }
}
</style>
