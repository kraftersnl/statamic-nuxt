<script setup lang="ts">
const { is = 'h2' } = defineProps<{
  is?: string;
  superTitle?: string;
  title?: string;
}>();
</script>

<template>
  <component :is="is" v-if="superTitle || title">
    <span v-if="superTitle" class="super-title">
      {{ superTitle }}
    </span>
    <span v-if="superTitle" class="visuallyhidden"> - </span>

    <span v-if="title" class="title">
      {{ title }}
    </span>
  </component>
</template>

<style>
:where(h2:has(.super-title)) {
  display: grid;

  .super-title {
    font-size: var(--font-size-xxxs);
    color: var(--color-grey-text);
    letter-spacing: 10%;
    text-transform: uppercase;
    margin-block-end: 1.5rem;
  }
  .title {
    max-width: 640px;
  }
}
</style>
