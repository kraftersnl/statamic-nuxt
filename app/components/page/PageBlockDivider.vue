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
  background-color: var(--color-grey-light);
}
</style>
