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
    border-radius="md"
    padding-block="2rem"
    padding-inline="2rem"
    :shadow="false"
    :border-width="4"
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

        <p v-if="data.summary" class="card-description">
          {{ data.summary }}
        </p>

        <p class="fake-link">
          <span>Lees dit artikel</span>
          <Icon name="material-symbols:expand-circle-right-rounded" />
        </p>
      </div>

      <StatamicImage :data="data.image" :loading="loading" class="card-image" />
    </div>
  </Card>
</template>

<style>
.article-card {
  position: relative;
  height: 100%;

  &:hover {
    .fake-link {
      color: var(--color-accent-text);
    }
  }

  .card-content {
    display: grid;
    gap: 1.5rem;
  }

  .card-title {
    font-size: var(--font-size-xl);
  }

  .card-link {
    text-decoration: none;

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

  .card-description {
    font-size: var(--font-size-sm);
  }

  .card-image {
    order: -1;
    height: 180px;

    img {
      border-radius: var(--radius-sm);
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
