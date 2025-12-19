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
  <div class="page-wrapper">
    <PageBlockMapper v-if="entry?.data?.blocks" :blocks="entry?.data?.blocks" />

    <pre v-else>{{ entry }}</pre>
  </div>
</template>
