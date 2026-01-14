<script setup lang="ts">
const { limit = undefined, random_layout = undefined } = defineProps<{
  limit?: number;
  random_layout?: boolean;
}>();

const { data: entries } = useCases({ limit: limit });
</script>

<template>
  <StatamicCasesList :entries="entries?.data" :random_layout="random_layout" />
</template>
