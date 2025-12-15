<script setup lang="ts">
const props = defineProps<{ data: DividerBlock }>();

const backgroundColor = computed(() => {
  if (!props.data.color?.key || props.data.color.key === 'transparent')
    return 'transparent';
  return `var(--${props.data.color.key})`;
});
const computedStyle = computed(() => {
  return {
    'background-color': backgroundColor.value,
    'margin-block-start': props.data.margin_block_start + 'px',
    'margin-block-end': props.data.margin_block_end + 'px',
  };
});
</script>

<template>
  <div class="divider-wrapper">
    <div class="divider" :style="computedStyle" />
  </div>
</template>

<style>
.divider-wrapper {
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
}
</style>
