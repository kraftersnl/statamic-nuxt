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
    <div
      v-if="data?.image && data?.image_position?.key === 'inline-start'"
      class="image-column"
    >
      <StatamicImage :data="data.image" width="640" height="640" />
    </div>

    <div class="page-block-content">
      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ContentBlockMapper :content="data?.content" />
    </div>

    <div
      v-if="data?.image && data?.image_position?.key === 'inline-end'"
      class="image-column"
    >
      <StatamicImage :data="data.image" width="640" height="640" />
    </div>
  </section>
</template>

<style>
.page-block.two-cols-image-block {
  @media (min-width: 1200px) {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
  }

  .image-column {
    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeOut linear;
      animation-timeline: view();
      animation-range: exit;
    }

    img {
      aspect-ratio: 1;
      height: auto;
      min-height: calc(100svh - var(--app-header-height));
      width: 100%;
      object-fit: cover;
    }
  }

  .page-block-content {
    padding-block: 4rem;

    @media (min-width: 1200px) {
      padding-inline: 5rem;
    }

    p {
      max-width: 640ch;
    }
  }
}
</style>
