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
  margin-block-end: 8rem;

  .page-block-content {
    display: grid;
    gap: 4rem;

    p:first-of-type {
      margin-block-start: 0;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 1fr 1fr;
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

  .page-block-content {
    @media (min-width: 1200px) {
      padding-inline: 5rem;
    }

    p {
      max-width: 640ch;
    }
  }
}
</style>
