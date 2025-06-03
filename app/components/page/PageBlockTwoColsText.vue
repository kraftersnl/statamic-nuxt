<script setup lang="ts">
defineProps<{ data: TwoColsTextBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'two-cols-text-block',
      `background-color--${data.background_color?.key}`,
      `background-shape--${data.background_shape?.key}`,
      `shape-position--${data.shape_position?.key}`,
    ]"
  >
    <CircleStripes v-if="data.background_shape?.key === 'circle_stripes'" />
    <CircleDots v-if="data.background_shape?.key === 'circle_dots'" />
    <RectangleDots v-if="data.background_shape?.key === 'rectangle_dots'" />

    <div class="page-block-content">
      <div class="left-column">
        <h2 v-if="data.super_title || data.title">
          <span v-if="data.super_title" class="super-title">
            {{ data.super_title }}
          </span>

          <span v-if="data.title" class="title">
            {{ data.title }}
          </span>
        </h2>
      </div>

      <ContentBlockMapper :content="data?.content" />
    </div>
  </section>
</template>

<style>
.page-block.two-cols-text-block {
  .page-block-content {
    display: grid;
    padding-block: 5rem;

    @media (min-width: 1200px) {
      padding-inline: var(--app-padding-inline);
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }

    .bard-content {
      padding-block-start: 3rem;
    }

    p {
      margin-block-start: 0;

      + p {
        margin-block-start: 1.5rem;
      }
    }
  }
}
</style>
