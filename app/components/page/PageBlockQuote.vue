<script setup lang="ts">
defineProps<{
  data: QuotePageBlock;
}>();
</script>

<template>
  <div class="page-block quote-block">
    <div class="page-block-content">
      <figure class="blockquote-wrapper">
        <blockquote v-if="data?.quote">
          <p>{{ data?.quote }}</p>
        </blockquote>

        <figcaption v-if="data?.author_name" class="author">
          <span class="author-name">{{ data?.author_name }}</span>

          <span v-if="data?.author_sub_title" class="author-subtitle">
            {{ data?.author_sub_title }}
          </span>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<style>
.page-block.quote-block {
  padding-block: 8rem;

  .blockquote-wrapper {
    text-align: center;

    blockquote {
      border: none;
      padding-inline-start: 0;

      p {
        font-family: var(--font-family-heading);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-xl);
        font-style: normal;
        line-height: var(--line-height-heading);
      }
    }

    .author {
      display: grid;
      gap: 0.125em;
      font-size: var(--font-size-xs);
    }
  }

  .author-name {
    font-weight: var(--font-weight-bold);
  }

  .author-subtitle {
    color: var(--color-grey-text);
  }
}
</style>
