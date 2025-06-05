<script setup lang="ts">
defineProps<{ data: BasicBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'basic-block',
      data?.image_position?.key &&
        `image-position--${data?.image_position.key}`,
      data.background_color?.key &&
        `background-color--${data.background_color.key}`,
      data.background_shape?.key &&
        `background-shape--${data.background_shape.key}`,
      data.shape_position?.key && `shape-position--${data.shape_position.key}`,
    ]"
  >
    <div class="page-block-content">
      <CircleStripes v-if="data.background_shape?.key === 'circle_stripes'" />
      <CircleDots v-if="data.background_shape?.key === 'circle_dots'" />
      <RectangleDots v-if="data.background_shape?.key === 'rectangle_dots'" />

      <h2 v-if="data.super_title || data.title">
        <span v-if="data.super_title" class="super-title">
          {{ data.super_title }}
        </span>

        <span v-if="data.title" class="title">
          {{ data.title }}
        </span>
      </h2>

      <ContentBlockMapper :content="data?.content" />
    </div>

    <StatamicImage
      v-if="data?.image?.permalink"
      :data="data.image"
      :caption="data.image_caption"
      width="400"
      height="267"
      sizes="mobile:400px normal:800px"
      class="image-column"
    />
  </section>
</template>

<style>
.page-block.basic-block {
  margin-inline: auto;

  .image-column {
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
    margin-block-start: 0.25rem;
    margin-block-end: 1.5rem;

    img {
      width: 100%;
      object-fit: contain;
      border-radius: var(--radius-lg);
    }
  }

  .page-block-content {
    max-width: var(--app-max-width);
    padding-block: 5rem;

    @media (min-width: 1200px) {
      padding-inline: var(--app-padding-inline);
    }

    p {
      max-width: 58ch;
    }
  }
}

@media (min-width: 768px) {
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
