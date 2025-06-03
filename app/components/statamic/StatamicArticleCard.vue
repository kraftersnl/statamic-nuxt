<script setup lang="ts">
const { hTag = 'h3', loading = 'eager' } = defineProps<{
  data: StatamicArticleEntry;
  hTag?: string;
  loading?: 'lazy' | 'eager';
}>();

const { locale } = useI18n();
</script>

<template>
  <Card
    is="article"
    class="article-card"
    mobile-padding="0"
    padding="0"
    border-radius="md"
    :shadow="false"
    :border-width="2"
    @click="navigateTo(data.url)"
  >
    <div class="card-content">
      <div class="text-content">
        <component :is="hTag" class="card-title">
          <NuxtLink :to="data.url" class="card-link">
            {{ data.title }}
          </NuxtLink>
        </component>

        <NuxtTime
          v-if="data.date"
          :datetime="data.date"
          :locale="locale"
          day="numeric"
          month="long"
          year="numeric"
          class="card-date"
        />

        <p v-if="data.summary">{{ data.summary }}</p>
      </div>

      <StatamicImage :data="data.image" :loading="loading" class="card-image" />
    </div>
  </Card>
</template>

<style>
.article-card {
  overflow: hidden;
  cursor: pointer;
  outline-offset: 1rem;
  container-type: inline-size;
  transition: outline-offset var(--duration-md),
    outline-color var(--duration-sm);
  outline: 2px solid transparent;

  &:has(.card-link:focus-visible) {
    outline-color: var(--focus-color);
    outline-offset: 0.5rem;

    .card-link {
      outline: none;
    }
  }

  &:hover {
    /* border-color: var(--color-grey-graphic); */
    outline-color: var(--color-grey-graphic);
    outline-offset: 0.5rem;
  }

  .card-image {
    order: -1;

    img {
      object-fit: cover;
      width: 100%;
      aspect-ratio: 2 / 1;

      @container (min-width: 720px) {
        aspect-ratio: 3/2;
      }
    }
  }

  .card-content {
    height: 100%;
    display: grid;

    @container (min-width: 720px) {
      grid-template-columns: 360px 1fr;
    }
  }

  .text-content {
    padding: 1.5rem 2rem;

    @media (min-width: 480px) {
      padding: 2rem 2.5rem;
    }
  }

  .card-title {
    font-size: var(--font-size-lg);
    margin-bottom: 2rem;
  }

  p {
    margin-block-end: 0;
    font-size: var(--font-size-sm);
  }

  .card-date {
    display: block;
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-xs);
    color: var(--color-grey-text);
    margin-bottom: 0.5rem;
  }
}
</style>
