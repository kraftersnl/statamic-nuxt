<script setup lang="ts">
defineProps<{ data?: BasicBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'image-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div class="page-block-content">
      <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

      <ContentBlockMapper :content="data?.content" />
    </div>

    <StatamicImage
      v-if="data?.image?.permalink"
      :data="data.image"
      :caption="data.image_caption"
      width="360"
      height="240"
    />
  </section>
</template>

<style>
.page-block.image-block {
  .statamic-image {
    width: 100%;
    max-width: 1280px;
    margin-inline: auto;

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .page-block-content {
    padding-block: 2rem;
    max-width: var(--app-max-width);
    margin-inline: auto;
  }
}
</style>
