<script setup lang="ts">
defineProps<{ data?: TitleContentBlock }>();
</script>

<template>
  <div
    :class="[
      'statamic-title-wrapper',
      data?.icon_position?.key && `icon-position--${data.icon_position.key}`,
    ]"
  >
    <StatamicIcon v-if="data?.icon" :icon="data?.icon" />

    <h2
      :class="['statamic-title']"
      :style="{
        fontSize: data?.font_size?.key
          ? `var(--font-size-${data?.font_size?.key})`
          : 'xxl',
        fontWeight: data?.font_weight?.key
          ? `var(--font-weight-${data?.font_weight?.key})`
          : 'bold',
      }"
    >
      {{ data?.title }}
    </h2>
  </div>
</template>

<style>
.statamic-title-wrapper {
  display: flex;
  gap: 1rem;
  margin-block-end: 1rem;

  h2 {
    margin-block-end: 0rem;
  }

  .icon {
    color: var(--color-accent-graphic);

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  &.icon-position--block-start {
    flex-direction: column;
  }

  &.icon-position--inline-start {
    flex-direction: row;
  }
}

.statamic-title {
  font-family: var(--font-family-heading);
  white-space: pre-line;
}
</style>
