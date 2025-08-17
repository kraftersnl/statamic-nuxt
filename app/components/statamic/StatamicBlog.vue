<script setup lang="ts">
const { data } = useArticles();
</script>

<template>
  <StatamicArticleList :entries="data?.data" />
</template>
