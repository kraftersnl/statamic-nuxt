<script setup lang="ts">
defineProps<{
  navList?: MenuItem[];
}>();

const { data: seo } = await useAsyncData<{ data: StatamicGlobalSEO }>(
  'seo',
  () =>
    $fetch('/api/globals/seo', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    }),
  { lazy: true }
);

useHead({
  titleTemplate: `%s ${seo.value?.data?.seo_meta_title_seperator} ${seo.value?.data?.seo_website_title}`,
});

const { data: company } = await useAsyncData<{ data: StatamicGlobalCompany }>(
  'company-globals-for-footer',
  () =>
    $fetch('/api/globals/company', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    }),
  { lazy: true }
);

const route = useRoute();
const appRef = useTemplateRef('app');

if (typeof window !== 'undefined') {
  window.onmessage = function (e) {
    if (e.data.name === 'statamic.preview.updated') {
      refreshNuxtData();
    }
  };

  watch(
    () => route.path,
    () => {
      appRef.value?.focus();
    }
  );
}
</script>

<template>
  <div ref="app" tabindex="-1">
    <slot name="dialog" />

    <NuxtRouteAnnouncer />

    <SkipLink />

    <div class="header-main-wrapper">
      <slot name="header">
        <TheHeader>
          <template #logo>
            <slot name="logo" />
          </template>
        </TheHeader>
      </slot>

      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>

    <slot name="footer" v-bind="{ company }">
      <LazyTheFooter :data="company?.data" :nav-list="navList">
        <template #favicon>
          <slot name="favicon" />
        </template>

        <template #copyright>
          <slot name="copyright" />
        </template>
      </LazyTheFooter>
    </slot>
  </div>
</template>

<style>
.header-main-wrapper {
  position: relative;
  z-index: 1;
  isolation: isolate;
  background-color: var(--color-bg);

  /* cut off background shape when revealing footer*/
  overflow: clip;
}
</style>
