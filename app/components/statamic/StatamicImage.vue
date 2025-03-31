<script setup lang="ts">
const {
  loading = 'lazy',
  width = '240',
  height = '160',
  sizes = 'small:640px normal:960px big:1280px',
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
  <figure>
    <NuxtImg
      ref="img"
      :src="data?.permalink"
      :alt="data?.alt || ''"
      :loading="loading"
      :fetch-priority="fetchPriority ?? (loading === 'lazy' ? 'low' : 'high')"
      :width="width"
      :height="height"
      :sizes="sizes"
      class="statamic-image"
      :placeholder="placeholder"
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
