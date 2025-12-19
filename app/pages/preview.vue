<script setup lang="ts">
const route = useRoute();

const { data: entry } = await useAsyncData<{ data: StatamicPageEntry }>(
  route.path,
  () =>
    $fetch('/api/entry/preview/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        slug: route.query.slug,
        token: route.query.token,
      },
    })
);
console.log(entry.value);

if (!entry.value?.data?.id && !route.query.preview) {
  throw showError({
    statusCode: 404,
    statusMessage: 'Pagina niet gevonden',
  });
}

const seoTitle = computed(
  () => entry.value?.data?.seo?.meta?.title || entry.value?.data?.title
);
const seoDescription = computed(
  () => entry.value?.data?.seo?.meta?.description || entry.value?.data?.summary
);
const seoImage = computed(
  () =>
    entry.value?.data?.seo?.social?.image || useRuntimeConfig()?.public?.ogImage
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
  ogUrl: useRuntimeConfig()?.public?.siteUrl + entry.value?.data?.permalink,
});
</script>

<template>
  <div class="page-wrapper">
    <div class="page-block-content">
      <Button
        v-if="entry?.data?.parent && entry?.data?.parent?.url !== '/'"
        :to="entry?.data?.parent?.url"
        :label="entry?.data?.parent?.title"
        variant="topbar"
        radius="xl"
        icon="material-symbols:arrow-back"
        class="back-button"
      />
    </div>

    <PageBlockMapper :blocks="entry?.data?.blocks" />
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
