<script setup lang="ts">
defineProps<{
  data: StatamicQuote;
}>();
</script>

<template>
  <figure class="blockquote-wrapper">
    <blockquote v-if="data.quote">
      <p>{{ data.quote }}</p>
    </blockquote>

    <figcaption v-if="data.quote_author" class="author">
      {{ data.quote_author }}
    </figcaption>
  </figure>
</template>

<style>
.blockquote-wrapper {
  blockquote {
    border-color: var(--color-grey-bg);
  }

  .author {
    font-weight: 400;
    font-style: italic;
    font-size: var(--font-size-sm);
    color: var(--color-grey-text);
  }
}
</style>
