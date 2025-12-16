<script setup lang="ts">
defineProps<{ data?: BasicBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'basic-block',
      data?.image_position?.key &&
        `image-position--${data?.image_position.key}`,
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
      data?.background_shape?.key &&
        `background-shape--${data.background_shape.key}`,
      data?.shape_position?.key && `shape-position--${data.shape_position.key}`,
    ]"
  >
    <div class="page-block-content">
      <CircleStripes v-if="data?.background_shape?.key === 'circle_stripes'" />
      <CircleDots v-if="data?.background_shape?.key === 'circle_dots'" />
      <RectangleDots v-if="data?.background_shape?.key === 'rectangle_dots'" />

      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ContentBlockMapper :content="data?.content" />
    </div>

    <StatamicImage
      v-if="data?.image?.permalink"
      :data="data.image"
      :caption="data.image_caption"
      width="960"
      height="640"
      class="image-column"
    />
  </section>
</template>

<style>
.page-block.basic-block {
  margin-inline: auto;

  .image-column {
    padding-inline: var(--app-padding-inline);
    margin-inline: auto;
    max-width: var(--app-max-width);

    img {
      width: 100%;
      object-fit: contain;
      border-radius: var(--radius-lg);
    }
  }

  .page-block-content {
    max-width: var(--app-max-width);

    @media (min-width: 1200px) {
      padding-inline: var(--app-padding-inline);
    }
  }
}

@media (min-width: 768px) {
  .image-position--block-start {
    .image-column {
      order: -1;
    }
  }

  .image-position--inline-end {
    &:has(.image-column) {
      display: grid;
      align-items: center;
      gap: 4rem;
      grid-template-columns: 1fr min(400px, 40vw);
    }
  }

  .image-position--inline-start {
    &:has(.image-column) {
      display: grid;
      align-items: center;
      gap: 4rem;
      grid-template-columns: min(400px, 40vw) 1fr;
    }

    .image-column {
      order: -1;
    }
  }
}
</style>
