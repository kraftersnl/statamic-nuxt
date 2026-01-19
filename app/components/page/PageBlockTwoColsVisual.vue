<script setup lang="ts">
defineProps<{ data?: TwoColsVisualBlock }>();
</script>

<template>
  <section :id="data?.anchor" :class="['page-block', 'two-cols-visual-block']">
    <div class="page-block-content">
      <div
        v-if="
          data?.graphic_visual?.key &&
          data?.image_position?.key === 'inline-start'
        "
        class="visual-column"
      >
        <VisualMapper :visual="data?.graphic_visual?.key" />
      </div>

      <div class="text-column">
        <DoubleTitle :title="data?.title" :super-title="data?.super_title" />

        <ContentBlockMapper :content="data?.content" />
      </div>

      <div
        v-if="
          data?.graphic_visual?.key &&
          data?.image_position?.key === 'inline-end'
        "
        class="visual-column"
      >
        <VisualMapper :visual="data?.graphic_visual?.key" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.two-cols-visual-block {
  .page-block-content {
    padding-block: 4rem;
    display: grid;
    gap: 4rem;

    @media (min-width: 1200px) {
      padding-block-end: 8rem;
      grid-template-columns: 1fr 1fr;

      .double-title {
        .title {
          font-weight: var(--font-weight-bold);
        }

        &:has(.super-title):not(:has(.title)) {
          margin-block: 0;
        }
      }

      h2,
      h3 {
        margin-block: 0 2rem;
      }
    }

    .text-column {
      @supports (animation-timeline: view()) {
        opacity: 0;

        @media (prefers-reduced-motion: no-preference) {
          animation: viewportFadeUp linear forwards;
          animation-timeline: view();
          animation-range: entry;
        }
      }
    }

    .visual-column {
      @supports (animation-timeline: view()) {
        opacity: 0;

        @media (prefers-reduced-motion: no-preference) {
          animation: fadeIn linear forwards;
          animation-timeline: view();
          animation-range: entry;
        }
      }
    }
  }
}
</style>
