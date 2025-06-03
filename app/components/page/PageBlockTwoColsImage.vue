<script setup lang="ts">
defineProps<{ data: TwoColsImageBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'two-cols-image-block',
      `background-color--${data.background_color?.key}`,
    ]"
  >
    <div
      v-if="data?.image && data?.image_position?.key === 'inline-start'"
      class="image-column"
    >
      <StatamicImage
        :data="data.image"
        width="800"
        height="800"
        sizes="mobile:400px normal:800px"
      />
    </div>

    <div class="page-block-content">
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

    <div
      v-if="data?.image && data?.image_position?.key === 'inline-end'"
      class="image-column"
    >
      <StatamicImage
        :data="data.image"
        width="800"
        height="800"
        sizes="mobile:400px normal:800px"
      />
    </div>
  </section>
</template>

<style>
.page-block.two-cols-image-block {
  display: grid;

  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  h2 {
    margin-block-end: 0;
    display: grid;

    .super-title {
      font-size: var(--font-size-xxxs);
      color: var(--color-grey-text);
      letter-spacing: 10%;
      text-transform: uppercase;
      margin-block-end: 1.5rem;
    }

    .title {
      max-width: 18ch;
    }
  }

  .image-column {
    img {
      aspect-ratio: 1;
      height: auto;
      width: 100%;
      object-fit: cover;
    }
  }

  .page-block-content {
    padding-block: 5rem 2rem;

    @media (min-width: 1024px) {
      padding-inline: 5rem;
      padding-block-start: 8rem;
    }

    p {
      max-width: 37ch;
    }
  }
}
</style>
