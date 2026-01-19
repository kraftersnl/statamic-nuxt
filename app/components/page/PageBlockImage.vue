<script setup lang="ts">
defineProps<{ data?: ImageBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'image-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
      data?.full_width && 'full-width',
    ]"
  >
    <div class="page-block-content">
      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ContentBlockMapper :content="data?.content" />
      <StatamicImage
        v-if="data?.image?.permalink"
        :data="data.image"
        :caption="data.image_caption"
        width="960"
        height="640"
      />
    </div>
  </section>
</template>

<style>
.page-block.image-block {
  &.full-width {
    .page-block-content {
      max-width: none;
      padding-inline: 0;
    }
  }

  .statamic-image {
    width: 100%;
    margin-inline: auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .page-block-content {
    max-width: var(--app-max-width);
    margin-inline: auto;
  }
}
</style>
