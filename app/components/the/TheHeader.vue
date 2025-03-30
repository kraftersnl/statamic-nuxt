<script setup lang="ts">
const { data: nav } = await useAsyncData<{ data: NavTreeItem[] }>(
  'main-nav',
  () =>
    $fetch('/api/navs/main/tree', {
      baseURL: useRuntimeConfig().public.statamicUrl,
    })
);

const mobileMenuRef = useTemplateRef<DialogComponent>('mobileMenu');

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
  <header class="app-header">
    <div class="app-header-content">
      <MobileMenu
        ref="mobileMenu"
        button-variant="ghost"
        button-size="lg"
        button-icon-size="lg"
        position="inline-start"
      >
        <template #default>
          <MenuList
            :list="mainNav"
            button-variant="sidebar"
            button-size="xl"
            font-size="md"
            label="Menu"
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

    <ThemeToggle />

    <NuxtLoadingIndicator color="var(--color-accent)" />
  </header>
</template>

<style>
@media (min-width: 768px) {
  .app-header-content .mobile-menu-wrapper {
    display: none;
  }
}

.app-header {
  position: relative;
  background-color: rgb(var(--rgb-app-nav) / 85%);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 2rem;
  }

  .logo-link {
    margin-inline: auto;
    padding-right: 3.5rem;

    .logo-slot {
      display: grid;
    }
    &:has(.logo-slot:empty) {
      display: none;
    }

    @media (min-width: 768px) {
      margin-left: 0;
      padding-right: 0;
    }
  }

  .menu-list-nav {
    display: none;
    padding-inline-end: 3rem;
  }

  @media (min-width: 768px) {
    .menu-list-nav {
      display: block;
    }
  }
}

.theme-toggle-button {
  position: absolute;
  right: 2rem;
  top: 1rem;
}
</style>
