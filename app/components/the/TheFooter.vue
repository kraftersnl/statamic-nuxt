<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
  footerLogo?: string | false;
  navList?: MenuItem[];
}>();
</script>

<template>
  <footer class="app-footer">
    <hr />

    <div class="footer-content">
      <template v-if="footerLogo">
        <NuxtImg :src="footerLogo" alt="" width="120" height="120" />
      </template>

      <TheFooterLinks :data="data" />
    </div>

    <TheFooterSub :data="data" :nav-list="navList">
      <template #copyright>
        <slot name="copyright" />
      </template>
    </TheFooterSub>
  </footer>
</template>

<style>
.app-footer {
  background-color: var(--color-bg);
  font-size: var(--font-size-xs);

  img {
    border-radius: var(--radius-lg);
  }

  .footer-content {
    max-width: var(--app-max-width);
    padding-inline: 5rem;
    padding-block: 8rem;
    display: grid;
    align-items: start;
    justify-content: space-around;
    margin-inline: auto;
    row-gap: 4rem;
    column-gap: 2rem;

    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
      /* grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr)); */

      > *:not(img) {
        flex-basis: 200px;
      }
    }
  }
}
</style>
