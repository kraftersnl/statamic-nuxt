<script setup lang="ts">
const route = useRoute();

const { data: entries } = await useAsyncData<{ data: StatamicPageEntry[] }>(
  route.path,
  () =>
    $fetch('/api/collections/pages/entries', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        'filter[url]': stripTrailingSlash(route.path),
        fields: 'id,title,summary,blocks,url,permalink,image,parent',
        token: route.query.token,
        livePreview: route.query['live-preview'],
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
  twitterTitle: seoTitle.value,
  description: seoDescription.value,
  ogDescription: seoDescription.value,
  twitterDescription: seoDescription.value,
  ogImage: seoImage.value,
  twitterImage: seoImage.value,
  twitterCard: 'summary_large_image',
  lang: 'nl-NL',
  icon: useRuntimeConfig()?.public?.siteUrl + '/favicon.svg',
  ogUrl: useRuntimeConfig()?.public?.siteUrl + page.value?.url,
});
</script>

<template>
  <div class="page-wrapper">
    <div class="page-block-content">
      <Button
        v-if="page?.parent && page?.parent?.url !== '/'"
        :to="page?.parent?.url"
        :label="page?.parent?.title"
        variant="topbar"
        radius="xl"
        icon="material-symbols:arrow-back"
        class="back-button"
      />
    </div>

    <PageBlockMapper :blocks="page?.blocks" />
  </div>
</template>

<style>
.page-wrapper {
  .back-button {
    position: absolute;
    top: 0;
    z-index: 1;
    margin-block-start: 1.25rem;
    max-width: max-content;
  }
}
</style>
