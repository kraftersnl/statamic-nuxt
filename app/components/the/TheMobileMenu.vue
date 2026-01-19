<script setup lang="ts">
defineProps<{ list: NavTreeItem[] }>();

const { openMenuId, closeMenu } = useNav();

const mobileMenuRef = useTemplateRef<MobileMenuComponent>('mobileMenu');

function handleClose() {
  mobileMenuRef.value?.closeDialog();
  closeMenu();
}
</script>

<template>
  <MobileMenu
    ref="mobileMenu"
    button-variant="ghost"
    position="inline-end"
    :width="400"
    menu-button-size="xl"
  >
    <template #default>
      <NuxtLink to="/" class="logo-link" @click="mobileMenuRef?.closeDialog">
        <KraftersLogoHeader />
      </NuxtLink>

      <nav class="mobile-nav" aria-label="Mobiele navigatie">
        <ul role="list" class="mobile-menu--1">
          <li v-for="item in list" :key="item.page.id">
            <Button
              v-if="item.page"
              variant="sidebar"
              :to="item.page.link || item.page.url"
              class="nav-link"
              :label="item.page.title"
              @mouseover="openMenuId = item.page.id"
              @click="handleClose"
            />

            <ul v-if="item.children" role="list">
              <li v-for="child in item.children" :key="child.page.id">
                <Button
                  v-if="child.page"
                  :to="child.page.link || child.page.url"
                  class="nav-link"
                  variant="sidebar"
                  :label="child.page.title"
                  icon="material-symbols:chevron-right-rounded"
                  @click="handleClose"
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>

      <ThemeSwitch />
    </template>
  </MobileMenu>
</template>

<style>
.mobile-dialog {
  --app-padding-inline: 2rem;

  .dialog-content {
    padding-block-start: var(--app-padding-block);
  }

  .logo-link {
    max-width: max-content;
    margin-inline-start: var(--app-padding-inline);
    margin-block-end: 2.5rem;

    .logo {
      max-width: 100px;
      margin-block-start: 0.25rem;
    }
  }

  .theme-switch {
    margin-inline-start: var(--app-padding-inline);
    margin-block-start: 2.5rem;
  }
}

.mobile-nav {
  li {
    margin-block-start: 0.5rem;
  }
}
</style>
