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
