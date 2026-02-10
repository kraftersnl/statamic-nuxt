<script setup lang="ts">
defineProps<{
  data?: CTAPageBlock;
}>();
</script>

<template>
  <div class="page-block cta-block">
    <NuxtLink :to="data?.link?.url" class="cta-link">
      <div class="page-block-content">
        <div class="cta-link-content">
          <div class="link-label">
            {{ data?.link_label }}
          </div>
          <Icon name="material-symbols:arrow-right-alt-rounded" />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style>
.page-block.cta-block {
  a {
    display: block;
    padding-block: 8rem;
    font-size: var(--font-size-xl);
    color: var(--color-white);
    font-family: var(--font-family-heading);
    line-height: var(--line-height-heading);
    background-color: var(--color-black);
    text-decoration: none;
    transition: background-color var(--duration-xs);

    .iconify {
      font-size: var(--font-size-xxl);
      color: var(--color-accent-graphic);
    }

    &:hover {
      background-color: var(--color-accent-graphic);

      .iconify {
        color: var(--color-white);
      }
    }

    .cta-link-content {
      display: grid;
      gap: 0.5rem;
      grid-template-columns: 1fr auto;
      align-items: center;
    }
  }
}
</style>
