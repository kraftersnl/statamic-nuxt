<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
}>();

const { data: nav } = await useAsyncData<{ data: NavTreeItem[] }>(
  'footer-nav',
  () =>
    $fetch('/api/navs/footer/tree/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    }),
  { lazy: true }
);

console.log(nav.value?.data);

const footerNav = computed((): MenuItem[] =>
  nav.value?.data?.length
    ? nav.value.data.map((x) => ({
        id: x.page.id,
        to: x.page.url,
        label: x.page.title,
      }))
    : []
);
</script>

<template>
  <div class="subfooter">
    <div class="subfooter-content">
      <TheFooterNav v-if="footerNav?.length" :list="footerNav" />

      <slot name="copyright">
        <TheFooterCopyright :text="data?.title" />
      </slot>
    </div>
  </div>
</template>

<style>
.subfooter {
  font-size: var(--font-size-xxs);
  background-color: var(--color-sub-footer);
  padding-block: 1.5rem;

  .subfooter-content {
    max-width: var(--app-max-width);
    padding-inline: var(--app-padding-inline);
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    color: var(--color-grey-text);

    &:has(nav) {
      justify-content: space-between;
    }
  }
}
</style>
