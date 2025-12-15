<script setup lang="ts">
defineProps<{ data?: TwoColsImageBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'two-cols-image-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div class="page-block-content">
      <div
        v-if="data?.image && data?.image_position?.key === 'inline-start'"
        class="image-column"
      >
        <StatamicImage :data="data.image" width="640" height="640" />
      </div>

      <div class="text-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

        <ContentBlockMapper :content="data?.content" />
      </div>

      <div
        v-if="data?.image && data?.image_position?.key === 'inline-end'"
        class="image-column"
      >
        <StatamicImage :data="data.image" width="640" height="640" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.two-cols-image-block {
  &:not(:last-child) {
    margin-block-end: 8rem;
  }

  h2 {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-medium);
  }

  .page-block-content {
    display: grid;
    row-gap: 4rem;
    column-gap: 8rem;

    @media (min-width: 1200px) {
      grid-template-columns: 3fr 4fr;
    }
  }

  .image-column {
    @media (prefers-reduced-motion: no-preference) {
      animation: fadeOut linear;
      animation-timeline: view();
      animation-range: exit;
    }

    img {
      aspect-ratio: 1;
      width: 100%;
      object-fit: cover;
    }
  }

  .text-column {
    padding-block-end: 1.5rem;
  }
}
</style>
