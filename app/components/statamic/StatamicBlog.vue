<script setup lang="ts">
const { limit = undefined } = defineProps<{ limit?: number }>();

const { data: entries } = useArticles({ limit: limit });
</script>

<template>
  <StatamicArticleList :entries="entries?.data" />
</template>
