<script setup lang="ts">
defineProps<{ data?: ButtonGroupContentBlock }>();
</script>

<template>
  <div v-if="data?.buttons?.length" class="statamic-button-group">
    <StatamicButton
      v-for="button in data?.buttons"
      :key="button.id"
      :data="button"
    />
  </div>
</template>

<style>
.statamic-button-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2.5rem;
  margin-block: 2.5rem;
}
</style>
