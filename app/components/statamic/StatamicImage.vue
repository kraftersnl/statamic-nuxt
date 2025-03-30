<script setup lang="ts">
const {
  loading = 'lazy',
  width = '240',
  height = '160',
} = defineProps<{
  data?: StatamicImage;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  caption?: string;
  width?: string;
  height?: string;
}>();
</script>

<template>
  <figure>
    <NuxtImg
      ref="img"
      :src="data?.permalink"
      :alt="data?.alt || ''"
      :loading="loading"
      :fetch-priority="fetchPriority ?? (loading === 'lazy' ? 'low' : 'high')"
      format="webp"
      quality="90"
      :width="width"
      :height="height"
      sizes="480px md:640px xl:960px"
      densities="1x 2x"
      class="statamic-image"
    />

    <figcaption v-if="caption" class="image-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<style>
.statamic-image {
  height: auto;
  width: auto;
}

.image-caption {
  padding-block-start: 1rem;
  text-align: center;
  font-style: italic;
}
</style>
