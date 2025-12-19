<script setup lang="ts">
const route = useRoute();

const { data: entry } = await useAsyncData<{ data: StatamicPageEntry }>(
  route.path,
  () =>
    $fetch('/api/entry/preview/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        slug: route.query.slug,
        id: route.query.id,
        url: route.query.url,
      },
    })
);
console.log(entry.value);
</script>

<template>
  <BlogArticle
    v-if="entry?.data?.collection?.handle === 'articles'"
    :page="entry?.data"
  />

  <div v-else class="page-wrapper">
    <PageBlockMapper :blocks="entry?.data?.blocks" />
  </div>
</template>
