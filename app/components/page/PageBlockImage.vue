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
      <h2 v-if="data?.super_title || data?.title">
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
      width="960"
      height="640"
      sizes="mobile:400px normal:800px"
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
