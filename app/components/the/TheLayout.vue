<script setup lang="ts">
useHead({ titleTemplate: '%s | ' + useRuntimeConfig().public.siteTitle });

defineProps<{
  navList?: MenuItem[];
}>();

const route = useRoute();
const appRef = useTemplateRef('app');

const { data: company } = await useAsyncData<{ data: StatamicGlobalCompany }>(
  'company',
  () =>
    $fetch('/api/globals/company', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    }),
  { lazy: true }
);

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
    <NuxtRouteAnnouncer />

    <SkipLink />

    <TheHeader>
      <template #logo>
        <slot name="logo" />
      </template>
    </TheHeader>

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <LazyTheFooter :data="company?.data" :nav-list="navList">
      <template #favicon>
        <slot name="favicon" />
      </template>

      <template #copyright>
        <slot name="copyright" />
      </template>
    </LazyTheFooter>
  </div>
</template>
