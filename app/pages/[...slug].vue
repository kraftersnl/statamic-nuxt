<script setup lang="ts">
const route = useRoute();

const { data: entries } = await useAsyncData<{ data: StatamicPageEntry[] }>(
  route.path,
  () =>
    $fetch('/api/collections/pages/entries', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        'filter[url]': stripTrailingSlash(route.path),
        fields: 'id,title,summary,blocks,url,permalink,image,published',
        token: route.query.token,
      },
    })
);

if (!entries.value?.data?.length && !route.query.preview) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Page not found',
  });
}

const page = computed(() => entries.value?.data?.[0]);

useSeoMeta({
  title: page.value?.title,
  description: page.value?.summary,
  ogImage: page.value?.image?.permalink || useRuntimeConfig().public.ogImage,
});
</script>

<template>
  <div class="page-wrapper">
    <PageBlockMapper :data="page?.blocks" />
  </div>
</template>
