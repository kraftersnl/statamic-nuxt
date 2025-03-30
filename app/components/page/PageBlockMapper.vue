<script setup lang="ts">
import PageBlockBasic from '~/components/page/PageBlockBasic.vue';
import PageBlockForm from '~/components/page/PageBlockForm.vue';
import PageBlockArticles from '~/components/page/PageBlockArticles.vue';
import PageBlockEmployees from '~/components/page/PageBlockEmployees.vue';

defineProps<{ data?: StatamicPageBlock[] }>();

const PageBlockHero = resolveComponent('PageBlockHero');

function getBlockComponent(block: StatamicPageBlock) {
  if (block.type === 'hero') return PageBlockHero;
  if (block.type === 'basic') return PageBlockBasic;
  if (block.type === 'form') return PageBlockForm;
  if (block.type === 'articles') return PageBlockArticles;
  if (block.type === 'employees') return PageBlockEmployees;
}
</script>

<template>
  <div class="page-blocks-wrapper">
    <slot />

    <template v-for="pageBlock in data" :key="pageBlock.id">
      <component :is="getBlockComponent(pageBlock)" :data="pageBlock" />
    </template>
  </div>
</template>

<style>
.page-block {
  scroll-margin-block: 1rem;

  &:not(.hero-block) {
    padding-block-end: 10rem;
  }

  @media (min-width: 360px) and (min-height: 360px) {
    scroll-margin-block: 4rem;
  }
}

.page-block-content {
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
}
</style>
