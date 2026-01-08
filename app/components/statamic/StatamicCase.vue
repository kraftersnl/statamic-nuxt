<script setup lang="ts">
defineProps<{
  data?: StatamicCaseEntry;
}>();
</script>

<template>
  <div class="case-entry">
    <div class="case-title-wrapper">
      <NuxtLink :to="data?.url" class="case-link">
        <h2>{{ data?.title }}</h2>
      </NuxtLink>

      <span class="case-sub-title">{{ data?.sub_title }}</span>
    </div>

    <TaxonomyTags :tags="data?.tags" />

    <StatamicImage
      v-if="data?.image"
      :data="data.image"
      width="960"
      height="320"
      class="case-image"
    />
  </div>
</template>

<style>
.case-entry {
  display: grid;
  gap: 1em;

  .case-link {
    text-decoration: none;
    color: inherit;

    &:hover {
      text-decoration: underline;
    }
  }

  .case-title-wrapper {
    display: grid;
    gap: 0.5em;

    h2 {
      font-size: var(--font-size-lg);
    }
  }

  .case-sub-title {
    order: -1;
    color: var(--color-grey-text);
    font-size: var(--font-size-sm);
  }

  .case-image {
    order: -1;
    width: 100%;

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }
  }
}
</style>
