<script setup lang="ts">
defineProps<{
  data?: StatamicGlobalCompany;
  navList?: boolean;
}>();
</script>

<template>
  <div class="footer-sub">
    <div class="footer-sub-content">
      <TheFooterNav v-if="navList?.length" :list="navList" />

      <slot name="copyright">
        <TheFooterCopyright :text="data.title" />
      </slot>

      <!-- <NuxtLink
        v-if="data?.linkedin"
        :to="data.linkedin"
        class="linkedin-link"
        target="_blank"
        external
      >
        <span class="visuallyhidden">{{ data?.title + ' op LinkedIn' }}</span>
        <Icon name="entypo-social:linkedin-with-circle" />
      </NuxtLink> -->
    </div>
  </div>
</template>

<style>
.footer-sub {
  font-size: var(--font-size-xs);
  background-color: var(--color-sub-footer);
  padding-inline: 2rem;
  padding-block: 1.5rem;

  .footer-sub-content {
    display: flex;
    justify-content: center;
    margin-inline: auto;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
    max-width: var(--app-max-width);
    color: var(--color-grey-text);
    font-size: var(--font-size-xxs);
  }

  .linkedin-link {
    display: flex;
    font-size: var(--font-size-xl);

    .iconify {
      color: #3276c8 !important;
    }
  }
}
</style>
