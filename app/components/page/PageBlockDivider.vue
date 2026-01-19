<script setup lang="ts">
const props = defineProps<{ data: DividerBlock }>();

const backgroundColor = computed(() => {
  if (!props.data.color?.key || props.data.color.key === 'transparent')
    return 'transparent';
  return `var(--${props.data.color.key})`;
});

const spacingStyle = computed(() => {
  return {
    'padding-block-start': (props.data.margin_block_start ?? 0) + 'px',
    'padding-block-end': (props.data.margin_block_end ?? 0) + 'px',
  };
});
</script>

<template>
  <div class="divider-wrapper" :style="spacingStyle">
    <div class="divider" :style="{ 'background-color': backgroundColor }" />
  </div>
</template>

<style>
.divider-wrapper {
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
}
</style>
