<script setup lang="ts">
const props = defineProps<{ data?: CalloutContentBlock }>();
</script>

<template>
  <div
    :class="[
      'statamic-callout',
      data?.background_color?.key &&
        `background-color--${data.background_color.key}`,
    ]"
  >
    <p>{{ data?.content }}</p>
  </div>
</template>

<style>
.statamic-callout {
  padding: var(--app-padding-inline);
  margin-block: 2.5rem;

  /* @media (min-width: 768px) {
    margin-inline: var(--app-padding-inline);
  } */

  p {
    margin-block-end: 0;
  }

  &.background-color--white {
    background-color: var(--color-bg);
  }

  &.background-color--grey {
    background-color: var(--color-accent-grey);
  }

  &.background-color--black {
    background-color: var(--color-black-bg);
    color: #ffffff;
    border: 1px solid var(--card-border-color);
  }
}
</style>
