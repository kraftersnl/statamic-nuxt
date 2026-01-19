<script setup lang="ts">
defineProps<{ data: ColumnsBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'columns-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <div
      v-for="(col, i) in data.columns"
      :key="i"
      :class="[
        'page-block-column',
        col.background_color?.key &&
          `background-color--${col.background_color.key}`,
      ]"
    >
      <div
        v-if="col.super_title || col.title || col.content?.length"
        class="page-block-content"
      >
        <ContentBlockMapper :content="col?.content" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.columns-block {
  display: flex;
  flex-wrap: wrap;
  max-width: var(--app-max-width);
  margin-inline: auto;
  gap: 0.5rem;

  .page-block-column {
    flex-basis: 20rem;
    flex-grow: 1;

    @supports (animation-timeline: view()) {
      opacity: 0;

      @media (prefers-reduced-motion: no-preference) {
        animation: viewportFadeUp linear forwards;
        animation-timeline: view();
        animation-range: entry;
      }
    }
  }

  @media (min-width: 1200px) {
    justify-content: space-between;
  }

  .page-block-content {
    padding-block: 2rem;

    .statamic-icon {
      color: var(--color-accent-graphic);
    }
  }

  .page-block-column {
    &.background-color--grey {
      background-color: var(--color-grey-bg);
    }

    &.background-color--white {
      background-color: var(--color-white);
    }

    &.background-color--black {
      --color-grey-text: hsl(132 4% 76%);
      --color-accent-text: hsl(232 79% 66%);
      background-color: var(--color-black-bg);
      color: #ffffff;
    }
  }
}
</style>
