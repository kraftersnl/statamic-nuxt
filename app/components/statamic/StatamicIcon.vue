<script setup lang="ts">
defineProps<{ icon?: string }>();
</script>

<template>
  <Icon v-if="icon?.startsWith('material-symbols:')" :name="icon" />
  <span v-else-if="icon" class="icon" aria-hidden="true" v-html="icon" />
</template>

<style>
.icon {
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  transition: inherit;

  svg {
    width: 1rem;
    height: 1rem;
  }
}
</style>
