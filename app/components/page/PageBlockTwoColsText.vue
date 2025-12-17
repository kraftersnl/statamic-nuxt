<script setup lang="ts">
defineProps<{ data?: TwoColsTextBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'two-cols-text-block',
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

      <div class="left-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

        <p v-if="data?.description">{{ data.description }}</p>

        <slot />
      </div>

      <div class="right-column">
        <ContentBlockMapper :content="data?.content" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.two-cols-text-block {
  .page-block-content {
    padding-block: 8rem;

    @media (min-width: 1200px) {
      padding-block-end: 8rem;
      display: grid;
      padding-inline: var(--app-padding-inline);
      gap: 4rem;
      grid-template-columns: 1fr 1fr;
    }

    .bard-content {
      @media (min-width: 1200px) {
        padding-block-start: 1.5rem;
      }

      > :first-child {
        margin-block: 0;
      }
    }

    p,
    ul {
      margin-block-start: 0;

      + p,
      + ul {
        margin-block-start: 1.5rem;
      }
    }
  }

  .right-column {
    @media (prefers-reduced-motion: no-preference) {
      animation: viewportFadeUp linear;
      animation-timeline: view();
      animation-range: entry;
    }
  }
}
</style>
