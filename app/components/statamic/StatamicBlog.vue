<script setup lang="ts">
const { limit = 3 } = defineProps<{ limit?: number }>();

const { data } = useArticles({ limit: limit });
</script>

<template>
  <StatamicArticleList :entries="data?.data" />
</template>
