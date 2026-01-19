<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
}>();
</script>

<template>
  <footer class="app-footer">
    <hr />

    <div class="footer-content">
      <slot name="favicon" />

      <TheFooterLinks :data="data" />
    </div>

    <TheFooterSub :data="data">
      <template #copyright>
        <slot name="copyright" />
      </template>
    </TheFooterSub>
  </footer>
</template>

<style>
.app-footer {
  background-color: var(--color-grey-bg);
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

    @media (min-width: 768px) {
      &:not(:has(img)) {
        display: flex;
        flex-wrap: wrap;
      }
    }
    @media (min-width: 1024px) {
      display: flex;
      flex-wrap: wrap;
    }
  }
}
</style>
