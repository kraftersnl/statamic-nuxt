<script setup lang="ts">
const { openMenuId, closeMenu } = useNav();

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
</script>

<template>
  <slot name="top" />

  <header class="app-header">
    <div class="app-header-content">
      <NuxtLink to="/" class="logo-link">
        <span class="visuallyhidden">Home</span>
        <div class="logo-slot">
          <slot name="logo" />
        </div>
      </NuxtLink>

      <div class="wrapper">
        <nav class="menu-list-nav" aria-label="Hoofdnavigatie">
          <ul class="nav-list" role="list">
            <li v-for="item in nav?.data" :key="item.page.id" class="nav-item">
              <Button
                v-if="item.page"
                variant="topbar"
                :to="item.page.link || item.page.url"
                :label="item.page.title"
                class="nav-link"
                @mouseover="openMenuId = item.page.id"
                @click="closeMenu"
              />

              <StatamicSubMenu
                v-if="item.children?.length"
                ref="subMenuElements"
                v-model="openMenuId"
                :data="item"
                @click="closeMenu"
              />
            </li>
          </ul>
        </nav>

        <ThemeSwitch />
      </div>

      <TheMobileMenu :list="nav?.data" />
    </div>

    <slot name="right" />

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
  border-block-end: 1px solid var(--color-grey-light);
  position: relative;
  background-color: hsl(var(--hsl-app-nav) / 90%);
  backdrop-filter: blur(5px);

  @media (min-width: 360px) and (min-height: 360px) {
    position: sticky;
    z-index: 2;
    top: 0;
  }
}

.app-header-content {
  position: relative;
  margin-inline: auto;
  padding-inline: var(--app-padding-inline);
  max-width: var(--app-max-width);
  min-height: var(--app-header-height);
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1024px) {
    justify-content: center;
    gap: 2rem;
  }

  .logo-link {
    outline-offset: 0.5rem;
    margin-inline-end: auto;

    .logo-slot {
      display: grid;
    }

    &:has(.logo-slot:empty) {
      display: none;
    }

    @media (min-width: 1024px) {
      margin-inline-start: 0;
      padding-inline-end: 0;
    }
  }

  .menu-list-nav {
    display: none;
    padding-inline-end: 8rem;
  }

  @media (min-width: 1024px) {
    .menu-list-nav {
      display: block;
    }
  }

  .nav-item {
    position: relative;
    display: flex;
    align-items: center;
  }

  .nav-list {
    flex-shrink: 0;
    flex-grow: 1;
    display: flex;
    margin-inline: auto;
    align-items: center;
    column-gap: 2.5rem;

    @media (min-width: 360px) {
      justify-content: center;
    }

    > li {
      min-height: 4rem;
      white-space: nowrap;

      > a {
        margin-block: 1.25rem;
      }
    }
  }
}

.app-header {
  .theme-switch {
    display: none;
    position: absolute;
    top: calc(1px + 1.25rem);
    right: var(--app-padding-inline);

    @media (min-width: 1024px) {
      display: flex;
    }
  }
}
</style>
