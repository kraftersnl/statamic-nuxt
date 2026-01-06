<script setup lang="ts">
defineProps<{
  data: StatamicQuote;
}>();
</script>

<template>
  <figure class="statamic-quote">
    <blockquote v-if="data.quote">
      <p>{{ data.quote }}</p>
    </blockquote>

    <figcaption v-if="data.quote_author" class="author">
      {{ data.quote_author }}
    </figcaption>
  </figure>
</template>

<style>
.statamic-quote {
  blockquote {
    border: none;
    padding-inline-start: 0;
  }

  .author {
    font-style: italic;
    font-size: smaller;
    color: var(--color-grey-text);
  }
}
</style>
