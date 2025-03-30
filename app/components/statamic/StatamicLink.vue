<script setup lang="ts">
defineProps<{ data?: ButtonContentBlock }>();
</script>

<template>
  <NuxtLink :to="data?.button_link" class="content-block-link">
    <span>{{ data?.button_label }}</span>

    <StatamicIcon v-if="data?.button_icon" :icon="data.button_icon" />
  </NuxtLink>
</template>

<style>
.content-block-link {
  display: inline-flex;
  gap: 0.25rem;

  &:hover {
    color: var(--color-accent);
  }
}
</style>
