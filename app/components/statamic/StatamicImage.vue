<script setup lang="ts">
const {
  loading = 'lazy',
  width = '240',
  height = '160',
  sizes = 'sm:320px md:640px lg:960px xl:1200px',
  placeholder = true,
} = defineProps<{
  data?: StatamicImage;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  caption?: string;
  width?: string;
  height?: string;
  placeholder?: number[] | boolean;
}>();
</script>

<template>
  <figure class="image-wrapper">
    <NuxtImg
      class="statamic-image"
      :src="data?.permalink"
      :alt="data?.alt || ''"
      :width="width"
      :height="height"
      :sizes="sizes"
      :placeholder="placeholder"
      :loading="loading"
      :preload="loading === 'eager' ? { fetchPriority: 'high' } : undefined"
      format="webp"
    />

    <figcaption v-if="caption" class="image-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style>
.image-wrapper {
  /* width:100%;
  height:100%; */
}

.statamic-image {
  height: auto;
  width: auto;
}

.image-caption {
  font-size: smaller;
  font-style: italic;
  color: var(--color-grey-text);
  padding-block-start: 1rem;
  text-align: center;
}
</style>
