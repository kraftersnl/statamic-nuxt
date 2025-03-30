<script setup lang="ts">
const route = useRoute();

const { data: entries } = await useAsyncData<{ data: StatamicArticleEntry[] }>(
  route.path,
  () =>
    $fetch(`/api/collections/${route.params.collection}/entries/`, {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        'filter[url]': stripTrailingSlash(route.path),
        token: route.query.token,
      },
    })
);

if (!entries.value?.data?.length && !route.query.token) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Entry not found',
  });
}

const page = computed(() => entries.value?.data?.[0] || undefined);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.summary,
  ogImage: page.value?.image?.permalink || '/krafters-logo-og.png',
});
</script>

<template>
  <div class="page-wrapper entry-page">
    <PageBlockMapper :data="page?.blocks" />
  </div>
</template>

<style>
.entry-page {
  .hero-image .image--full-width img {
    /* max-height: 65svh; */
  }
}
</style>
