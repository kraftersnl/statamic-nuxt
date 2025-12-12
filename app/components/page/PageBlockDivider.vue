<script setup lang="ts">
const props = defineProps<{ data: DividerBlock }>();

const computedStyle = computed(() => {
  return {
    'margin-block': props.data.margin + 'px',
  };
});
</script>

<template>
  <div class="page-block-content">
    <div class="divider" :style="computedStyle" />
  </div>
</template>

<style>
.divider {
  max-width: calc(var(--app-max-width) - 5 * var(--app-padding-inline));
  margin-inline: auto;
  background-color: var(--color-grey-light);
}
</style>
x4
