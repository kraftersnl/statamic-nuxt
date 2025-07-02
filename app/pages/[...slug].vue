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
    statusMessage: 'Pagina niet gevonden',
  });
}

const page = computed(() => entries.value?.data?.[0]);

const seoTitle = computed(
  () => page.value?.seo?.meta?.title || page.value?.title
);
const seoDescription = computed(
  () => page.value?.seo?.meta?.description || page.value?.summary
);
const seoImage = computed(
  () => page.value?.seo?.social?.image || useRuntimeConfig()?.public?.ogImage
);

useSeoMeta({
  title: seoTitle.value,
  ogTitle: seoTitle.value,
  description: seoDescription.value,
  ogDescription: seoDescription.value,
  ogImage: seoImage.value,
  ogUrl: useRuntimeConfig()?.public?.siteUrl + page.value?.url,
});
</script>

<template>
  <div class="page-wrapper">
    <PageBlockMapper :data="page?.blocks" />
  </div>
</template>
