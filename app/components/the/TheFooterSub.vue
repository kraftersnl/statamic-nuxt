<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
}>();

const { data: nav } = await useAsyncData<{ data: NavTreeItem[] }>(
  'footer-nav',
  () =>
    $fetch('/api/navs/footer/tree/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        fields: 'id,title,icon,url,link,slug,status',
      },
    }),
  { lazy: true }
);

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
  text-align: center;
  color: var(--color-grey-text);
  font-size: var(--font-size-xxs);
  background-color: var(--color-sub-footer);
  padding-block: 1.5rem;

  .subfooter-content {
    max-width: var(--app-max-width);
    padding-inline: var(--app-padding-inline);
    margin-inline: auto;
    display: grid;
    gap: 2rem;

    @media (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      &:has(nav) {
        justify-content: space-between;
      }
    }
  }

  a {
    color: var(--color-grey-text);

    &:hover {
      color: var(--color-text);
    }
  }
}
</style>
