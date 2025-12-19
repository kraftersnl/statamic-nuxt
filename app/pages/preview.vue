<script setup lang="ts">
const route = useRoute();

const { data: entry } = await useAsyncData<{ data: StatamicPageEntry }>(
  `${route.path}-${route.query.token}`,
  () =>
    $fetch('/api/entry/preview/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        id: route.query.id,
        url: route.query.url,
        token: route.query.token,
        preview: true,
      },
    })
);
const page = computed(() => entry.value?.data);
console.log(page.value);
</script>

<template>
  <BlogArticle v-if="page?.collection?.handle === 'articles'" :page="page" />

  <div v-else class="page-wrapper">
    <PageBlockMapper :blocks="page?.blocks" />
  </div>
</template>
