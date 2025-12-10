<script setup lang="ts">
defineProps<{
  data?: StatamicProjectEntry;
}>();
</script>

<template>
  <div class="project-entry">
    <DoubleTitle :title="data?.title" :super-title="data?.sub_title" />

    <p v-if="data?.summary">{{ data.summary }}</p>

    <StatamicImage
      v-if="data?.image"
      :data="data.image"
      width="960"
      height="320"
      class="project-image"
    />
  </div>
</template>

<style>
.project-entry {
  text-align: center;

  h2 .title {
    max-width: none;
    font-size: var(--font-size-xxl);
  }
  .project-image {
    width: 100%;

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }

    img {
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }
  }
}
</style>
