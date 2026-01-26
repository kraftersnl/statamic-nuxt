<script setup lang="ts">
defineProps<{
  data?: StatamicSpacer;
}>();
</script>

<template>
  <div
    :class="['statamic-spacer', data?.mobile ? 'mobile-and-desktop' : '']"
    :style="{ '--margin-block-start': `${data?.margin ?? 0}px` }"
  />
</template>

<style>
.statamic-spacer {
  @media (min-width: 768px) {
    margin-block-start: var(--margin-block-start, 0);
  }

  &.mobile-and-desktop {
    margin-block-start: var(--margin-block-start, 0);
  }
}
</style>
