<script setup lang="ts">
defineProps<{ data?: StatamicPageBlock[] }>();

const PageBlockHero = resolveComponent('PageBlockHero');
const PageBlockTwoColsText = resolveComponent('PageBlockTwoColsText');
const PageBlockTwoColsImage = resolveComponent('PageBlockTwoColsImage');
const PageBlockTestimonials = resolveComponent('PageBlockTestimonials');
const PageBlockBasic = resolveComponent('PageBlockBasic');
const PageBlockColumns = resolveComponent('PageBlockColumns');
const PageBlockForm = resolveComponent('PageBlockForm');
const PageBlockArticles = resolveComponent('PageBlockArticles');
const PageBlockEmployees = resolveComponent('PageBlockEmployees');
const PageBlockSponsors = resolveComponent('PageBlockSponsors');
const PageBlockGrid = resolveComponent('PageBlockGrid');

function getBlockComponent(block: StatamicPageBlock) {
  if (block.type === 'hero') return PageBlockHero;
  if (block.type === 'two_cols_text') return PageBlockTwoColsText;
  if (block.type === 'two_cols_image') return PageBlockTwoColsImage;
  if (block.type === 'testimonials') return PageBlockTestimonials;
  if (block.type === 'basic') return PageBlockBasic;
  if (block.type === 'columns') return PageBlockColumns;
  if (block.type === 'form') return PageBlockForm;
  if (block.type === 'articles') return PageBlockArticles;
  if (block.type === 'employees') return PageBlockEmployees;
  if (block.type === 'sponsors') return PageBlockSponsors;
  if (block.type === 'grid') return PageBlockGrid;
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
.page-block-content {
  max-width: var(--app-max-width);
  padding-inline: var(--app-padding-inline);
  margin-inline: auto;
}

.page-block {
  isolation: isolate;
  position: relative;
  scroll-margin-block: 1rem;

  @media (min-width: 360px) and (min-height: 360px) {
    scroll-margin-block: 4rem;
  }

  :where(h2:has(.super-title)) {
    margin-block-end: 0;
    display: grid;

    .super-title {
      font-size: var(--font-size-xxxs);
      color: var(--color-grey-text);
      letter-spacing: 10%;
      text-transform: uppercase;
      margin-block-end: 1.5rem;
    }
  }

  &.background-color--white {
    background-color: var(--color-bg);
  }
  &.background-color--grey {
    background-color: var(--color-grey-bg);
  }
  &.background-color--black {
    --color-grey-text: hsl(132 4% 76%);
    background-color: var(--color-black-bg);
    color: #ffffff;
  }

  .background-shape {
    position: absolute;
    z-index: -1;
  }

  .background-shape--rectangle-dots {
    left: 80px;
    width: var(--shape-width, 120px);
    height: auto;
  }

  .background-shape--circle-stripes {
    bottom: -20%;
    left: var(--app-padding-inline);
    width: var(--shape-width, 140px);
    height: auto;
  }

  .background-shape--circle-dots {
    height: auto;
  }

  &.shape-position--block-start {
    padding-block-start: 6rem;

    .background-shape--circle-dots {
      top: 0%;
      left: 25%;
      width: var(--shape-width, 320px);
    }

    .background-shape--rectangle-dots {
      top: 10%;
    }
  }

  &.shape-position--block-end {
    .background-shape--circle-dots {
      bottom: -20%;
      width: var(--shape-width, 240px);
      left: 30vw;
    }

    .background-shape--rectangle-dots {
      bottom: 10%;
    }
  }
}
</style>
