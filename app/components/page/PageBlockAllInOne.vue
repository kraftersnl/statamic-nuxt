<script setup lang="ts">
defineProps<{ data?: AllInOneBlock }>();
</script>

<template>
  <section
    :id="data?.anchor"
    :class="[
      'page-block',
      'all-in-one-block',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
      data?.margin_block_start?.key &&
        `margin-block-start--${data.margin_block_start.key}`,
      data?.margin_block_end?.key &&
        `margin-block-end--${data.margin_block_end.key}`,
      data?.padding_block_start?.key &&
        `padding-block-start--${data.padding_block_start.key}`,
      data?.padding_block_end?.key &&
        `padding-block-end--${data.padding_block_end.key}`,
    ]"
  >
    <div
      :class="[
        'page-block-content',
        data?.align_items?.key && `align-items--${data.align_items.key}`,
      ]"
      :style="{
        gap: data?.gap ? `${data.gap}px` : '1.5rem',
      }"
    >
      <div
        v-for="(col, i) in data.columns"
        :key="i"
        :class="[
          'page-block-column',
          col.background_color?.key &&
            `background-color--${col.background_color.key}`,
        ]"
        :style="{
          flexBasis:
            col?.col_max_width && col.col_max_width_unit?.key
              ? `${col.col_max_width}${col.col_max_width_unit?.key}`
              : undefined,
        }"
      >
        <ContentBlockMapper :content="col?.content" />
      </div>
    </div>
  </section>
</template>

<style>
.page-block.all-in-one-block {
  margin-inline: auto;

  &.margin-block-start--sm {
    margin-block-start: 1.5rem;
  }
  &.margin-block-start--md {
    margin-block-start: 2.5rem;
  }
  &.margin-block-start--lg {
    margin-block-start: 4rem;
  }
  &.margin-block-start--xl {
    margin-block-start: 6rem;
  }
  &.margin-block-start--xxl {
    margin-block-start: 8rem;
  }

  &.margin-block-end--sm {
    margin-block-end: 1.5rem;
  }
  &.margin-block-end--md {
    margin-block-end: 2.5rem;
  }
  &.margin-block-end--lg {
    margin-block-end: 4rem;
  }
  &.margin-block-end--xl {
    margin-block-end: 6rem;
  }
  &.margin-block-end--xxl {
    margin-block-end: 8rem;
  }

  &.padding-block-start--sm {
    padding-block-start: 1.5rem;
  }
  &.padding-block-start--md {
    padding-block-start: 2.5rem;
  }
  &.padding-block-start--lg {
    padding-block-start: 4rem;
  }
  &.padding-block-start--xl {
    padding-block-start: 6rem;
  }
  &.padding-block-start--xxl {
    padding-block-start: 8rem;
  }

  &.padding-block-end--sm {
    padding-block-end: 1.5rem;
  }
  &.padding-block-end--md {
    padding-block-end: 2.5rem;
  }
  &.padding-block-end--lg {
    padding-block-end: 4rem;
  }
  &.padding-block-end--xl {
    padding-block-end: 6rem;
  }
  &.padding-block-end--xxl {
    padding-block-end: 8rem;
  }

  .page-block-content {
    display: flex;
    flex-wrap: wrap;
    margin-inline: auto;
    gap: 1.5rem;

    &.align-items--stretch {
      align-items: stretch;
    }
    &.align-items--start {
      align-items: flex-start;
    }
    &.align-items--center {
      align-items: center;
    }
    &.align-items--end {
      align-items: flex-end;
    }
  }

  .page-block-column {
    flex-basis: 20rem;
    flex-grow: 1;
    &[class*='background-color--'] {
      padding-block: 2rem;
      padding-inline: var(--app-padding-inline);
    }

    &.background-color--grey {
      color: var(--color-text);
      background-color: var(--color-accent-grey);
    }

    &.background-color--white {
      color: var(--color-text);
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
