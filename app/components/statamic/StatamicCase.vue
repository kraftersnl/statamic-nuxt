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
  position: relative;
  display: grid;

  .case-link {
    text-decoration: none;
    color: inherit;

    &::after {
      /* increase click target */
      z-index: 1;
      position: absolute;
      content: '';
      inset: 0;
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
    margin-block-end: 1.5rem;
    width: 100%;
    transition: filter var(--duration-xs) ease-in-out;

    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }
  }

  &:has(.case-link:hover) {
    .case-image {
      filter: brightness(0.65);
    }
  }
}
</style>
