<script setup lang="ts">
const { data: nav } = await useAsyncData<{ data: NavTreeItem[] }>(
  'main-nav',
  () =>
    $fetch('/api/navs/main/tree/', {
      baseURL: useRuntimeConfig().public.statamicUrl,
      query: {
        fields: 'id,title,icon,url,link,slug,published',
      },
    })
);

const mobileMenuRef = useTemplateRef<MobileMenuComponent>('mobileMenu');

const mainNav = computed((): MenuItem[] =>
  nav.value?.data?.length
    ? nav.value.data.map((x) => ({
        id: x.page.id,
        to: x.page.url,
        label: x.page.title,
        onClick: mobileMenuRef.value?.closeDialog,
      }))
    : []
);
</script>

<template>
  <slot name="top" />

  <header class="app-header">
    <div class="app-header-content">
      <MobileMenu
        ref="mobileMenu"
        button-variant="ghost"
        position="inline-start"
        menu-button-size="xl"
      >
        <template #default>
          <MenuList
            :list="mainNav"
            button-variant="sidebar"
            button-size="xl"
            font-size="md"
          />
        </template>
      </MobileMenu>

      <NuxtLink to="/" class="logo-link">
        <span class="visuallyhidden">Home</span>
        <div class="logo-slot">
          <slot name="logo" />
        </div>
      </NuxtLink>

      <MenuList :list="mainNav" button-variant="topbar" inline />
    </div>

    <slot name="right" />
    <ThemeToggle />

    <NuxtLoadingIndicator color="var(--color-accent-graphic)" />
  </header>
</template>

<style>
@media (min-width: 1024px) {
  .app-header-content .mobile-menu-wrapper {
    display: none;
  }
}

.app-header {
  position: relative;
  background-color: var(--color-white);

  @media (min-width: 360px) and (min-height: 360px) {
    position: sticky;
    z-index: 2;
    top: 0;
  }
}

.app-header-content {
  margin-inline: auto;
  padding-inline: var(--app-padding-inline);
  max-width: var(--app-max-width);
  min-height: var(--app-header-height);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  padding-inline-end: 7.5rem;

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 2rem;
  }

  .logo-link {
    outline-offset: 0.5rem;
    margin-inline: auto;

    .logo-slot {
      display: grid;
    }

    &:has(.logo-slot:empty) {
      display: none;
    }

    @media (min-width: 1024px) {
      margin-left: 0;
      padding-right: 0;
    }
  }

  .menu-list-nav {
    margin-inline: auto;
    display: none;
    padding-inline-end: 3rem;
  }

  @media (min-width: 1024px) {
    .menu-list-nav {
      display: block;
    }
  }
}

.theme-toggle-button {
  position: absolute;
  right: 2rem;
  top: calc((var(--app-header-height) - 2rem) / 2);
}
</style>
